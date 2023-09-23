describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://swapi.dev/api/people/?page=1', {
    statusCode: 200,
    fixture: 'main_display_mock'
    }).as('mainDisplay')
    cy.visit('http://localhost:3000')
  })

  it('should show an error if the wrong URL is entered', () => {
    cy.intercept('GET', 'https://swapi.dev/api/peopl')
    cy.visit('http://localhost:3000/characte')
    cy.get('h2').should('contain', 'Sorry, this page does not exist')
  })

  it('should show a 500 level error if the server is down', () => {
    cy.intercept('GET', 'https://swapi.dev/api/people/1', {
    statusCode: 500,
    }).as('505error')
    cy.visit('http://localhost:3000/character/1')
    cy.wait('@505error')
    cy.get('h2').should('contain', '500: Unable to retrieve from server') 
    .get('.error-img').should('have.attr', 'src')
    .get('.retry').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  
  it('should show a 404 level error if the character is not found', () => {
    cy.intercept('GET', 'https://swapi.dev/api/people/1', {
      statusCode: 404,
    }).as('404error')
    cy.visit('http://localhost:3000/character/1')
    cy.wait('@404error')
    cy.get('h2').should('contain', '404: Unable to retrieve from server') 
    .get('.error-img').should('have.attr', 'src')
    .get('.retry').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should have luke skywalker details', () => {
    cy.intercept('GET', 'https://swapi.dev/api/people/1', {
    statusCode: 200,
    fixture: 'luke_skywalker_mock'
  }).as('lukeSkywalker')
    cy.wait('@mainDisplay')  
    cy.get(':nth-child(1) > div > a').click()
    cy.visit('http://localhost:3000/character/1')
    cy.wait('@lukeSkywalker')
    cy.get('header').within(() => {
      cy.get('h1').should('contain','Star Wars 101')
    })

    cy.get('article').should('exist').contains('h2', 'Luke Skywalker')
    .get('.background-image').should('have.attr', 'style', '--backdrop-img: url(/static/media/martin-reisch-ddEBSlXB4YQ-unsplash.851aea744462b333e966.jpg);')
    .get('.specific-character-favorite-image').should('have.attr', 'style', 'opacity: 0.25;', 'src')
    .get('.specific-character-favorite-image').click()
    cy.get('.specific-character-favorite-image').should('have.attr', 'style', 'opacity: 0.9;', 'src')
    
    cy.get('.selected-character-details').within(() => {
      cy.get('p').contains('Height: 172 cm')
      cy.get('p').contains('Hair Color: blond')
      cy.get('p').contains('Eye Color: blue')
      cy.get('p').contains('Skin Color: fair')
      cy.get('p').contains('Birth Year: 19BBY')
      cy.get('p').contains('Gender: male')
    })
    cy.get('.back-image').should('have.attr', 'src')
    .get('.back-to-main-link').should('exist')
    .get('.back').should('exist')
    .get('.back').should('contain', 'Back to Main')
    .get('.back').click()
    cy.url().should('eq', 'http://localhost:3000/')
    .get('.favorite').first().should('have.css', 'opacity', '0.9')
    .get('.favorite').last().should('have.css', 'opacity', '0.25')
  })
})
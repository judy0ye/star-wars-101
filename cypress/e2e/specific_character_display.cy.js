describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://swapi.dev/api/people/?page=1', {
    status: 200,
    fixture: 'main_display_mock'
  }).as('mainDisplay')
    cy.visit('http://localhost:3000')
  })

  it('should have luke skywalker details', () => {
    cy.intercept('https://swapi.dev/api/people/1', {
    status: 200,
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
    .get(':nth-child(1) > div > button > .favorite').should('have.css', 'opacity', '0.9')
    .get(':nth-child(2) > div > button > .favorite').should('have.css', 'opacity', '0.25')
  })
})
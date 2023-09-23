describe('main display', () => {
 beforeEach(() => {
  cy.intercept('GET', 'https://swapi.dev/api/people/?page=1', {
    statusCode: 200,
    fixture: 'main_display_mock'
  }).as('mainDisplay')
  cy.visit('http://localhost:3000')
 })

  it('should show a 500 level error if the server is down', () => {
    cy.intercept('GET', 'https://swapi.dev/api/people/?page=1', {
    statusCode: 500,
    }).as('505error')
    cy.visit('http://localhost:3000/')
    cy.wait('@505error')
    cy.get('h2').should('contain', '500: Unable to retrieve from server') 
    .get('.error-img').should('have.attr', 'src')
    .get('.retry').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should show a header', () => {
    cy.wait('@mainDisplay')
    cy.get('header').within(() => {
      cy.get('h1').should('contain','Star Wars 101')
    })
  })
  it('should show 3 characters', () => {
    cy.wait('@mainDisplay')
    cy.get('.characters-container').find('.character-card').should('have.length', 3)
  })
  it('should show Luke Skywalker as the first character and should toggle opacity upon click of image ', () => {
    cy.wait('@mainDisplay')
    cy.get('.character-card').first().contains('h2', 'Luke Skywalker')
    .get('.character-card').first().contains('a', 'See more')
    .get('.favorite').should('be.visible').and('have.css', 'opacity', '0.25')
    .get('.favorite').first().should('have.attr', 'alt', 'grogu with heart', 'src', 'style')
    .get('.favorite').first().click()
    cy.get('.favorite').first().should('have.css', 'opacity', '0.9')
    .get('.favorite').first().click()
    cy.get('.favorite').first().should('have.css', 'opacity', '0.25')
  })
  it('should show Obi-Wan Kenobi as the last character and should toggle opacity upon click of image', () => {
    cy.wait('@mainDisplay')
    cy.get('.character-card').last().contains('h2', 'Obi-Wan Kenobi')
    .get('.character-card').last().contains('a', 'See more')
    .get('.favorite').last().should('have.attr', 'alt', 'grogu with heart', 'src', 'style')
    .get('.favorite').last().click()
    cy.get('.favorite').last().should('have.css', 'opacity', '0.9')
    .get('.favorite').last().click()
    cy.get('.favorite').last().should('have.css', 'opacity', '0.25')
  })
  it('should have a view favorites button and view all button', () => {
    cy.wait('@mainDisplay')
    cy.get('.navigation-bar').first().contains('View Favorites')
    cy.get('.navigation-bar').last().contains('View All')
    .get('.favorite').last().click()
    cy.get('.favorite').last().should('have.css', 'opacity', '0.9')
    cy.get('.navigation-bar > :nth-child(2)').click()
    cy.get('.characters-container').find('.favorite-character-card').should('have.length', 1)
    cy.get('.characters-container').find('.favorite-character-card').contains('h2', 'Obi-Wan Kenobi')
    .get('.navigation-bar > :nth-child(1)').click()
    cy.get('.characters-container').find('.character-card').should('have.length', 3)
  })
  it('should bring user to a specific character page upon click of link and back to main display upon click of back button', () => {
    cy.intercept('GET', 'https://swapi.dev/api/people/1', {
      statusCode: 200,
      fixture: 'luke_skywalker_mock'
    }).as('lukeSkywalker')
    
    cy.wait('@mainDisplay')
    cy.get(':nth-child(1) > div > a').click()
    cy.wait('@lukeSkywalker')
    .url().should('eq', 'http://localhost:3000/character/1')
    cy.get('article').contains('h2', 'Luke Skywalker')
    cy.get('.back').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})
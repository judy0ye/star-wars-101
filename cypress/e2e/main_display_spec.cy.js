describe('template spec', () => {
 beforeEach(() => {
  cy.intercept('GET', 'https://swapi.dev/api/people/?page=1', {
    status: 200,
    fixture: 'main_display_mock'
  }).as('mainDisplay')
  cy.visit('http://localhost:3000')
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
    .get(':nth-child(1) > div > button > .favorite').should('be.visible').and('have.css', 'opacity', '0.25')
    .get(':nth-child(1) > div > button > .favorite').should('have.attr', 'alt', 'grogu with heart', 'src', 'style')
    .get(':nth-child(1) > div > button > .favorite').click()
    cy.get(':nth-child(1) > div > button > .favorite').should('have.css', 'opacity', '0.9')
    .get(':nth-child(1) > div > button > .favorite').click()
    cy.get(':nth-child(1) > div > button > .favorite').should('have.css', 'opacity', '0.25')
  })
  it('should show Obi-Wan Kenobi as the last character and should toggle opacity upon click of image', () => {
    cy.wait('@mainDisplay')
    cy.get('.character-card').last().contains('h2', 'Obi-Wan Kenobi')
    .get('.character-card').last().contains('a', 'See more')
    .get(':nth-child(3) > div > button > .favorite').should('have.attr', 'alt', 'grogu with heart', 'src', 'style')
    .get(':nth-child(3) > div > button > .favorite').click()
    cy.get(':nth-child(3) > div > button > .favorite').should('have.css', 'opacity', '0.9')
    .get(':nth-child(3) > div > button > .favorite').click()
    cy.get(':nth-child(3) > div > button > .favorite').should('have.css', 'opacity', '0.25')
  })
  it('should have a view favorites button and view all button', () => {
    cy.wait('@mainDisplay')
    cy.get('.navigation-bar').first().contains('View Favorites')
    cy.get('.navigation-bar').last().contains('View All')
    cy.get(':nth-child(2) > div > button > .favorite').click()
    cy.get(':nth-child(2) > div > button > .favorite').should('have.css', 'opacity', '0.9')
    cy.get('.navigation-bar > :nth-child(1)').click()
    cy.get('.characters-container').find('.character-card').should('have.length', 1)
    cy.get('.characters-container').find('.character-card').contains('h2', 'R5-D4')
    .get('.favorite').should('have.css', 'opacity', '0.9')
    .get('.navigation-bar > :nth-child(2)').click()
    cy.get('.characters-container').find('.character-card').should('have.length', 3)
  })
  it('should bring user to a specific character page upon click of link and back to main display upon click of back button', () => {
    cy.intercept('GET', 'https://swapi.dev/api/people/1', {
      status: 200,
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
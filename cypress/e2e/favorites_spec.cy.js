describe('no favorites', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://swapi.dev/api/people/?page=1', {
      statusCode: 200,
      fixture: 'main_display_mock'
    }).as('mainDisplay')
    cy.visit('http://localhost:3000')
  })
  it('should show no favorites on page if no characters have been favorited upon click', () => {
    cy.wait('@mainDisplay')
    cy.get('[href="/favorites"]').click()
    cy.get('.no-favorites').should('contain', 'No Favorites Yet')
    cy.get('[href="/"]').click()
    cy.wait('@mainDisplay')
    cy.get('.characters-container').find('.character-card').should('have.length', 3)
  })
})  
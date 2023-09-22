describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('https://swapi.dev/api/people/1', {
      status: 200,
      fixture: 'luke_skywalker_mock'
    })
  })
})
describe('landing page', () => {
  it('visits landing page', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
    cy.title().should('eq','Verification Service')
  })
})

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
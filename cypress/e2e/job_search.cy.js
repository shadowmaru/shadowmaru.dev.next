context('Job Search', () => {
  it('has my name', () => {
    cy.visit('/hello')

    cy.contains("Ricardo Yasuda")
  })

  it('has a photo', () => {
    cy.visit('/hello')

    cy.get('#profile-picture').should('be.visible');
  })

  it('has a People Management section', () => {
    cy.visit('/hello')

    cy.contains("People Management")
  })

  it('has a Recommendations section', () => {
    cy.visit('/hello')

    cy.contains("Recommendations")
  })

  it('has a coding section', () => {
    cy.visit('/hello')

    cy.contains("Coding")
  })

  it('has a products section', () => {
    cy.visit('/hello')

    cy.contains("Products")
  })

  it('has a speaking section', () => {
    cy.visit('/hello')

    cy.contains("Speaking")
  })
})


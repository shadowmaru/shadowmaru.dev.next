context('Resume', () => {
  it('has a working experience section', () => {
    cy.visit('/resume')

    cy.contains("Working Experience")
  })

  it('has a education experience section', () => {
    cy.visit('/resume')

    cy.contains("Education")
  })

  it('has at least the 3 previous employers', () => {
    cy.visit('/resume')

    cy.contains("SumUp")
    cy.contains("Smart Fit")
    cy.contains("Topster")
  })

  it('has at least the 2 previous education institutions', () => {
    cy.visit('/resume')

    cy.contains("Universidade de São Paulo")
    cy.contains("Universidade Metodista de São Paulo")
  })

  it('has a knowledge section', () => {
    cy.visit('/resume')

    cy.contains("Knowledge")
  })
})

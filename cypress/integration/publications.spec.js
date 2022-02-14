context('Publications', () => {
  it('it has a title', () => {
    cy.visit('/publications')

    cy.contains("Publications")
  })

  it('has at least the 3 previous publications', () => {
    cy.visit('/publications')

    cy.contains("InfoQ BR")
    cy.contains("O (comovente) guia de Ruby do Why")
    cy.contains("Aprenda a Programar")
  })
})

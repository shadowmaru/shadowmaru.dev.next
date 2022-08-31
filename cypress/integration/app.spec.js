context('App', () => {
  it('loads the app and shows greeting', () => {
    cy.visit("/")

    cy.contains("Hello 👋 , I'm Ricardo! I'm a Brazilian 🇧🇷 software developer 💻")
    cy.contains("I like to build software, using languages like Ruby, Elixir and JavaScript.")
  })

  it('has a link for the resume', () => {
    cy.visit("/")
    cy.get('a.resume').click()
    cy.location('pathname').should('eq', '/resume')
  })

  it('has a link for the publications', () => {
    cy.visit("/")
    cy.get('a.publications').click()
    cy.location('pathname').should('eq', '/publications')
  })

  it('has a list of posts', () => {
    cy.visit("/")
    cy.contains('Writing')
    cy.get('ul.writing__posts').should('exist')
  })
})

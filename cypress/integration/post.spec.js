context('Post', () => {
  it('show the post title', () => {
    cy.visit('/') // for now testing with real posts, TODO: posts fixtures
    cy.get('a.writing__posts__link').last().click()

    cy.contains("Using Notion for 1:1s")
  })
})

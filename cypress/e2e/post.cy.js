context("Post", () => {
  it("show the post title", () => {
    cy.visit("/"); // for now testing with real posts, TODO: posts fixtures
    cy.get("a.writing__posts__link").last().click();

    cy.contains("Using Notion for 1:1s");
  });

  it("has a title metadata with the post title and the site title", () => {
    cy.visit("/"); // for now testing with real posts, TODO: posts fixtures
    cy.title().should("eq", "Ricardo Yasuda, software developer");
    cy.get("a.writing__posts__link").last().click();

    cy.title().should(
      "eq",
      "Using Notion for 1:1s | Ricardo Yasuda, software developer",
    );
  });
});

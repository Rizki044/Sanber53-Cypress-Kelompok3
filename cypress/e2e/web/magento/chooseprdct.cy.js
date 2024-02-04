import('../../../support/commands.js');


describe('Search Product Functionality', () => {
  beforeEach(() => {
      // Menggunakan baseUrl dari cypress.config.js
      cy.login();
  })

  it('Search Product Failed - No Product Available', () => {
    cy.get('#search').type('xxx')
    cy.get('.action.search').click()

    cy.get('.message.notice').should('contain.text','Your search returned no results')
})

  it('Search Product Less Than 3 Characters', () => {
    cy.get('#search').type('bo{enter}')
    //cy.get('.action.search').click()

    cy.get('.message.notice').should('contain.text','Minimum Search query length is 3')
    cy.get('.message.notice').should('contain.text','Related search terms')
    cy.get('.item').contains('bo')

})

it('Search Product Matched', () => {
  cy.get('#search').type('bottle')
  cy.get('.action.search').click()

  cy.get('.item').contains('bottle')
})
})

import('../../../support/commands.js');

describe('Update Function',() => {
    beforeEach(() => {
        // Use baseUrl from cypress.config.js
        cy.login()
        cy.visit('/checkout/cart/')
    });

    it('Update Product', () => {
        cy.get('.action.update').click()
    })

    /// Edit product
    //it("Edit Product",() => {
           //})
    
    ///Delete product
  
})
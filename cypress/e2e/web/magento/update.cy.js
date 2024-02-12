import('../../../support/commands.js');

describe('Update Function',() => {
    beforeEach(() => {
        // Use baseUrl from cypress.config.js
        cy.login()
        cy.visit('/checkout/cart/')
    });

    // Add product to shopping cart
    it('Add product',() => {
      cy.get(':nth-child(7) > .item-info > .item > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
      cy.url("include","https://magento.softwaretestingboard.com/cruise-dual-analog-watch.html");  
      cy.get("#qty").type("1");
      cy.contains("Add to Cart",{timeout:30000}).click();
      cy.get(".showcart",{timeout:30000}).click();
      cy.get('.showcart').click();
      })

    // Remove product
      it('Remove from wishlist product', () => {
        cy.get(':nth-child(7) > .item-actions > td > .actions-toolbar > .action-delete');
        cy.get(':nth-child(7) > .item-actions > td > .actions-toolbar > .action-delete').click();  
    // Finally, make sure that the clear button no longer exists.
      })
 
     /// Edit item
     it('Edit item parameters',() => {
      cy.get(':nth-child(4) > .item-info > .item > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
      cy.get('#qty').clear();
      cy.get('#qty').type("1");
      cy.get("#product-addtocart-button").click();

      cy.get('#product-addtocart-button');
     }) 

    it('View Product', () => {
      cy.get('.action.showcart').click()
  })  
     
})
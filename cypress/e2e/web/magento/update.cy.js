import('../../../support/commands.js');

describe('Update Function',() => {
    beforeEach(() => {
        // Use baseUrl from cypress.config.js
        cy.login()
        cy.visit('/checkout/cart/')
    });

    /// Remove product
      it('Remove from wishlist product', () => {
        cy.get(':nth-child(7) > .item-actions > td > .actions-toolbar > .action-delete');
          cy.get(':nth-child(7) > .item-actions > td > .actions-toolbar > .action-delete').click();  
    // Finally, make sure that the clear button no longer exists.
        
      })
 
     /// Add discount product 
     
     
})
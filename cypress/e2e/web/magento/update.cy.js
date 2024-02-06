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

         ///Delete product
         it('can delete all completed tasks', () => {
            cy.contains('Remove item').click()
            cy.get('.todo-list li')
              .should('have.length', 1)
              .should('not.have.text', 'Pay electric bill')
            // Finally, make sure that the clear button no longer exists.
            cy.contains('Clear completed').should('not.exist')
          })
 
     /// Add discount product 
     
     
})
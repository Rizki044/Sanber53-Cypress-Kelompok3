import('../../../support/commands.js');

describe('View Function', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/checkout/cart')
    });

    it('View Product', () => {
        cy.get('.action.showcart').click()
    })

    it("displays all 3 products", () => {
        cy.visit('/checkout/cart')
        cy.get('.action.showcart')
          .eq(0)
          .within(() => {
            cy.get('.action.viewcart').should("contain", "Olivia 1/4 Zip Light Jacket")
            cy.get('.cart-price').should("contain", "$77.00")
          })
    
        cy.get('.action.showcart')
          .eq(1)
          .within(() => {
            cy.get('.item').should("contain", "Overnight Duffle")
            cy.get('.cart-price').should("contain", "$45.00")
          })
    
        cy.get('.action.showcart')
          .eq(2)
          .within(() => {
            cy.get('.item').should("contain", "Mach Street Sweatshirt")
            cy.get('.cart-price').should("contain", "$62.00")
          })
      })
    })

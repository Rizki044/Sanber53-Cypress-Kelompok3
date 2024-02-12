import('../../../support/commands.js');

describe('View Function', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/checkout/cart')
    });

    it('View Product', () => {
        cy.get('.action.showcart').click()
    })

    it("display product", () => {
      cy.get(':nth-child(3) > .item-info > .item > .product-item-details > .product-item-name > a').click();
      })
    });
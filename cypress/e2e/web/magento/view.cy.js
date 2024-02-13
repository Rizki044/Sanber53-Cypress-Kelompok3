import('../../../support/commands.js');

describe('View Function', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/checkout/cart')
    });

    //Menampilkan List Product yang ada di Shopping Cart
    it('View Product', () => {
        cy.get('.action.showcart').click()
    })
    //Menampilkan Product di Shopping Cart
    it("display product", () => {
      cy.get(':nth-child(3) > .item-info > .item > .product-item-details > .product-item-name > a').click();
      })
    });
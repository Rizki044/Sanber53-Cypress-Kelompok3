import('../../../support/commands.js');

describe('Update Function', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/checkout/cart/')
    });

    it('Update Product', () => {
        cy.get('.action.showcart').click()
    })
})
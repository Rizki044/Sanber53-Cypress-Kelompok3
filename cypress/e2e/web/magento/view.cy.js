import('../../../support/commands.js');

describe('View Function', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/checkout/cart')
    });

    it('View Product', () => {
        cy.get('.action.showcart').click()
    })
})


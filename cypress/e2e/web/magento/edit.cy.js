import('../../../support/commands.js');

describe('SearchFunctionality', () => {
    beforeEach(() => {
        cy.login()
    });

    it('Testing search feature', () => {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        // cy.get('.column > .message').should('be.visible')
    })
})
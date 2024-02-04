import('../../../support/commands.js');

describe('SearchFunctionality', () => {
    beforeEach(() => {
        cy.login()
    });

    it('Edit Address Success', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').type('08129204819')
        cy.get('#street_1').type('Jalan Bandung No. 5')
        cy.get('#city').type('Bandung')
        cy.get('#telephone').type('08129204819')
        cy.get('#country').select('Indonesia')
        cy.get('#region').type('Jawa Barat')
        cy.get('#zip').type('21930')
        

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    })
    
})
import('../../../support/commands.js');

describe('SearchFunctionality', () => {
    beforeEach(() => {
        cy.login()
    });
    
    it('Edit Address Failed Without City', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('08129204819')
        cy.get('#street_1').clear().type('Jalan Bandung No. 5')
        cy.get('#city').clear()
        cy.get('#country').clear().select('Indonesia')
        cy.get('#region').clear().type('Jawa Barat')
        cy.get('#zip').clear().type('12321')

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    })

    it('Edit Address Failed Without Phone Number', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear()
        cy.get('#street_1').clear().type('Jalan Bandung No. 5')
        cy.get('#city').clear().type('Bandung')
        cy.get('#country').clear().select('Indonesia')
        cy.get('#region').clear().type('Jawa Barat')
        cy.get('#zip').clear().type('12321')

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    })

    it('Edit Address Failed Without Street Address', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('08129204819')
        cy.get('#street_1').clear()
        cy.get('#city').clear().type('Bandung')
        cy.get('#country').clear().select('Indonesia')
        cy.get('#region').clear().type('Jawa Barat')
        cy.get('#zip').clear().type('12321')

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    })

    it.only('Edit Address Failed Without Country', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('08129204819')
        cy.get('#street_1').clear().type('Jalan Bandung No. 5')
        cy.get('#city').clear().type('Bandung')
        cy.get('#country')
        cy.get('#region').clear().type('Jawa Barat')
        cy.get('#zip').clear().type('12321')

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    })

    it('Edit Address Failed Without Zip Code', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('08129204819')
        cy.get('#street_1').clear().type('Jalan Bandung No. 5')
        cy.get('#city').clear().type('Bandung')
        cy.get('#country').clear().select('Indonesia')
        cy.get('#region').clear().type('Jawa Barat')
        cy.get('#zip').clear()

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    })

    it('Edit Address Success', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('08129204819')
        cy.get('#street_1').clear().type('Jalan Bandung No. 5')
        cy.get('#city').clear().type('Bandung')
        cy.get('#country').clear().select('Indonesia')
        cy.get('#region').clear().type('Jawa Barat')
        cy.get('#zip').clear().type('12321')

        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    })
    

})
describe('Register Functionality', () =>{
    beforeEach(() => {
        cy.visit('/customer/account/create/')
    })

    it('Verify Success Create Account', () => {
        cy.get('#firstname').type('ham')
        cy.get('#lastname').type('mer')
        cy.get('#email_address').type('hammer@exm.com')
        cy.get('#password').type('Lepkom@123')
        cy.get('#password-confirmation').type('Lepkom@123')

        cy.get('#form-validate').click()

        cy.url().should('include', '/customer/account/')
    })

    it('Failed Create Account Password not same', () => {
        cy.get('#firstname').type('ham')
        cy.get('#lastname').type('mer')
        cy.get('#email_address').type('hammer@exm.com')
        cy.get('#password').type('Lepkom@123')
        cy.get('#password-confirmation').type('lepkom@123')

        cy.get('.action.submit.primary').click()
        cy.get('#password-confirmation-error').should('be.visible')
    })

    it('Failed Create Account with invalid password', () => {
        cy.get('#firstname').type('ham')
        cy.get('#lastname').type('mer')
        cy.get('#email_address').type('hammer@exm.com')
        cy.get('#password').type('testotesto')
        cy.get('#password-confirmation').type('testotesto')

        cy.get('.action.submit.primary').click()
        cy.get('#password-error').should('be.visible')
    })

    it('Failed create account with invalid email', () => {
        cy.get('#firstname').type('ham')
        cy.get('#lastname').type('mer')
        cy.get('#email_address').type('hammer')
        cy.get('#password').type('Lepkom@123')
        cy.get('#password-confirmation').type('lepkom@123')

        cy.get('.action.submit.primary').click()
        cy.get('#email_address-error').should('be.visible')
    })

    it('Failed Create Account without firstname & lastname', () => {
        cy.get('#email_address').type('hammer@exm.com')
        cy.get('#password').type('Lepkom@123')
        cy.get('#password-confirmation').type('Lepkom@123')

        cy.get('.action.submit.primary').click()
        cy.get('#firstname-error').should('be.visible')
        cy.get('#lastname-error').should('be.visible')
    })

    it('Failed Create Account without fill form register', () => {
        cy.get('.action.submit.primary').click()
        cy.get('#firstname-error').should('be.visible')
        cy.get('#lastname-error').should('be.visible')
        cy.get('#email_address-error').should('be.visible')
        cy.get('#password-error').should('be.visible')
        cy.get('#password-confirmation-error').should('be.visible')
    })
})
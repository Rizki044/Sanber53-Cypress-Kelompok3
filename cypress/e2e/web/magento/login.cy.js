describe('Login Functionality', () => {
    beforeEach(() => {
        // Menggunakan baseUrl dari cypress.config.js
        cy.visit('/customer/account/login')
    })
    
    it('Verify Failed Login invalid email address', () => {
        cy.get('#email').type('result@')
        cy.get('#pass').type('Lepkom@123')
        cy.get('.action.login.primary').click()

        cy.get('#email-error').should('be.visible')
    })

    it('Verify Failed Login Without email address', () => {
        cy.get('#pass').type('Lepkom@123')
        cy.get('.action.login.primary').click()

        cy.get('.message-error').should('be.visible')
    })

    it('Verify Failed Login Without password', () => {
        cy.get('#email').type('result@example.com')
        cy.get('.action.login.primary').click()

        cy.get('.message-error').should('be.visible')
    })

    it('Verify Failed Login Wrong Password', () => {
        cy.get('#email').type('result@example.com')
        cy.get('#pass').type('Lepkom')
        cy.get('.action.login.primary').click()

        cy.get('.message-error').should('be.visible')
    })

    it('Verify Success Login', () => {
        cy.get('#email').type('result@example.com')
        cy.get('#pass').type('Lepkom@123')
        cy.get('.action.login.primary').click()

        cy.url().should('include', '/customer/account/')
    })

})

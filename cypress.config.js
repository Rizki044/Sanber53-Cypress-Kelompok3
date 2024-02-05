const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    specPattern: "cypress/e2e/web/magento/*.cy.js",
    supportFile: false
  },
});
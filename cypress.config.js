const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    env: {
      Valid_email: "loremipsum@gmail.com",
      Valid_password: "lorem123@",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

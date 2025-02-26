const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: false,
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'http://localhost:8080',
    pageLoadTimeout: 120000,
  },
});

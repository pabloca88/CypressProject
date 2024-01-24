/// <reference types="cypress" />

export default {
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',

  fileServerFolder: 'cypress',

  video: true,

  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    specPattern: 'cypress/e2e/files/**/*.spec.cy.ts', // Adjust the pattern based on your file naming convention
    supportFile: 'cypress/support/e2e.ts', // Adjust the path based on your support file location
  },

  component: {
    specPattern: 'cypress/integration/**/*.component-spec.ts', // Adjust the pattern based on your file naming convention
    supportFile: 'cypress/support/component/index.ts', // Adjust the path based on your support file location
  },

  env: {
    // key-value pairs for environment variables
    // Example: API_URL: 'https://api.example.com'
  },
};


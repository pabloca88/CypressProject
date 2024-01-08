import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

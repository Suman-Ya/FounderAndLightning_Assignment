const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:10000,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    chromeWebSecurity: false,
   // viewportWidth: 1366,
   // viewportHeight: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});

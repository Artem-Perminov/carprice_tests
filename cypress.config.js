const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://carprice.ru/',
    chromeWebSecurity: false,
    viewportWidth: 1920,
    pageLoadTimeout: 100000,
    viewportHeight: 1080,
    watchForFileChanges: false,
  },
});

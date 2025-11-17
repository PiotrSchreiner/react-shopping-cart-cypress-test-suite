import { defineConfig } from 'cypress';

// Definiert die Basis-URL der zu testenden Anwendung.
// HINWEIS: Die Live-Demo-URL des Projekts wird hier als Annahme verwendet.
const REACT_APP_URL = 'https://react-shopping-cart-67954.firebaseapp.com/';

export default defineConfig({
  // E2E-spezifische Konfiguration
  e2e: {
    // Die Basis-URL, die bei cy.visit('/') verwendet wird.
    baseUrl: REACT_APP_URL,

    setupNodeEvents(on, config) {
      // Hier können Node.js-Ereignis-Listener implementiert werden.
      // Nützlich für das Lesen von Dateien, Datenbank-Seeding oder API-Stubs.
      return config;
    },

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});

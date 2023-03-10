const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		excludeSpecPattern: [
			'cypress/e2e/1-getting-started',
			'cypress/e2e/2-advanced-examples',
		],
		//baseUrl: 'http://localhost:3000/',
		baseUrl: 'https://demoqa.com/',
		projectId: 'gw5sat',
		viewportWidth: 1200,
		viewportHeight: 860,
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})

// Para que los locations funcionen en Chrome, se debe asignar el key y value "chromeWebsecurity":false en cypress.json

describe('Location Demo', () => {
	beforeEach(function () {
		cy.visit('https://www.saucedemo.com/')
	})

	it('Validar Title', () => {
		cy.title().should('eq', 'Swag Labs')
	})

	it('Validar URL', () => {
		cy.url().should('eq', 'https://www.saucedemo.com/')
	})

	it('Validar protocolo HTTPS', () => {
		cy.location('protocol').should('contain', 'https')
	})

	it('Validar Host Name "www.saucedemo.com', () => {
		cy.location('hostname').should('eq', 'www.saucedemo.com')
	})

	it('Redireccion a /inventory', () => {
		cy.get('[data-test="username"]').type('standard_user')
		cy.get('[data-test="password"]').type('secret_sauce')
		cy.get('[data-test="login-button"]').click()

		cy.location('pathname').should('eq', '/inventory.html')
	})
})

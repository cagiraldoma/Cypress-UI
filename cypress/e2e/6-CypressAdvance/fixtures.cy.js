//Load a fixes ser data located in a file
describe('Fixtures Demo', () => {
	let credentials

	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/')
		cy.fixture('sauceCredentials').then((data) => {
			credentials = data
		})
	})

	it('Standard Username', () => {
		cy.visit('https://www.saucedemo.com/')
		cy.get('[data-test="username"]').type(credentials.standardUser)
		cy.get('[data-test="password"]').type(credentials.systemPassword)
		cy.get('[data-test="login-button"]').click()
	})
})

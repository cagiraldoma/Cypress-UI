let username = 'standard_user'
let password = 'secret_sauce'

describe('Locator in Cypress', () => {
	beforeEach(function () {
		cy.visit('https://www.saucedemo.com/')
	})

	it('GET Method', () => {
		cy.get('#user-name').type(username)
		//Otro ejemplo
		cy.get('input#password').type(password)
		//Otro ejemplo
		cy.get('[data-test="login-button"]').click()
	})

	it('EQ|First|Last Method', () => {
		cy.get('input').first().type(username)
		cy.get('input').eq(1).type(password)
		cy.get('input').last().click
	})

	it('FILTER Method', () => {
		cy.get('input').filter('[type="text"]').type(username)
		cy.get('input').filter('[type="password"]').type(password)
		cy.get('input').filter('[type="submit"]').click()
	})

	it('FIND Method', () => {
		cy.get('form').find('input').eq(0).type(username)
		cy.get('form').find('input').eq(1).type(password)
		cy.get('form').find('input').last().click()
	})

	it('PARENT Method', () => {
		cy.get('form').parent().should('have.class', 'login-box')
	})
})

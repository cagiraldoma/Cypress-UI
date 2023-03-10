Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
describe('Guardando elementos', () => {
	it('Aserciones', () => {
		cy.visit('/automation-practice-form')
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})

	it('Aserciones 2', () => {
		cy.visit('/automation-practice-form')
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})

	it('Aserciones 3', () => {
		cy.visit('/automation-practice-form')
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name')
		})
	})
})

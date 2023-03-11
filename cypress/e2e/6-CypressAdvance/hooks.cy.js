// Hooks -> Mocha

/*
Permiten setear condiciones antes o despues de ejecutar un test case
1. Before = Solo se ejecuta una vez
2. BeforeEach() = Se ejecuta antes de cada test
3. Test Executions
4. afterEach() = Se ejecuta despues de cada test
5. after = Se ejecuta una sola vez al final
*/

describe('Demo de Hooks', () => {
	before(function () {
		cy.log('Before')
	})
	beforeEach(function () {
		cy.log('Before Each')
	})
	it('should be test #1', () => {
		console.log('test #1')
	})
	it('should be test #2', () => {
		console.log('test #2')
	})
	it('should be test #3', () => {
		console.log('test #3')
	})

	afterEach(function () {
		cy.log('After Each')
	})

	after(function () {
		cy.log('After')
	})
})

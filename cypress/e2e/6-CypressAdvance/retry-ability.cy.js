describe('Sesion de Retry-Ability ', () => {
	//Hook Before Each -> Se ejecuta antes de cada "it"
	beforeEach(() => {
		cy.visit('http://localhost:8888/#/') // Commando

		cy.get('.new-todo') // Command -> Obtener uno o mas elementos del DOM
			.type('todo-A{enter}') // Command -> Escribir
			.type('todo-B{enter}') // Command -> Escribir
	})

	it('Debe crear dos items', () => {
		cy.get('.todo-list li') // Commant
			.should('have.length', 2) // Assertion
	})

	it('Debe contener el texto indicado', () => {
		//Ejemplo con timeout
		cy.get('.todo-list li', { timeout: 20000 }) // Commant
			.should('have.length', 2) // Assertion
			.and(($li) => {
				expect($li.get(0).textContent, 'first-item').to.eq('todo-A')
				expect($li.get(1).textContent, 'second-item').to.eq('todo-B')
			})
	})
})

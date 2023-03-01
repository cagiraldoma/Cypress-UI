describe('Probando statuses', () => {
	it.only('Debe de validar el status code exitoso', () => {
		cy.request('employees').its('status').should('eq', 200)
	})

	it.only('Debe de validar el status code fallido', () => {
		cy.request({ url: 'employees/4', failOnStatusCode: false })
			.its('status')
			.should('eq', 404)
	})

	it.only('Enviar parametros para la creacion y eliminarlos posteriormente', () => {
		cy.request('POST', 'employees', {
			name: 'Carlos',
			lastname: 'Giraldo',
			email: 'carlos@test.com',
		}).as('createdEmployee')

		cy.get('@createdEmployee')
			.its('body')
			.its('id')
			.then((createdEmployeeId) => {
				cy.request('DELETE', `employees/${createdEmployeeId}`)
					.its('status')
					.should('eq', 200)
			})
	})
})

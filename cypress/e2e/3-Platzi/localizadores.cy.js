Cypress.on("uncaught:exception", (err, runnable) => {
	return false
})
describe("Tipos de localizadores", () => {
	beforeEach(() => {
		cy.visit("/automation-practice-form")
	})
	it("Obtener por medio de un tag", () => {
		// cy.get("input") Nos obtendra todos los elementos que sean inputs
		cy.get("input")
	})

	it("Obtener por medio de un atributo", () => {
		cy.get('[placeholder="First Name"]')
	})

	it.only("Obtener por medio de un atributo y un tag", () => {
		cy.get('input[placeholder="First Name"]')
	})

	it("Obtener por medio de un ID", () => {
		cy.get("#firstName")
	})

    it("Obtener por medio de una clase", () => {
		cy.get('.mr-sm-2.form-control')
	})

    it.only("Obtener por medio de un contains", () => {
        //Contains se usa para buscar un elemento por su contanido, es decir como esta escrito en la pagina
		cy.contains('Reading')
	})
})

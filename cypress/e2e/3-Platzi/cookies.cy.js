describe("Cookies", function () {
	before(() => {
		//cy.clearCookies
	})

	beforeEach(() => {
		cy.session("login", () => {
			cy.visit("/")
			cy.setCookie("nombre", "Carlos")
		})
	})

	/*it("Obtener cookies", () => {
		cy.visit("/")
		cy.getCookies().should("be.empty")
	})*/
	it("Agregar una cookie", () => {
		cy.visit("/")
		cy.setCookie("nombre", "Carlos")
		cy.getCookies().should("have.length", 1)
	})
	it("Obtener un cookie en especifico", () => {
		cy.getCookie("nombre").should("have.a.property", "value", "Carlos")
	})
})

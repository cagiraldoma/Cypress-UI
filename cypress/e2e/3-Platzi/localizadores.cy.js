Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
describe('Tipos de localizadores', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form')
	})
	it('Obtener por medio de un tag', () => {
		// cy.get("input") Nos obtendra todos los elementos que sean inputs
		/* Tags:<p>,<h1>,<h2>,<h3>,<h4>,<h5>,,<h6>,<strong>,<em>,<abbr>,<address>,<bdo>,<blockquote>,<cite>,					<q>,<code>,<ins>,<del>,<dfn>,<kbd>,<pre>,<samp>,<var>,<br>,<div>,<img>,<a>,<area>,<map>,						<param>,<object>,<ul>,<ol>,<li>,<dl>,<dt>,<dd>.*/
		cy.get('input')
	})

	it('Obtener por medio de un atributo', () => {
		// Obtendremos los elementos que tengan el siguiente atributo
		cy.get('[placeholder="First Name"]')
	})

	it('Obtener por medio de un atributo y un tag', () => {
		// Obtendremos elementos que tengan un tag y un atributo
		cy.get('input[placeholder="First Name"]')
	})

	it('Obtener por medio de un ID', () => {
		// Selecciona el ID del elemento empezando por el signo #
		cy.get('#firstName')
	})

	it('Obtener por medio de una clase', () => {
		cy.get('.mr-sm-2.form-control')
	})

	it('Obtener por medio de un contains', () => {
		//Contains se usa para buscar un elemento por su contanido, es decir como esta escrito en la pagina
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

	it('Usando Parent', () => {
		//Obteniendo el elemento padre
		cy.get('input[placeholder="First Name"]').parent
	})
})

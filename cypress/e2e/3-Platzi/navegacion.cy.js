describe("Navegacion", () => {
	it("Navegar a nuestra primer pagina", () => {
		cy.visit("https://platzi.com/")
	})

	it("Recargar pagina", () => {
		cy.reload()
	})

	it("Recargar pagina de forma forzada", () => {
		cy.visit("https://google.com")
		cy.reload(true)
	})

	it.only("Navegar hacia atras", () => {
		cy.visit("https://www.google.com/")
		cy.visit("https://www.google.com/search?q=platzi&sxsrf=AJOqlzVJJfmcj95wZZg2Z7CF5rFAsUfFSQ%3A1674435388672&source=hp&ei=PNvNY-X5Jq-TwbkPhqm0-A4&iflsig=AK50M_UAAAAAY83pTM-MEfHANhisyE2Q-nzMIjue_9Sa&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=pla&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QxwEQ0QMQJzIECCMQJzIECCMQJzIKCAAQsQMQgwEQQzIECAAQQzIECAAQQzIKCAAQgAQQFBCHAjIECAAQQzIRCC4QgAQQsQMQgwEQxwEQrwEyCAgAEIAEELEDOgcIIxDqAhAnOgUIABCABDoLCC4QgAQQsQMQgwE6CwgAEIAEELEDEIMBOgsILhCABBDHARCvAToRCC4QgAQQsQMQgwEQxwEQ0QNQswRYuQZgiAxoAXAAeACAAfQBiAHQBJIBBTAuMi4xmAEAoAEBsAEK&sclient=gws-wiz")
		cy.go("back")
        cy.go("forward")
	})
})

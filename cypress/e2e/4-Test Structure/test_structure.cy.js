let add = (a, b) => a + b
let subtract = (a, b) => a - b
let divide = (a, b) => a / b
let multiply = (a, b) => a * b

//Describe or context

describe('Unit testing for our dummy aplication', () => {
	context('Math with positive numbers', () => {
		//it or specify is the same
		it('should add positive numbers', () => {
			expect(add(1, 2)).to.eq(3)
		})
		it('should subtract positive numbers', () => {
			expect(subtract(4, 2)).to.eq(2)
		})
		it('should divide positive numbers', () => {
			expect(divide(4, 2)).to.eq(2)
		})
		it('should multiple positive numbers', () => {
			expect(multiply(1, 2)).to.eq(2)
		})
	})

	describe('Math with DECIMAL numbers', () => {
		it('should add decimal numbers', () => {
			expect(add(1.4, 1.6)).to.eq(3)
		})
		it('should subtract decimal numbers', () => {
			expect(subtract(2.0, 1.0)).to.eq(1.0)
		})
	})
})

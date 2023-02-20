let add = (a, b) => a + b
let subtract = (a, b) => a - b
let divide = (a, b) => a / b
let multiply = (a, b) => a * b

//Describe or context

describe('Unit testing for our dummy aplication', () => {
	context('Math with positive numbers', () => {
		//it - specify
		it('should add positive numbers', () => {
			expect(add(1, 2)).to.eq(3)
		})
		it('shuld subtract positive numbers', () => {
			expect(subtract(4, 2)).to.eq(2)
		})
		it('shuld divide positive numbers', () => {
			expect(divide(4, 2)).to.eq(2)
		})
		it('shuld multiple positive numbers', () => {
			expect(multiply(1, 2)).to.eq(2)
		})
	})

	describe('Math with DECIMAL numbers', () => {
		it('should add dicimal numbers', () => {})
		it('should subtract dicimal numbers', () => {})
	})
})

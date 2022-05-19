describe('Password Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should click on the signin button', () => {
		cy.get('#signin_button').click()
	})

	it('should click on the forgotten password', () => {
		cy.get('.offset3 > a').click()
	})

	it('should fill email form', () => {
		cy.get('#user_email').type('test.email@email.com')
	})

	it('should submit the form', () => {
		cy.contains('Send Password').click()
	})
})

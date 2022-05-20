/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Cypress (https://www.udemy.com/course/automated-testing-with-cypress/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

describe('Section_04_UI_Cypress_E2E_TESTING - Password Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should click on the signin button', () => {
		// Click using ID
		cy.get('#signin_button').click()
	})

	it('should click on the forgotten password', () => {
		// Click using class
		cy.get('.offset3 > a').click()
	})

	it('should fill email form', () => {
		cy.get('#user_email').type('test.email@email.com')
	})

	it('should submit the form', () => {
		// Click on an element using text 
		cy.contains('Send Password').click()
	})
})

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

describe('Section_04_UI_Cypress_E2E_TESTING - Navbar Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should display online banking content', () => {
		// Click using text
		cy.contains('Online Banking').click()

		// Assertion for URL
		cy.url().should('include', 'online-banking.html')

		// Assertion for element visibility
		cy.get('h1').should('be.visible')
	})

	it('should display feedback content', () => {
		cy.contains('Feedback').click()
		cy.url().should('include', 'feedback.html')
	})

	it('should display homepage content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')
	})
})

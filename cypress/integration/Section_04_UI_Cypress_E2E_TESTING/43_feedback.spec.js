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

describe('Section_04_UI_Cypress_E2E_TESTING - Feedback Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.contains('Feedback').click()
	})

	it('should load feedback form', () => {
		cy.get('form').should('be.visible')
	})

	it('should fill feedback form', () => {
		cy.get('#name').type('name')
		cy.get('#email').type('email@email.com')
		cy.get('#subject').type('just subject')
		cy.get('#comment').type('just my comment')
	})

	it('should submit feedback form', () => {
		cy.get('.btn-signin').click()
	})

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})

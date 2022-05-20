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

describe('Section_04_UI_Cypress_E2E_TESTING - New Payee Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		// user.json is a file present in ./cypress/fixtures/04_E2E/
		cy.fixture('04_E2E/user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.loginToApp(username, password)
		})
	})

	it('should add new payee to the list', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Add New Payee').click()
		cy.get('#np_new_payee_name').type('Name')
		cy.get('#np_new_payee_address').type('Adress')
		cy.get('#np_new_payee_account').type('123456789')
		cy.get('#np_new_payee_details').type('Detail')
		cy.get('#add_new_payee').click()
	})

	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee Name was successfully created')
	})
})

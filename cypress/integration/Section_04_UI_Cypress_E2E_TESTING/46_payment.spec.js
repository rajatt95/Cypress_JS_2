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

describe('Section_04_UI_Cypress_E2E_TESTING - Payment Test', () => {
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

	it('should send new payment (fake)', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()
		cy.get('#sp_payee').select('wellsfargo')
		cy.get('#sp_account').select('Credit Card')
		cy.get('#sp_amount').type('2000')
		// Type the date and then, Press ENTER
		cy.get('#sp_date').type('2020-01-10 {enter}')
		cy.get('#sp_description').type('just a description')
		cy.get('#pay_saved_payees').click()
	})

	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted')
	})
})

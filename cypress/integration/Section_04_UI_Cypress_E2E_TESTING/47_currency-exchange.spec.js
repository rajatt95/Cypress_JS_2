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

describe('Section_04_UI_Cypress_E2E_TESTING - Currency Exchange Test', () => {
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

	it('should fill conversion form', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Purchase Foreign Currency').click()
		cy.get('#pc_currency').select('GBP')
		cy.get('#pc_amount').type('2000')
		cy.get('#pc_inDollars_true').click()
		cy.get('#pc_calculate_costs').click()
	})

	it('should disply conversion ammount', () => {
		cy.get('#pc_conversion_amount').should(
			'contain',
			'1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)'
		)
	})
})

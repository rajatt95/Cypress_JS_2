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

describe('Section_04_UI_Cypress_E2E_TESTING - Find Transaction Test', () => {
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

	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('1000')
		cy.get('button[type="submit"]').click()
	})

	it('should display results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr')
			.its('length')
			.should('be.gt', 0)
	})
})

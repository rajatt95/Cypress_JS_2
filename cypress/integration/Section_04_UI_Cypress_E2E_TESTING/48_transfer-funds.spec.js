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

describe('Section_04_UI_Cypress_E2E_TESTING - Transfer Funds Verification Test', () => {
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

	it('should fill transfer funds form', () => {
		cy.get('#transfer_funds_tab').click()
		cy.get('#tf_fromAccountId').select('2')
		cy.get('#tf_toAccountId').select('4')
		cy.get('#tf_amount').type('1000')
		cy.get('#tf_description').type('just some text')
		cy.get('#btn_submit').click()
	})

	it('should verify correct data', () => {
		cy.get('#tf_fromAccountId').should('have.value', 'Checking')
		cy.get('#tf_toAccountId').should('have.value', 'Loan')
		cy.get('#tf_amount').should('have.value', '1000')
	})
})

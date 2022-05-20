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

describe('Section_04_UI_Cypress_E2E_TESTING - Login / Logout Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})

	it('should try to login with invalid data', () => {
		cy.loginToApp('invalid username', 'invalid password')
	}) 

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
	})

	it('should login to application', () => {
		cy.fixture('04_E2E/user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.loginToApp(username, password)
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})

	it('should logout from application', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})

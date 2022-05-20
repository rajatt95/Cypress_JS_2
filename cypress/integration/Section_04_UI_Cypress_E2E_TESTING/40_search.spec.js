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

describe('Section_04_UI_Cypress_E2E_TESTING - Searchbox Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should type into searchbox and submit viwth pressing enter', () => {
		// Type in saerch textbox and Press ENTER Key
		cy.get('#searchTerm').type('some text {enter}')
	})

	it('should show search results page', () => {
		// Assertion for tag:h2 (It must have text 'Search Results:')
		cy.get('h2').contains('Search Results:')
	})
})

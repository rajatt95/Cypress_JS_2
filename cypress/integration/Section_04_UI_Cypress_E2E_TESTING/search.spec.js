describe('Searchbox Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should type into searchbox and submit viwth pressing enter', () => {
		cy.get('#searchTerm').type('some text {enter}')
	})

	it('should show search results page', () => {
		cy.get('h2').contains('Search Results:')
	})
})

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

describe('Section - 02: Cypress Fundamentals - BASICS',()=>{
    
    it('Should include text',()=>{
        
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include','books')
        cy.get('a').contains('Poetry').click()
        cy.get('a').contains('Olio').click()

        // Assertion for Element which has class price_color. It should contain text '£23' 
        // cy.get('.price_color').contains('£23.88').should('include.text','£23')
        cy.get('.price_color').should('include.text','£23')

    })// it 
})// describe
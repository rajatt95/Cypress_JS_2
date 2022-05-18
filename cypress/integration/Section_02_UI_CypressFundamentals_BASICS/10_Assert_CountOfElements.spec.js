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
    
    it('Should display correct number of books',()=>{
        
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include','books')
        cy.get('a').contains('Travel').click()

        // Assertion for Heading - Travel
        // Get element using Tag
        cy.get('h1').contains('Travel')

        // Assertion for Element which has class product_pod (This CSS selector should return 11 elements)
        // Get element using class
        cy.get('.product_pod').its('length').should('eq',11)


    })// it 
})// describe
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
    
    it('Should click on category - Travel',()=>{
        
        // Navigate to URL using visit()
        cy.visit('https://books.toscrape.com/')

        // Assertion for application URL
        cy.url().should('include','books')

        // Click on a tag which contains text 'Travel'
        cy.get('a').contains('Travel').click()

    })// it 
})// describe
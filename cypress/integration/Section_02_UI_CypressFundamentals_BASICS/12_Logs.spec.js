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
    
    it('Cypress Logs',()=>{
        
        cy.log('Navigating to https://books.toscrape.com/')
        cy.visit('https://books.toscrape.com/')
       
        cy.log('Assertion for Application URL')
        cy.url().should('include','books')

    })// it 
})// describe
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
    
    it('Browser Refresh/Reload',()=>{
        
        cy.visit('https://books.toscrape.com/')
       
        cy.url().should('include','books')

        cy.log('Before Reload!')

        cy.reload()

        cy.log('After Reload!')

        cy.url().should('include','books')
        
    })// it 
})// describe
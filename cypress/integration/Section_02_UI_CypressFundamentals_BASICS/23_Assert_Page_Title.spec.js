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

// https://docs.cypress.io/api/commands/viewport#Usage

describe('Section - 02: Cypress Fundamentals - BASICS',()=>{
    
    it('Should have Page Title',()=>{
        cy.visit('https://example.com/')
        cy.wait(2000)
        cy.title().should('include','Example Domain')
    })// it 
    
})// describe
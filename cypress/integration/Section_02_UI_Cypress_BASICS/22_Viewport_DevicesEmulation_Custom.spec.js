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
    
    it('720p',()=>{
        cy.viewport(1280,720)
        cy.visit('https://example.com/')
        cy.wait(2000)
        cy.url().should('include','example')
    })// it 

    it('1080p',()=>{
        cy.viewport(1980,1080)
        cy.visit('https://example.com/')
        cy.wait(2000)
        cy.url().should('include','example')
    })// it 
    
})// describe
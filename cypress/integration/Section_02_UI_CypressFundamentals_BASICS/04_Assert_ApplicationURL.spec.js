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
    
    it('Check correct URL - Should include',()=>{
        cy.visit('https://example.com/')
        cy.url().should('include','example.com')
    })// it

    it('Check correct URL - Should not include',()=>{
        cy.visit('https://example.com/')
        cy.url().should('not.include','google.com')
    })// it

    it('Check correct URL - Should eq',()=>{
        cy.visit('https://example.com/')
        cy.url().should('eq','https://example.com/')
    })// it

})// describe
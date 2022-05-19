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

describe('Section - 03: Cypress Fundamentals - ADVANCED',()=>{
    
    it('Assertion for Content Type',()=>{
        
        cy.visit('https://example.com/')

        cy.wait(2000)

        cy.document().its('contentType').should('eq','text/html')

        cy.document().should('have.property','charset')
            .and('eq','UTF-8')

    })// it 
    
})// describe
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
    
    it('Assertions Chaining',()=>{
        
        cy.visit('http://zero.webappsecurity.com/login.html')
       
        cy.url().should('include','webappsecurity')

        cy.get("input[value='Sign in']").click()
 
        cy.log('Assertion for Invalid Login credentials')
        // cy.get('.alert-error').should('be.visible')
        // cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
        // cy.get('.alert-error')
        //     .should('be.visible')
        //     .should('contain.text','Login and/or password are wrong.')
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text','Login and/or password are wrong.')

    })// it 
})// describe
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
    
    it('Working with inputs',()=>{
        
        cy.visit('http://zero.webappsecurity.com/login.html')
       
        cy.url().should('include','webappsecurity')

        cy.get('#user_login').clear().type('Some Ivalid Name')

        cy.get('#user_password').clear().type('Some Invalid Password') 

        cy.get("input[value='Sign in']").click()
        // cy.contains('Sign in').click()

        cy.log('Assertion for Invalid Login credentials')
        cy.get('.alert-error').should('be.visible')
        cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
        
    })// it 
})// describe
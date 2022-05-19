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

describe('Section - 03: Cypress Fundamentals - ADVANCED',()=>{
    
    const user = require('/cypress/fixtures/user.json')

    it('Should try to Login using fixtures',()=>{

        cy.visit('http://zero.webappsecurity.com/login.html')
    
        const username = user.username
        const password = user.password

        // cy.get('#user_login').clear().type('Some Ivalid Name')
        cy.get('#user_login').clear().type(username)

        // cy.get('#user_password').clear().type('Some Invalid Password') 
        cy.get('#user_password').clear().type(password) 

    })// it 
    
})// describe
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
    
    it('Should do login using custom commands',()=>{

        cy.visit('http://zero.webappsecurity.com/login.html')
       
        cy.loginToApp('Some Username', 'Some Password')

        cy.log('Assertion for Invalid Login credentials')
        cy.get('.alert-error').should('be.visible')
        cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')

    })// it 
    
})// describe
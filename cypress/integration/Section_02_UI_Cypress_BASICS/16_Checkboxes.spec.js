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
    
    it('Checkbox',()=>{
        
        cy.visit('http://zero.webappsecurity.com/login.html')
       
        cy.url().should('include','webappsecurity')

        cy.log('Click on checkbox')
        cy.get('#user_remember_me').click()        
        cy.wait(2000)
        cy.log('Assertion for Checkbox to be checked')
        cy.get('#user_remember_me').should('be.checked')

        cy.log('Click on checkbox again')
        cy.get('#user_remember_me').click()        
        cy.wait(2000)
        cy.log('Assertion for Checkbox not to be checked')
        cy.get('#user_remember_me').should('not.be.checked')

    })// it 
})// describe
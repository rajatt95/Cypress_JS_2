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
    
    it('Variables and Aliases',()=>{
        
        cy.visit('http://zero.webappsecurity.com/login.html')
       
        cy.url().should('include','webappsecurity')

        cy.get('#user_login').as('textBox_username')

        cy.get('@textBox_username').type('Some Ivalid Name')

        cy.wait(2000)

        cy.get('@textBox_username').clear()

        cy.wait(2000)

        cy.get('@textBox_username').should('have.text','')
 
    })// it 
})// describe
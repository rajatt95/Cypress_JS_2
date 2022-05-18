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
    
    it('Check correct for correct element - Should be visible',()=>{
        cy.visit('https://example.com/')
        cy.get('h1').should('be.visible')
    })// it

    // it('Check correct for correct element - Should not be visible',()=>{
    //     cy.visit('https://example.com/')
    //     cy.get('h6').should('not.be.visible')
    // })// it

   

})// describe
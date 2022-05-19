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
    
    it('Should load correct URL',()=>{
        cy.visit('https://example.com/')
    })// it

    it('Should load correct URL with timeout',()=>{
        // This function visit() will wait for 10 seconds before throwing any exception in case of URL inaccessbility
        cy.visit('https://example.com/', {timeout: 10000})
    })// it
})// describe
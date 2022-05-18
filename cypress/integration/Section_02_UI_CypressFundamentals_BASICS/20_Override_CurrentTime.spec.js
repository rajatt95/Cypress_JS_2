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
    
    it('Should Override the current time',()=>{
       
        const date = new Date(2020,3,10).getTime() // This will give the timestamp
        cy.clock(date)
        cy.log(date)

        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.url().should('include','webappsecurity')

    })// it 

})// describe
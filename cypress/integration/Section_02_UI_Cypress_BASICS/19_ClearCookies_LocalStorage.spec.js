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
    
    it('Clear Cookies and Local Storage',()=>{
       
        // Cypress by default clears the Cookies and Local storage 
        cy.visit('http://zero.webappsecurity.com/login.html')

        // cy.clearCookies()
        cy.clearCookies({ log: true }) // This will log the details in Cypress Test Runner

        cy.clearLocalStorage('your-item-for-local-storage',{ log: true }) // This will log the details in Cypress Test Runner

        cy.url().should('include','webappsecurity')

    })// it 

})// describe
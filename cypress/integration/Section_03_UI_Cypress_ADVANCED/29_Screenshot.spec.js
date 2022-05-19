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
    
    // Default location for screenshots is 
        // ./cypress/screenshots/

    it('Should take full page screenshot',()=>{
        cy.visit('https://github.com/rajatt95')
        cy.screenshot({capture: 'fullPage'})
    })// it 
    
    it('Should take single element screenshot',()=>{
        cy.visit('https://github.com/rajatt95')
        cy.get('.js-profile-editable-area.d-flex.flex-column.d-md-block').screenshot()
    })// it 

})// describe
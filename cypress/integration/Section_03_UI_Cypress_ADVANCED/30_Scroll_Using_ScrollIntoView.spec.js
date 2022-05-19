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
    
    it('Should scroll',()=>{
        
        cy.visit('https://github.com/rajatt95')
        
        cy.wait(2000)
        
        cy.get("span[title='MasterSeleniumFramework']").scrollIntoView()

        cy.wait(2000)

        cy.get("img[alt='Avatar']").scrollIntoView()

    })// it 
    
})// describe
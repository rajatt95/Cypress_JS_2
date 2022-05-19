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
    
    it('Should read Data from JSON file',()=>{
        
        cy.readFile('./files/log.json')
            .its('githubProfile').should('include','https://github.com/rajatt95')

    })// it 

    it('Should read Data from TXT file',()=>{
        
        cy.readFile('./files/log.txt').should('include', "https://github.com/rajatt95")

    })// it 
    
})// describe
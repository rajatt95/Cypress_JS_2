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
    
    it('Should write Data to JSON file',()=>{
        
        cy.writeFile('./files/log.json', {
            name: "Rajat Verma",
            githubProfile: "https://github.com/rajatt95"
        })

    })// it 

    it('Should write Data to TXT file',()=>{
        
        cy.writeFile('./files/log.txt', "Rajat Verma Github Profile - https://github.com/rajatt95" )

    })// it 
    
})// describe
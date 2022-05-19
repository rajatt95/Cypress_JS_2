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
    
    it('Should select the value from select boxes',()=>{

        cy.visit('https://devexpress.github.io/testcafe/example/')
       
        // Select the value
        cy.get('#preferred-interface').select('Both')

        // Assertion for selected value 
        cy.get('#preferred-interface').should('have.value','Both')

        cy.wait(2000)
        
        // Select the value
        cy.get('#preferred-interface').select('JavaScript API')

        // Assertion for selected value
        cy.get('#preferred-interface').should('have.value','JavaScript API')

    })// it 
    
})// describe
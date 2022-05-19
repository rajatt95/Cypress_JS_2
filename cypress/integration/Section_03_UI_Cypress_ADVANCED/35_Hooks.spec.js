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
   
    before(()=>{
        //runs before all tests in describe block
            // Can setup Test Data/Test Context
            // Seed or Reset Database
        cy.log('before')
    })

    beforeEach(()=>{
        //Runs before each test in describe block
        cy.log('beforeEach')
    })

    it('Test #1',()=>{
        // Test case
        cy.log('Test #1')
    })// it 
    
    it('Test #2',()=>{
        // Test case
        cy.log('Test #2')
    })// it 

    afterEach(()=>{
        //Runs after each test in describe block
        cy.log('afterEach')
    })
    
    after(()=>{
        //Runs after all tests in describe block
        cy.log('after')
    })
    
})// describe
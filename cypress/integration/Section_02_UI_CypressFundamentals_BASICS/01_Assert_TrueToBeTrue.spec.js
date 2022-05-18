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

describe('Describe #1 -> Section - 02: Cypress Fundamentals - BASICS',()=>{
    
    it('True should be True',()=>{
        expect(true).to.be.true
    })// it

    it('5 should be 5',()=>{
        expect(5).to.be.equal(5)
    })// it

})// describe

describe('Describe #2 ->  Section - 02: Cypress Fundamentals - BASICS',()=>{
    
    it('True should be False',()=>{
        expect(true).to.be.false
    })// it

})// describe
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

class BasePage{
    static loadHomePage(){
        cy.visit('https://github.com/rajatt95')
    }
    static wait(seconds){
        cy.wait((seconds * 1000))
    }
}// class - BasePage

// Inheritance
class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get("span[title='MasterSeleniumFramework']").scrollIntoView()
    }
    static scrollToTop(){
        cy.get("img[alt='Avatar']").scrollIntoView()
    }
}// class - HomePage
describe('Section - 03: Cypress Fundamentals - ADVANCED',()=>{
    it('Assertion for Content Type',()=>{
        HomePage.loadHomePage()
        HomePage.wait(1)
        HomePage.scrollToBottom()
        HomePage.wait(1)
        HomePage.scrollToTop()
    })// it 
})// describe

import {contactUsPage} from "./pages/contactUsPage"

const contactUs_Page = new contactUsPage()

beforeEach (function() {
    cy.visit('https://www.founderandlightning.com/contact')
})

describe('All contact us tests', () => {

it('Filled the form with valid creds', () => {
    contactUs_Page.enterFirstName('Tester')
    contactUs_Page.enterLastName('Tester123')
    contactUs_Page.createRandomEmail(contactUs_Page.randomEmail)
    contactUs_Page.enterMobile('0123456789')
    contactUs_Page.selectHowDidYourHear()
    contactUs_Page.enterMessage("test 1234567890 !@")
    contactUs_Page.clickSendMessage()
    contactUs_Page.verifySuccessMessage()

})

it.only('Filled the form with invalid creds', () => {
    contactUs_Page.enterFirstName('   ')
    contactUs_Page.enterLastName('   ')
    contactUs_Page.createRandomEmail(contactUs_Page.randomEmail)
    contactUs_Page.enterMobile('   ')
    contactUs_Page.selectHowDidYourHear()
    contactUs_Page.enterMessage("test 1234567890 !@")
    contactUs_Page.clickSendMessage()
    contactUs_Page.verifyErrorMsg()

})
// var and let used to create variables in jS

it('Login with invalid username', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login_Page.enterUsername('Admin')
    login_Page.enterPassword('admin1234')
    login_Page.clickLogin()
    cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click()
})

})

it('Login with invalid password', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login_Page.enterUsername('Admin')
    login_Page.enterPassword('admin1234')
    login_Page.clickLogin()
    cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click()
})
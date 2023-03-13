export class contactUsPage{

    firstname_textfield = '#firstname-b15d4232-7672-429d-81fd-a00020bddf95'
    lastname_textfield = '#lastname-b15d4232-7672-429d-81fd-a00020bddf95'
    email_textfield = '#email-b15d4232-7672-429d-81fd-a00020bddf95'
    mobile_textfield = '#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95'
    howDidYouHear_dropdown = '#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95'
    message_textbox = '#message-b15d4232-7672-429d-81fd-a00020bddf95'
    sendMessage = '.actions > .btn'
    thankyouMessage = '#hbspt-form-e53a842b-aaab-4c3f-843b-b758326b9ea2 > div > p'
    errorMsg = '#hsForm_b15d4232-7672-429d-81fd-a00020bddf95'

    constructor(){
        this.randomEmail = null;
    }
    createRandomEmail(){
        let r = Math.random().toString(36).substring(7);
        console.log("random", r);
        let s = "123TestAutomation";
        this.randomEmail = r.concat(s,'@gmail.com');
        cy.log('random email is :'+ this.randomEmail);
        cy.wait(3000);
        cy.get(this.email_textfield).should('be.visible').click({force:true})
        cy.get(this.email_textfield).type(this.randomEmail);
        cy.log('random email is :'+ this.randomEmail);
    }
    enterFirstName(firstname){
        cy.wait(3000);
        cy.get(this.firstname_textfield).should('be.visible').click({force:true})
        cy.get(this.firstname_textfield).type(firstname)
    }
    enterLastName(lastname){
        cy.wait(3000);
        cy.get(this.lastname_textfield).should('be.visible').click({force:true})
        cy.get(this.lastname_textfield).type(lastname);
    }
    // //enterEmail(email){
    //     cy.wait(3000);
    //     cy.get(this.email_textfield).should('be.visible').click({force:true})
    //     cy.get(this.email_textfield).type(email);
    // }
    enterMobile(mobile){
        cy.wait(3000);
        cy.get(this.mobile_textfield).should('be.visible').click({force:true})
        cy.get(this.mobile_textfield).type(mobile);
    }
    selectHowDidYourHear(howDidYouHear){
        cy.wait(3000);
        cy.get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95').each(($ele) => {
            if ($ele.text() == "Job board") {
                cy.wrap($ele).click()
            }
        })
        }
    enterMessage(message){
        cy.wait(3000);
        cy.get(this.message_textbox).should('be.visible').click({force:true})
        cy.get(this.message_textbox).type(message);
    }
    clickSendMessage(){
        cy.wait(3000);
        cy.get(this.sendMessage).should('be.visible').click({force:true})
        cy.wait(3000);

        // cy.session(siteKey, () => {
        //     cy.request({
        //       method: 'POST',
        //       url: '/recaptcha/enterprise/reload?k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm',
        //     }).then(({ Site_key,secret_key }) => {
        //       window.localStorage.setItem('authToken', body.token)
        //     })
          //}
        //cy.request("GET", "https://www.google.com/recaptcha/enterprise/bframe?hl=en&v=MuIyr8Ej74CrXhJDQy37RPBe&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm").then((response) => {
            //expect(response.status).to.eq(200)
        // Cypress.Commands.add('confirmCaptcha', function () {
        //     cy.get('/recaptcha/enterprise/bframe?hl=en&v=MuIyr8Ej74CrXhJDQy37RPBe&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm')
        //       .first()
        //       .then((recaptchaIframe) => {
        //         const body = recaptchaIframe.contents()
        //         cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
        //       })
           
    }
    verifySuccessMessage(){
        cy.wait(3000);
       // expect(true).to.be.true
        let message = "Thank you for your message. We'll get back to you as soon as possible."
       // expect(message).to.equal()
        cy.get(this.thankyouMessage)
        .should('be.visible')
    }
    verifyErrorMsg(){
        cy.wait(3000);
        let message = "Please complete this required field."
        //expect(message).to.deep.equal(this.errorMsgLN)
        cy.get(this.errorMsg)
          .should('be.visible')
        
    }   }

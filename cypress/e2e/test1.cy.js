/// ＜reference types="cypress" /＞

it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf',{timeout:6000}).type('Testing 365').click()

    cy.wait(2000)

    


  
})
/// ＜reference types="cypress" /＞

it('assertion checks', () => {
    cy.visit('https://example.cypress.io')
    //cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.contains("get").click()
    //cy.get('',{timeout:6000}).type('Testing 365{enter}')

    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class', "query-btn")
        .and('be.enabled')
    
    expect(true).to.be.true
    assert.equal(4, 4, 'NOT EQUAL')
    assert.strictEqual(4, '4', 'NOT EQUAL')
})
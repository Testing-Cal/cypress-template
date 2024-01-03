describe('First test suite', function(){
    it('First test case', function(){
       //cy.visit('https://www.youtube.com/')
       //cy.visit(Cypress.env('applicationUrl'))
       expect(true).to.be.true
    })
    it('Second test case', function(){
       //cy.visit('https://www.youtube.com/')
       cy.visit(Cypress.env('applicationUrl'));
       expect(true).to.be.true
    })
})
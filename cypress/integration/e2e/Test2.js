describe('Second test suite', function(){
    it('third test case', function(){
       // cy.visit('https://www.youtube.com/')
       // console.log(Cypress.env('applicationUrl'));
       cy.visit(Cypress.env('applicationUrl'))
       expect(true).to.be.true
    })
    it.skip('fourth test case', function(){
        //cy.visit('https://www.youtube.com/')
       cy.visit(Cypress.env('applicationUrl'));
       expect(true).to.be.true
    })
})

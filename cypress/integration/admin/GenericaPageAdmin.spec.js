context('Assertions Generica Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/cerca/generic'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })


    it('should not return  a list of users', () => {
        const input = 'NOT_VALID';
        const hasResult = false;

        cy.get('#pattern').type(input)
        cy.search()
        cy.checkResult(hasResult)
    })


    it('should  return  a list of users', () => {

        const input = '(cn=aj.*)';
        const hasResult = true;

        cy.get('#pattern').type(input)
        cy.search()
        cy.checkResult(hasResult)
        cy.get('a.btn-success').should('be.visible')
    })

})


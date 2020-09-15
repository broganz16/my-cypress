describe('Assertions Baixes Page as Admin', () => {
    const ROL = 'admin'
    const URL = '/historic/lookup'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })

    it('should return 0 user', () => {

        const input = 'NOT_VALID';
        const hasResult = false;
        cy.get('#uid').clear()
        cy.get('#uid').type(input)
        cy.searchIndex()
        cy.checkResult(hasResult)
    });

    it('should return a list of  users', () => {
        const input = 'rmondejar22';
        const hasResult = true;
        cy.get('#uid').clear()
        cy.get('#uid').type(input)
        cy.searchIndex()
        cy.checkResult(hasResult)
    })

})


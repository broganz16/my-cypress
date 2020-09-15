context('Assertions Mail Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/cerca/mail'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })

    it('should not return a list of users', () => {

        const input = 'NOT_VALID';
        const hasResult = false;

        cy.get('#mail').type(input)

        cy.search()
        cy.checkResult(hasResult)

    })

    it('should return a list of users', () => {

        const input = 'mbatet';
        const hasResult = true;

        cy.get('#mail').type(input)
        cy.search()
        cy.checkResult(hasResult)

    })

})


context('Assertions Usuari Search Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/cerca/index'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })

    it('should return a list of users - caballero', () => {
        const input = 'NOT_VALID';
        const expected = false;
        cy.get('#simple').type(input)
        cy.search()
        cy.checkResult(expected)
    })


    it('should return a list of users - caballero', () => {
        const input = 'caballero';
        const expected = true;
        cy.get('#simple').type(input)
        cy.search()
        cy.checkResult(expected)
        cy.columnShouldContain(1,input)
    })

    it('should return a list of users', () => {
        const input = '39857129S';
        const expected = true;
        cy.get('#simple').type(input)
        cy.get('[for="dni"]').click()
        cy.search()
        cy.checkResult(expected)
        cy.columnShouldContain(7,input)
    })

})


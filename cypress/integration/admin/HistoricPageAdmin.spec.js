context('Assertions Historic  Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
    })

    after(() => {
    })

    it('verify /historic/search', () => {
        const input = 20;
        cy.setURL('/historic/search');

        cy.title().should('eq', 'Cercar Usuaris Recents')

        cy.get('#days').type(input)
        cy.searchRecent()
        cy.title().should('eq', 'Usuaris Recents Llistat')
        cy.verifyDateColumn(input)
    })


    it('verify /historic/lookup', () => {
        cy.setURL('/historic/lookup');

        cy.title().should('eq', 'Cerca Històrica Usuaris')

        const input = 'mbatet';
        const hasResult = true;

        cy.get('#uid').type(input)
        cy.searchIndex()
        cy.checkResult(hasResult)
        cy.title().should('eq', 'Històric Llistat')

    })

})







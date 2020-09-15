context('Assertions Telèfon Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/cerca/phone'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })

    it('should show 1 user - 00', () => {

        const input = '000';
        const expected = false;
        cy.get('#phone').type(input)
        cy.search()
        cy.checkResult(expected)

    })
    it('should show 1 user - 1516', () => {

        const input = '1516';
        const expected = true;
        cy.get('#phone').type(input)
        cy.search()
        cy.checkResult(expected)

    })
})


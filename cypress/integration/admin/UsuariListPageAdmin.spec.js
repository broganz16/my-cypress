context('Assertions Usuari List Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/usuari/index'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })

    it('should show 20 entries by clicking button Següent', () => {

        cy.get('li.page-item').first().should('contain', '1')
        cy.contains('li.page-item', 'Següent').click()
        cy.get('li.page-item').first().should('contain', 'Anterior')
        cy.columnIsnotBlank(1)
    })

/*    it('should show 20 entries by clicking button Següent', () => {

        cy.get('li.page-item').eq(-2).click()
        cy.columnIsnotBlank(1)

    })*/

})


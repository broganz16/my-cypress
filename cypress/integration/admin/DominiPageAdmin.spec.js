
context('Assertions Domini Page as Admin', () => {

    const ROL = 'admin'
    const URL = '/domini/index'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })
    it('should apply active class a page - 1', () => {
        cy.contains('li.page-item', 'Següent').click()
        cy.get('li.page-item').eq(2).should('have.class','active')
        cy.checkRowSize()

    })

    it('should apply active class a page - 2', () => {
        cy.contains('li.page-item', '6').click()
        cy.contains('li.page-item', '6').should('have.class','active')
        cy.checkRowSize()

        cy.contains('li.page-item', 'Anterior').click()
        cy.get('li.page-item').eq(5).should('have.class','active')
        cy.checkRowSize()
    })

})



context('Assertions Organitzativa Page as Admin', () => {


    const ROL = 'admin'
    const URL = '/cerca/orgunit'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })

    afterEach(() => {
        cy.go('back')
    });


    function selectvalue (input) {
        cy.get('#select2-orgunit-container').click()
        cy.contains('li.select2-results__option', input).click()
    }

    it('should return a list of users - Aiguamúrcia', () => {

        const input = 'Aiguamúrcia';
        const hasResult = true;
        selectvalue(input)
        cy.search()
        cy.checkResult(hasResult)
    });

    it('should return a list of users - Albinyana', () => {
        const input = 'Albinyana';
        const hasResult = true;
        selectvalue(input)
        cy.search()
        cy.checkResult(hasResult)

    });
})


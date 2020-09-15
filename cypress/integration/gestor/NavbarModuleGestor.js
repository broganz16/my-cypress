
describe('Navigate through menu items as Gestor', () => {

    const ROL = 'gestor'
    const URL = '/'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL);
    })

    after(() => {
    })



    it('interract with menu items - Cerca', () => {

        cy.navigateAsGestor('Cerca', "Simple")
        cy.hasPageTitle('Cercar Usuaris')
        cy.navigateAsGestor('Cerca', "Mail")
        cy.hasPageTitle('Cercar Usuaris per correu')
        cy.navigateAsGestor('Cerca', "Telèfon")
        cy.hasPageTitle('Cercar Usuaris pel telèfon')
    })

    it('interract with menu items - Usuari', () => {

        cy.navigateAsGestor('Usuari', "Alta")
        cy.hasPageTitle('Crear Usuari')
        cy.navigateAsGestor('Usuari', "Llistat")
        cy.hasPageTitle('Usuari Llistat')
        cy.navigateAsGestor('Usuari', "Històric")
        cy.hasPageTitle('Cerca històrica d\'usuaris')
        cy.navigateAsGestor('Usuari', "Recent")
        cy.hasPageTitle('Històric Recent')
    })

})


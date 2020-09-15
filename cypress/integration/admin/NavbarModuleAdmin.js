describe('Navigate through menu items as Admin', () => {

    const ROL = 'admin'
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

        cy.navigateAsAdmin('Cerca', "Simple")
        cy.hasPageTitle('Cercar Usuaris')

        cy.navigateAsAdmin('Cerca', "Org Unit")
        cy.hasPageTitle('Unitat Organitzativa')

        cy.navigateAsAdmin('Cerca', "Mail")
        cy.hasPageTitle('Cercar Usuaris per correu')

        cy.navigateAsAdmin('Cerca', "Telèfon")
        cy.hasPageTitle('Cercar Usuaris pel telèfon')

        cy.navigateAsAdmin('Cerca', "Genèrica")
        cy.hasPageTitle('Cercar Usuaris de forma genèrica')

        cy.navigateAsAdmin('Cerca', "Baixes")
        cy.hasPageTitle('Cercar baixes d\'usuaris')

    })


    it('interract with menu items - Usuari', () => {

        //interract with menu items - Cerca
        cy.navigateAsAdmin('Usuari', "Alta")
        cy.hasPageTitle('Crear Usuari')

        cy.navigateAsAdmin('Usuari', "Llistat")
        cy.hasPageTitle('Usuari Llistat')

        cy.navigateAsAdmin('Usuari', "Històric")
        cy.hasPageTitle('Cerca històrica d\'usuaris')

        cy.navigateAsAdmin('Usuari', "Recent")
        cy.hasPageTitle("Històric Recent")

    })

    it('interract with menu items - Domini', () => {

        cy.navigateAsAdmin('Domini', "Alta")
        cy.hasPageTitle('Crear Domini')
        cy.navigateAsAdmin('Domini', "Llistat")
        cy.hasPageTitle('Domini Llistat')
        cy.navigateAsAdmin('Domini', "Zimbra")
        cy.hasPageTitle('Dominis Zimbra Llistat')
    })

    it('interract with menu items - Unitat', () => {

        cy.navigateAsAdmin('Unitat', "Alta")
        cy.hasPageTitle('Crear Unitats')
        cy.navigateAsAdmin('Unitat', "Llistat")
        cy.hasPageTitle('Unitats Llistat')
    })

})


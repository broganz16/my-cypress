context('CRUD - Usuari Object', () => {

    const ROL = 'admin'
    const URL = '/'
    const UID = 'mconnor'
    const NIF = '20146348G'

    before(() => {
        cy.loginAs(ROL)
    });

    beforeEach(() => {
        cy.setURL(URL)
    })

    after(() => {
    })


    it('should create a new user', () => {
        cy.createUser()
        cy.title().should('eq', 'Crear Usuari')
        cy.nom('Marah')
        cy.cognom1('Connor')
        cy.cognom2('Bach')
        cy.username(UID)
        cy.clickComptePrincipal() // FALSE
        cy.nif(NIF)
        cy.ou('Caseres')
        cy.clickComptesenseCorreuAltanet()
        cy.contrasenya('my_Password23')
        cy.telefon('977236600')
        cy.mobil('622075554')
        cy.fax('977294334')
        cy.observacions('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
        cy.crear()

        cy.verifyMessage('Usuari ' + UID +' correctament creat')
    })

    it('should return error because the user already exists', () => {

        // go to create  user page
        cy.createUser()
        cy.nom('Marah')
        cy.cognom1('Connor')
        cy.cognom2('Bach')
        cy.username(UID)
        cy.clickComptePrincipal() // FALSE
        cy.nif(NIF)
        cy.ou('Albiol')
        cy.clickComptesenseCorreuAltanet()
        cy.contrasenya('my_Password23')
        cy.crear()
        cy.verifyMessage('Ja existeix un compte principal amb el uid : ' + UID)
    })


    it('edit user data', () => {

        // go to search user page
        cy.searchUsers()
        const expected = 1;
        cy.get('#simple').type(UID)
        cy.search()
        cy.editUser(UID)


        cy.telefon('1532')
        cy.mobil('')
        cy.fax('')
        cy.actualitzar()
        cy.verifytelefon('1532')
        cy.verifymobil('')
        cy.verifyfax('')
        cy.verifyMessage('Usuari ' + UID + ' modificat')
    });


    it('edit password', () => {

        // go to search user page
        cy.searchUsers()
        const expected = 1;
        cy.get('#simple').type(UID)
        cy.search()
        cy.editUser(UID)


        const str = "El password ha estat correctament modificat Usuari"
        cy.password()
        cy.contrasenya('New_my_Password23')
        cy.update()
        cy.verifyMessage(str)

        cy.password()
        cy.weakPass()
        cy.update()
        cy.verifyMessage(str)

        cy.password()
        cy.moderatePass()
        cy.update()
        cy.verifyMessage(str)

        cy.password()
        cy.strongPass()
        cy.update()
        cy.verifyMessage(str)
    });


    it('delete user', () => {

        // go to search user page
        cy.searchUsers()
        const expected = 1;
        cy.get('#simple').type(UID)
        cy.search()
        cy.editUser(UID)


        cy.eliminar()
        cy.verifyMessage('Usuari ' + UID +' eliminat')
    });


/*    it('should create a new user', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('localURL') + '/usuari/save',
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            retryOnStatusCodeFailure: true,
            followRedirect: true,
            body: {
                givenname: "Carla",
                cognom1: "May",
                cognom2: "Imperial",
                sn: "May Imperial",
                sn: "null null",
                userid: "cmimperial",
                dni: "09056579F",
                ou: "aiguamurcia",
                mail: "cmimperial@aiguamurcia.altanet.org",
                noZimbra: "on",
                mailbox: "on",
                password: "uCMA007E",
                pwdConfirm: "uCMA007E",
                gidnumber: "103",
            },
        })
            .then((resp) => {
                cy.log(">>>>> " + resp.status)
                cy.log(">>>>> " + resp.body)
                resp.body.should('contain', ' correctament creat')
            })
    });*/

})


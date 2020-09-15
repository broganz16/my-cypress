/***
 * FIELDS
 */
Cypress.Commands.add('nom', (givenname) => {
    cy.get('#givenname').clear()
    cy.get('#givenname').type(givenname)
});

Cypress.Commands.add('cognom1', (cognom1) => {
    cy.get('#cognom1').clear()
    cy.get('#cognom1').type(cognom1)
});

Cypress.Commands.add('cognom2', (cognom2) => {
    cy.get('#cognom2').clear()
    cy.get('#cognom2').type(cognom2)
});

Cypress.Commands.add('clickComptePrincipal', () => {
    cy.get('span.onoffswitch-switch').eq(0).click()
});

Cypress.Commands.add('username', (userid) => {
    cy.get('#userid').clear()
    cy.get('#userid').type(userid)

});

Cypress.Commands.add('nif', (dni) => {
    cy.get('#dni').clear()
    cy.get('#dni').type(dni)
});


Cypress.Commands.add('ou', (ou) => {
    cy.get('#select2-ou-container').click()
    cy.contains('li.select2-results__option', ou).click()
    cy.wait(3000)
});


Cypress.Commands.add('correu', (mail) => {
    cy.get('#mail').clear()
    cy.wait(500)
    cy.get('#mail').type(mail)
});

Cypress.Commands.add('clickComptesenseCorreuAltanet', () => {
    cy.get('span.onoffswitch-switch').eq(1).click()
});

Cypress.Commands.add('alternatives', (mailalternateaddress) => {
    cy.get('#mailalternateaddress').clear()
    cy.get('#mailalternateaddress').type(mailalternateaddress)
});

Cypress.Commands.add('clickGuardarCopia', () => {
    cy.get('span.onoffswitch-switch').eq(2).click()
});

Cypress.Commands.add('mailforwardingaddress', (mailforwardingaddress) => {
    cy.get('#mailforwardingaddress').clear()
    cy.get('#mailforwardingaddress').type(mailforwardingaddress)
});

Cypress.Commands.add('telefon', (telephonenumber) => {
    if (telephonenumber === ''){
        cy.get('#telephonenumber').clear()
    }else {
        cy.get('#telephonenumber').clear()
        cy.get('#telephonenumber').type(telephonenumber)
    }

});

Cypress.Commands.add('mobil', (mobile) => {
    if (mobile === ''){
        cy.get('#mobile').clear()
    }else {
        cy.get('#mobile').clear()
        cy.get('#mobile').type(mobile)
    }
});

Cypress.Commands.add('fax', (faxnumber) => {
    if (faxnumber === ''){
        cy.get('#faxnumber').clear()
    }else {
        cy.get('#faxnumber').clear()
        cy.get('#faxnumber').type(faxnumber)
    }
});

Cypress.Commands.add('observacions', (observacions) => {
    cy.get('#observacions').clear()
    cy.get('#observacions').type(observacions)
});


/**
 * BUTTONS
 *
 */
Cypress.Commands.add('crear', () => {
    cy.wait(1000)
    cy.get('#main-button').click()
});


Cypress.Commands.add('actualitzar', () => {
    cy.get('[name="_action_update"]').click()
});

Cypress.Commands.add('password', () => {
    cy.contains('a.btn', 'Password').click()
});


Cypress.Commands.add('moure', () => {
    cy.contains('a.btn', 'Moure').click()
});

Cypress.Commands.add('revisar', () => {
    cy.contains('a.btn', 'Revisar').click()
});


Cypress.Commands.add('historic', () => {
    cy.contains('a.btn', 'Històric').click()
});

Cypress.Commands.add('eliminar', () => {
    cy.get('[name="_action_delete"]').click()
});


/**
 *  VERIFICATIONS
 */
Cypress.Commands.add('verifynom', (givenname) => {
    cy.get('#givenname').should('have.value', givenname)
});

Cypress.Commands.add('verifycognom1', (cognom1) => {
    cy.get('#cognom1').should('have.value', cognom1)
});

Cypress.Commands.add('verifycognom2', (cognom2) => {
    cy.get('#cognom2').should('have.value', cognom2)
});


Cypress.Commands.add('verifyusername', (userid) => {
    cy.get('#userid').should('have.value', userid)
});

Cypress.Commands.add('verifynif', (dni) => {
    cy.get('#dni').should('have.value', dni)
});

Cypress.Commands.add('verifycorreu', (mail) => {
    cy.get('#mail').should('have.value', mail)
});

Cypress.Commands.add('verifytelefon', (telephonenumber) => {
    cy.get('#telephonenumber').should('have.value', telephonenumber)
});

Cypress.Commands.add('verifymobil', (mobile) => {
    cy.get('#mobile').should('have.value', mobile)
});

Cypress.Commands.add('verifyfax', (faxnumber) => {
    cy.get('#faxnumber').should('have.value', faxnumber)

});


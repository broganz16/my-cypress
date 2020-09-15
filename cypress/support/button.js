Cypress.Commands.add('searchIndex', () => {
    cy.get('[name="_action_index"]').click()
});

Cypress.Commands.add('searchRecent', () => {
    cy.get('[name="_action_recent"]').click()
});

Cypress.Commands.add('search', () => {
    cy.get('[name="_action_search"]').click()
});

Cypress.Commands.add('update', () => {
    cy.get('[name="_action_update"]').click()
});


Cypress.Commands.add('searchUsers', () => {
    cy.contains('a.btn', 'Cercar Usuaris').click()
});

Cypress.Commands.add('createUser', () => {
    cy.contains('a.btn', 'Alta Usuari').click()
});

Cypress.Commands.add('listUsers', () => {
    cy.contains('a.btn','Llistat Usuaris').click()
});

Cypress.Commands.add('listDomains', () => {
    cy.contains('a.btn','Dominis').click()
});

Cypress.Commands.add('clearCache', () => {
    cy.contains('a.btn','Clear caché').click()
});

Cypress.Commands.add('listUnits', () => {
    cy.contains('a.btn','Unitats').click()
});
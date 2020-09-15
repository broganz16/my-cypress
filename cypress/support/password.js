
Cypress.Commands.add('contrasenya', (password) => {
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#pwdConfirm').clear()
    cy.get('#pwdConfirm').type(password)
});

Cypress.Commands.add('weakPass', () => {
    cy.get('[onclick="generatePassword(8, true, false);"]').click()
});

Cypress.Commands.add('moderatePass', () => {
    cy.get('[onclick="generatePassword(10, true, false);"]').click()
});

Cypress.Commands.add('strongPass', () => {
    cy.get('[onclick="generatePassword(12, true, true);"]').click()
});


Cypress.Commands.add('diff_contrasenya', (password) => {
    cy.get('#password').clear()
    cy.get('#password').type("2314" + password)
    cy.get('#pwdConfirm').clear()
    cy.get('#pwdConfirm').type(password)
});

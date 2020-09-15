Cypress.Commands.add('verifyMessage', (message) => {
    cy.get('div.panel-body').should('contain', message)
});


Cypress.Commands.add('hasPageTitle', (title) => {
    cy.get('.ibox-title h5').should('contain', title)
});


// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './navbar.js'
import './button.js'
import './formUsuari.js'
import './messages.js'
import './table.js'
import './password.js'
// Alternatively you can use CommonJS syntax:
// require('./commands')

/*

before(() => {
    cy.log('Global Before Hook');
    cy.log('Logging in..... ')
    cy.visit('https://actio-pre.dipta.cat/userdirect/')
    cy.get('#username').type('cpalmerin')
    cy.get('#password').type('st3ria4lt')
    cy.get('.btn-submit').click()
    cy.title().should('eq', 'Usuari Llistat')
});

after(() => {
    cy.log('Global After Hook');
});*/

Cypress.Commands.add('checkResult', (hasResult) => {
    if(hasResult) {
        cy.log("RESULT IS FOUND" )
        cy.get('.table-striped').children("tbody").children("tr").should('have.length.greaterThan', 0)
        cy.get('div.panel-body').should('not.exist')
    } else{
        cy.log("NO RESULT IS FOUND" )
        cy.get('.table-striped').should('not.exist')
        cy.get('div.panel-body').should('exist')
    }
});


Cypress.Commands.add('checkRowSize', () => {
    cy.get('.table-striped').children("tbody").children("tr").should('have.length.greaterThan', 0)
});


Cypress.Commands.add('editUser', (uid) => {
    cy.get('a[href*="/edit/'+uid + '"]').click()

});


Cypress.Commands.add('verifyDateColumn', (days) => {
    cy.get('.table-striped').children("tbody").children("tr").children("td:nth-child(5)").each(function ($elem) {
        let FORMAT = "DD-MM-YYYY HH:mm"

        let input = Cypress.moment($elem.text(), FORMAT);
        let start =  Cypress.moment().day(- days);
        let end =  Cypress.moment();

        /*cy.log("table :" + input)
        cy.log("start  :" + start)
        cy.log("end   :" + end)*/

        expect(input.isBetween(start, end),
            input.format(FORMAT) +' should be between '+ start.format(FORMAT) + ' and ' + end.format(FORMAT)).to.be.true

    });
});

Cypress.Commands.add('tableExists', (user) => {
    cy.get('.table-striped').should('exist');
});

Cypress.Commands.add('tableNotExists', (user) => {
    cy.get('.table-striped').should('not.exist');
});

Cypress.Commands.add('columnUserShouldContain', (user) => {
    cy.get('.table-striped').should('exist')
    cy.get('.table-striped').children("tbody").children("tr").children("td:nth-child(1)").each(function ($elem) {
        cy.get($elem).should('contain', user)
    });
});


Cypress.Commands.add('columnShouldContain', (column, value) => {
    cy.get('.table-striped').should('exist')
    cy.get('.table-striped').children("tbody").children("tr").children("td:nth-child(" +column+")").each(function ($elem) {
        cy.log('value >>> ' + $elem.text())
        cy.get($elem).should('contain', value)
    });
});

Cypress.Commands.add('columnIsnotBlank', (column) => {
    cy.get('.table-striped').should('exist')
    cy.get('.table-striped').children("tbody").children("tr").children("td:nth-child(" +column+")").each(function ($elem) {
        cy.log('value >>> ' + $elem.text())
        cy.get($elem).should('not.be.empty')
    });
});


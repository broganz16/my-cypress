
Cypress.Commands.add('verifyMainItemSize', (num) => {
    const logo = 1;
    cy.get('ul.metismenu').children('li').should('have.length', num + logo)
});



Cypress.Commands.add('navigateAsAdmin', (item, subItem) => {

    cy.log("should redirect to  "+ subItem +"  search page")

    const items = ["Gestió d'usuaris", "Inici", "Cerca", "Usuari", "Domini", "Unitat"];

    for ( var i = 0, l = items.length; i < l; i++ ) {
        if (item === items[i]) {
            cy.log("index: "+ item +",   value:" + items[i])
            cy.get('#side-menu>li').eq(i).then(($it) => {
                if (!$it.hasClass('active')) {
                    cy.log("CLICK ITEM  ")
                    cy.contains('span.nav-label', item).click()
                }
            });

            if(subItem === "Alta"){
                cy.get('#side-menu>li').eq(i).find('a.create').contains(subItem).click()

            } else{
                cy.get('#side-menu>li').eq(i).find('a.index').contains(subItem).click()

            }
        }
    }
});

Cypress.Commands.add('navigateAsGestor', (item, subItem) => {

    cy.log("should redirect to  "+ subItem +"  search page")

    const items = ["Gestió d'usuaris", "Inici", "Cerca", "Usuari",];

    for ( var i = 0, l = items.length; i < l; i++ ) {
        if (item === items[i]) {
            cy.log("index: "+ item +",   value:" + items[i])
            cy.get('#side-menu>li').eq(i).then(($it) => {
                if (!$it.hasClass('active')) {
                    cy.log("CLICK ITEM  ")
                    cy.contains('span.nav-label', item).click()
                }
            });

            if(subItem === "Alta"){
                cy.get('#side-menu>li').eq(i).find('a.create').contains(subItem).click()

            } else{
                cy.get('#side-menu>li').eq(i).find('a.index').contains(subItem).click()

            }
        }
    }
});
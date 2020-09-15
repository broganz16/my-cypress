// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"

Cypress.Commands.add('loginAs', (role) => {

    cy.log("logging in  to CAS ...")
    let user;

    if(role == 'admin'){
        user = Cypress.env('userAdmin');
    }else{
        user = Cypress.env('userGestor');
    }

    cy.request({
        method: 'POST',
        url: '/cas/login', // baseUrl is prepended to url
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        retryOnStatusCodeFailure: true,
        followRedirect: true,
/*        headers:{
            Cookie: "JSESSIONID=4F102A1F2A02E35AAF014C41F1530CD4; f5_cspm=1234; ens_actio=8004330008; rxVisitor=1593422583828I8ML3R5J1AJFM6T9CST03P90JOV58P15; _ga=GA1.2.2067889802.1596045423; unitat_actio=39978978X; BIGipServerWildfly-userdirect-pool=1291888832.42015.0000; BIGipServerPool_CAS=3726659011.38943.0000; f5avr0814028653aaaaaaaaaaaaaaaa=MJGGILJGCDNMANHJBEPPCLOHKDCPOFANAJMMBIHJIAAGGMJCOOACGJBLGACDNPFPBAGCLPEIAOEAELJDGFGAAMPOAIODJOAIHHHALFIEHOMNKGHJGABLLIFAMKDJKJOP",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            Host: "actio-pre.dipta.cat",
        },
*/
        body: {
            username: user,
            password: Cypress.env('password'),
            lt : 'LT-6477-rybgPgPrLja5ZvdP717A-caspre',
            execution: "2660c031-f5c8-489c-a324-b93efeb52d3d_ZXlKaGJHY2lPaUpJVXpVeE1pSjkuTUdOdk1uTkhlRVZPYXpZeVJEaFhLMDV0VkVoa1NEWldSVXM0T0NzeFdVbDFhaTlsVDAxNVFXUndkMHhLTVZGNlVHdHFlSGhLUWtaWFR5OUJUMUF2VW5CUlJtVmpRMFZUZFZoTmIxRkJXRXA2YkdsRVJYRkRUa1pqYjJneVNtbHFSa0ppZFU1eVdGQndUWFpDU25jdlVrWnFkSGhrTDNKR1JXaFpPRkZrYjFWb1owVTVORFJSWnpCNU9HUmFaQzgyVkdkTlkzSlFiMkp2VlRWdGFXeFJWbFZ2U2taNmJtcDZUbUZvU2tkc2NUZE9jVGhrYW5WR2VrWnpiMlZvVFVaU2RFRlZaMU5EY1VsTFdVRmFRV3hDVG01VmNsbENXV2Q0Um5BMFJFdGFjWFZUWkN0NWVUVXlWMUZvVG5Nck5XaGhSVlJqZEVvMWNUWkRaMmN4TVd4bU5DOHJVWFpPTTJsWU5FdE9WbVZ3UVhwclIyVTJOMnd5YVd0cGVWbENOSGx3VDA5MWVUSk1SV2N6UTBaS1MwVmFMMkZQYVZnNE4xVTJaVEJ4VWl0SE1sRjBPRTh2UmxaWFpHNUtVRTFtUWxkS1dFWlhibVIyTUdkdmRUaEhaRkpaTlVWbVNuRnNNbU5vVVhJeE4zaEZhVFp1YTJ4MGJDOXNTazFSVUZoRVYyeFNiRzlVZVRSRVJYSnBaSFV4WVZoTFdYQkpkRWx4Y1VzME5GUkJWbE14TUdkR1Vua3JhWEJuUkdwM2IxZEtibkJDT0ZkTmFFNUViVFo2VkRac2FXTjRlRGhYUWxBMFpGRjRiWEkxTDJKQmVtcEtNVTVNYkdGSGNqRTVaM2RUTVZKQmFGTkVaV0pyT0V0UFQzcDZNVFpHTm1KeU9XdHNSR1Z0ZUVkRVdrOUhkelpWSzBkaGVqUTRVRmxPTUV3MFRuSjRhWG93TWxwWFJuRXdTakpZZDJOWWNGUmhSRk5tVEVONlFrVkJOV3hJVmtOc2QxRjBUMWRqYWtwUVprOXZXbTVWVUZaakx6bE9NMU4wU0N0SWNHbzFSVEpXYjNSdlVYbFZUbVpYVDJ4T1IzZFpOVVJ0YTJwbVQyeGxOak5NWTNaR1VIZG5kR2RvTVd0bE0xWTFibU5yYmk5bVUzUnJOR3BHWW5CdmMzSnpjM3BrY2tSWmFIbFhSR0kyWjNkd05sSkZPSHAxWldwcVdWVlVRMWc0UjNObmFXZDFORlphUmxORkwwczVRbHBPZHpGa1NITXZSV2xOTVZkSFduVkVZVFJaU0VOSmVXRjRSMG80ZDB0UWJXOHdNamRJZVhKMlJtcFVVMFZWT0VGNFVIVnBXWEZOTmtoRVkydDVNV0ZKU0VwMFltZERkbUo1YTFSQ01qaFJhbUp6V1hwcmVYcHZjSG9yWjA5WE5IRnNhMmhrTnl0SU9WcFBWR0ZETkhBeWQxYzRjbTlVUW10VldISlpNVFZxWm1wUVRsZDRVV1ZhZVhkVk5raHdXRTkzTlZKamQzbDRaR1ZUTUVaV1JuTlRURzFpV0hsNVQxcHdORGx1ZEVock4xRlVjMkYxZEhsS2FIRlliVTEyYm1jdk5qRkhTa00xV0UxQmMzUklSRlJGV1hoTVpUUmpOMFkzTDNGV01rVlNSM1pZWTNkbE9FVmtiMWN2YTBsRFZHNUpkbEZKVW5KRWJrRm1jRVpST0dRd1kzVkhlR1pDVUU1VVFuSmlLM1pWTUVGdlNYTnNiRUp5Wm1aVmVrYzNiRFJVVkZkamFWQjVlWGRuU21SQ1UwSnpaMmhTYlZSS1pXTlRXVTV5Y1VWaGRtSTRZMjVSVTBoSFdERTVjMVJKVm1oV1NISlhhelpQVURSbVpYaHVUMjVhT0hWU1dsaFlVVU5wVDFKblRWYzFRVUZzVmtoa1IzVlZUVEpPWVhoNE5ubDVjWFJvZUUxbk5EYzVaR1ExUVdreU1FZHhWMWszY0ZSeGQxSndOekoyVmtOdWNIRnVWVzFPYkcwd1dUY3ZSak5qTTFBcmRUTnpOMGxsVm5GTFdFTjVSa3RIVEcxMlltVnhSRTFyT0hvMk9IRmpSMVZ0Ulc1eFFrRTFhR3hLTkdnMFJXNUtLMll4UjJGbU5qVTBhbGh6VW5oVFNVeEpkM2hRUmxFMVJFRklSM0pzUTNJek9HcE9OVUpQZFdKeE9XZGhObUU0VUVGdFRHYzlQUS5fOTdNeVlZSDlvdUJiNk5SMXJPSlY1dzdzVjVoRkw3eVF4SmpNR0N1Vi1vek9sSWVQa0xMTHZ1T1BXSUxBUWRQSThiblAyMy04aGU5bjV1dWxuYmJIdw==",
            _eventId: 'submit',
            submit: 'Entra'
        },
    })
        .then((resp) => {
            cy.log(">>>>> " + resp.status)
        })
})

Cypress.Commands.add('setURL', (url) => {
    Cypress.Cookies.defaults({
        whitelist: "TGC"
    })

    const base = Cypress.env('localURL') + '/userdirect'  // [localURL, preURL]
    cy.visit( base + url);
})

/*
Cypress.Commands.add('visitPage', (role, url) => {
    let user;

    if(role === 'admin'){
        user = Cypress.env('userAdmin');
    }else{
        user = Cypress.env('userGestor');
    }

    const  psw  = Cypress.env('password');
    cy.visit(url)
    cy.get('#username').type(user)
    cy.get('#password').type(psw)
    cy.get('input.btn-submit').click()
});
*/


Cypress.Commands.add('setSession', (role, url) => {
    Cypress.Cookies.defaults({
        whitelist: "TGC"
    })

    cy.getCookie('TGC').then((cookie) => {
        cy.log('session cookie : ' + cookie.value )
    });
});

Cypress.Commands.add('clearSession', () => {
    cy.clearCookie("JSESSIONID")
});






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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//ClickLink Custom Command 
Cypress.Commands.add('clickLink',(lable)=>{
    cy.get('a').contains(lable).click();
})

//Login Custom Command
Cypress.Commands.add('loginApp', (username, password)=>{
  cy.get("").type(username);
  cy.get("").type(password);
  cy.get("").click();
})

/// <reference types= "Cypress"/>

/// <reference types="cypress-xpath"/> 
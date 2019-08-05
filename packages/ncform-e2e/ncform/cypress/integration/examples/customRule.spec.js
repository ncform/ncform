/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('rules.customRule', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_customRule.html')
  })

  it('rules.customRule in Object', () => {
    let id = md5('rules.customRule in Object');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('maxNum').next().find('input').as('maxNumInput');
      cy.get('label').contains('minNum').next().find('input').as('minNumInput');

      cy.get('@maxNumInput').clear().type(8);
      cy.get('@maxNumInput').next('.invalid-feedback').should('be.visible');
      cy.get('@maxNumInput').clear().type(10);
      cy.get('@maxNumInput').next('.invalid-feedback').should('not.be.visible');

      cy.get('@maxNumInput').clear().type(8);
      cy.get('@maxNumInput').next('.invalid-feedback').should('be.visible');
      cy.get('@minNumInput').clear().type(6);
      cy.get('@maxNumInput').next('.invalid-feedback').should('not.be.visible');
    })
  })

  it('rules.customRule in Array', () => {
    let id = md5('rules.customRule in Array');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('rows').parent().find('button').contains('Add').click();

      cy.get('label').contains('maxNum').next().find('input').as('maxNumInput');
      cy.get('label').contains('minNum').next().find('input').as('minNumInput');

      cy.get('@maxNumInput').clear().type(8);
      cy.get('@maxNumInput').next('.invalid-feedback').should('be.visible');
      cy.get('@maxNumInput').clear().type(10);
      cy.get('@maxNumInput').next('.invalid-feedback').should('not.be.visible');

      cy.get('@maxNumInput').clear().type(8);
      cy.get('@maxNumInput').next('.invalid-feedback').should('be.visible');
      cy.get('@minNumInput').clear().type(6);
      cy.get('@maxNumInput').next('.invalid-feedback').should('not.be.visible');
    })
  })

})

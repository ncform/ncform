/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.placeholder', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.placeholder.html')
  })

  it('Display placeholder: text / dx', () => {
    let id = md5('Display placeholder: text / dx');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('firstname').next().find('input').then($input => {
        cy.wrap($input.attr('placeholder')).should('equal', 'fill your firstname');
        cy.wrap($input).type('daniel');
      });
      cy.get('label').contains('lastname').next().find('input').then($input => {
        cy.wrap($input.attr('placeholder')).should('equal', 'your firstname: daniel');
      });
    })
  })

})

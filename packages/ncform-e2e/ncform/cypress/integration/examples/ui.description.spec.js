/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.description', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.description.html')
  })

  it('Show description with text / html / dx', () => {
    let id = md5('Show description with text / html / dx');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.contains('text value desc').should('be.visible');
      cy.contains('html value desc').should('be.visible');
      cy.contains('html value desc').should('have.css', 'color', 'rgb(103, 194, 58)');
      cy.contains('dx value: daniel').should('not.exist');
      cy.get('label').contains('name1').next().find('input').type('daniel');
      cy.contains('dx value: daniel').should('exist');
    })
  })

  it('Array-table: Show description dx', () => {
    let id = md5('Array-table: Show description dx');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('th').contains('users').as('header');
      cy.get('@header').find('small').should('have.text', 'dx desc: ');

      cy.get('label').contains('company').next().find('input').type('google');
      cy.get('@header').find('small').should('have.text', 'dx desc: google');
    })
  })

})

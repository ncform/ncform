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
      cy.contains('html value desc').then(($desc) => {
        cy.wrap($desc.css('color')).should('equal', 'rgb(103, 194, 58)');
      })
      cy.contains('dx value: daniel').should('not.exist');
      cy.get('label').contains('name1').next().find('input').type('daniel');
      cy.contains('dx value: daniel').should('exist');
    })
  })

})

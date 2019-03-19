/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('Extend', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_extend.html')
  })

  it('Control: extend', () => {
    let id = md5('Control: extend');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('.__ncform-control').contains('hello world: ncform ncform').should('exist');
      cy.get('.__ncform-control').contains('Hi daniel: ncform ncform').should('exist');
    })
  })

  it('Rule: extend', () => {
    let id = md5('Rule: extend');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('helloWorld').next().find('input').as('worldInput');
      cy.get('label').contains('helloDaniel').next().find('input').as('danielInput');

      cy.get('@worldInput').type('daniel');
      cy.get('@worldInput').next('.invalid-feedback').should('be.visible');
      cy.get('@worldInput').clear().type('world');
      cy.get('@worldInput').next('.invalid-feedback').should('not.be.visible');

      cy.get('@danielInput').type('world');
      cy.get('@danielInput').next('.invalid-feedback').should('be.visible');
      cy.get('@danielInput').clear().type('daniel');
      cy.get('@danielInput').next('.invalid-feedback').should('not.be.visible');

    })
  })

})

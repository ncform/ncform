/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('spec types', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_spec-types.html')
  })

  it('HTML type', () => {
    let id = md5('HTML type');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('div').contains('Basic Information').should('have.css', 'border-left', '4px solid rgb(255, 165, 0)').and('have.css', 'padding-left', '6px').and('have.css', 'color', 'rgb(255, 165, 0)')

      cy.get('pre').then($dom => {
        let formData = JSON.parse($dom.text());
        cy.wrap(formData).should('have.property', 'name')
        cy.wrap(formData).should('not.have.property', '_line');
      })
    })
  })

  it('COMP type', () => {
    let id = md5('COMP type');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('div').contains('a beautiful line').should('have.css', 'background-color', 'rgb(255, 165, 0)')

      cy.get('pre').then($dom => {
        let formData = JSON.parse($dom.text());
        cy.wrap(formData).should('have.property', 'name')
        cy.wrap(formData).should('not.have.property', '_line');
      })
    })
  })

})

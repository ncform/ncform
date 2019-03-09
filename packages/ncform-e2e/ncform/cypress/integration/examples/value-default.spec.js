/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('Value And Default', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_value-default.html')
  })

  it('Both value and default have values', () => {
    let id = md5('Both value and default have values');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('name').next().find('input').should('have.value', 'daniel');
    })
  })

  it('Default has value, value has no value', () => {
    let id = md5('Default has value, value has no value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('firstname').next().find('input').should('have.value', 'sarah');
      cy.get('label').contains('lastname').next().find('input').should('have.value', 'xiao');
    })
  })

  it("Object: Value overrides its fields's", () => {
    let id = md5("Object: Value overrides its fields's");
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('firstname').next().find('input').should('have.value', 'daniel');
      cy.get('label').contains('lastname').next().find('input').should('have.value', 'xiao');
    })
  })

  it("Array: Item's value overrides its fields's", () => {
    let id = md5("Array: Item's value overrides its fields's");
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('users 1').next().next().find('input').should('have.value', 'daniel');
      cy.get('label').contains('users 2').next().next().find('input').should('have.value', '');
    })
  })

})

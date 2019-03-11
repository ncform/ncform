/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ValueTemplate', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_valueTemplate.html')
  })

  it('Follow the firstname and lastname', () => {
    let id = md5('Follow the firstname and lastname');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('firstname').next().find('input').type('daniel');
      cy.get('label').contains('lastname').next().find('input').type('xiao');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel xiao');
    })
  })

  it('Fullname has init value', () => {
    let id = md5('Fullname has init value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel.xiao');
      cy.get('label').contains('firstname').next().find('input').clear().type('daniel');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel wang');
    })
  })

  it('Fullname has no init value', () => {
    let id = md5('Fullname has no init value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'sarah wang');
      cy.get('label').contains('firstname').next().find('input').clear().type('daniel');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel wang');
    })
  })

  it('Array: Fullname has init value', () => {
    let id = md5('Array: Fullname has init value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel.xiao');
      cy.get('label').contains('firstname').next().find('input').clear().type('daniel');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel wang');
    })
  })

})

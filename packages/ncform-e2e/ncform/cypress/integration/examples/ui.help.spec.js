/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.help', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.help.html')
  })

  it('Show help', () => {
    let id = md5('Show help');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user1').parent().find('label').as('label1');
      cy.get('@label1').find('.fa-question-circle').should('be.visible');
      cy.get('@label1').find('.fa-question-circle').parent('a').should('have.prop', 'title', 'Some help tips');

      cy.get('legend').contains('user2').parent().find('label').as('label2');
      cy.get('@label2').find('a').should('have.prop', 'title', 'Some help tips');
      cy.get('@label2').find('a').should('have.text', '?');
    })
  })

  it('Array-table: Show help', () => {
    let id = md5('Array-table: Show help');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('th').contains('users').as('header');
      cy.get('@header').find('.fa-question-circle').should('be.visible');
      cy.get('@header').find('.fa-question-circle').parent('a').should('have.prop', 'title', 'Some help tips');
    })
  })

})

/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.status', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.status.html')
  })

  it('Disabled: boolean / dx', () => {
    let id = md5('Disabled: boolean / dx');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('enable').next().find('input').should('be.enabled');
      cy.get('label').contains('name1').next().find('input').should('not.be.enabled');
      cy.get('label').contains('name2').next().find('input').should('not.be.enabled');

      cy.get('label').contains('enable').next().find('input').type('daniel');
      cy.get('label').contains('name2').next().find('input').should('be.enabled');

      cy.get('label').contains('enable').next().find('input').clear();
      cy.get('label').contains('name2').next().find('input').should('not.be.enabled');
    })
  })

  it('Readonly: boolean / dx', () => {
    let id = md5('Readonly: boolean / dx');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('readonly').next().find('input').as('readonly');
      cy.get('label').contains('name1').next().find('input').as('name1');
      cy.get('label').contains('name2').next().find('input').as('name2');

      cy.get('@readonly').then($dom => expect($dom.attr('readonly')).to.be.empty);
      cy.get('@name1').then($dom => expect($dom.attr('readonly')).to.equal('readonly'));
      cy.get('@name2').then($dom => expect($dom.attr('readonly')).to.equal('readonly'));

      cy.get('@readonly').type('daniel');
      cy.get('@name2').then($dom => expect($dom.attr('readonly')).to.be.empty);

      cy.get('@readonly').clear();
      cy.get('@name2').then($dom => expect($dom.attr('readonly')).to.equal('readonly'));
    })
  })

  it('Hidden: boolean / dx', () => {
    let id = md5('Hidden: boolean / dx');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('hidden').next().find('input').should('be.visible');
      cy.get('label').contains('name1').next().find('input').should('not.be.visible');
      cy.get('label').contains('name2').next().find('input').should('not.be.visible');

      cy.get('label').contains('hidden').next().find('input').type('daniel');
      cy.get('label').contains('name2').next().find('input').should('be.visible');

      cy.get('label').contains('hidden').next().find('input').clear();
      cy.get('label').contains('name2').next().find('input').should('not.be.visible');
    })
  })

})

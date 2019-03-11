/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('dx', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_dx.html')
  })

  it('a[i-1]: larger than the previous item', () => {
    let id = md5('a[i-1]: larger than the previous item');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('button').contains('Add').click();

      cy.get('label').contains('nums 2').parent().find('input').as('numItem2Input');

      cy.get('label').contains('nums 1').parent().find('input').type(8);
      cy.get('@numItem2Input').type(7);
      cy.get('@numItem2Input').next('.invalid-feedback').should('be.visible');
      cy.get('@numItem2Input').clear().type(9);
      cy.get('@numItem2Input').next('.invalid-feedback').should('not.be.visible');
    })
  })

  it('a[i][i].b: follow', () => {
    let id = md5('a[i][i].b: follow');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('button').contains('Add').click();
      cy.get('input').eq(0).type('daniel');
      cy.get('input').eq(1).should('have.value', 'daniel');
      cy.get('input').eq(2).type('sarah');
      cy.get('input').eq(3).should('have.value', 'sarah');
    })
  })

  it('a[i].b[i].c: label name', () => {
    let id = md5('a[i].b[i].c: label name');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('input').eq(0).type('daniel');
      cy.get('label').contains('daniel lastname').should('exist');
    })
  })

})

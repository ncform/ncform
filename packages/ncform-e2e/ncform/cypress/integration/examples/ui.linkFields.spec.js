/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.linkFields', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.linkFields.html')
  })

  it('Link object properties', () => {
    let id = md5('Link object properties');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('maxNum').next().find('input').as('maxNum');
      cy.get('label').contains('minNum').next().find('input').as('minNum');

      cy.get('@maxNum').type(8);
      cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
      cy.get('@minNum').type(9);
      cy.get('.invalid-feedback:contains("validate error")').should('be.visible').and('have.length', 2);
      cy.get('@maxNum').clear().type(10);
      cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
      cy.get('@minNum').clear().type(11);
      cy.get('.invalid-feedback:contains("validate error")').should('be.visible').and('have.length', 2);
      cy.get('@minNum').clear().type(9);
      cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
    })
  })

  it('Link Array item properties', () => {
    let id = md5('Link Array item properties');
    cy.get(`[data-cy=${id}]`).within(() => {

      cy.contains('增加').click();
      cy.get('label:contains("nums")').each(($item) => {
        cy.wrap($item).parent().find('label').contains('maxNum').next().find('input').as('maxNum');
        cy.wrap($item).parent().find('label').contains('minNum').next().find('input').as('minNum');

        cy.get('@maxNum').type(8);
        cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible')
        cy.get('@minNum').type(9);
        cy.get('.invalid-feedback:contains("validate error")').should('be.visible').and('have.length', 2);
        cy.get('@maxNum').clear().type(10);
        cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
        cy.get('@minNum').clear().type(11);
        cy.get('.invalid-feedback:contains("validate error")').should('be.visible').and('have.length', 2);
        cy.get('@minNum').clear().type(9);
        cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
      })
    })
  })

  it('Link Table item properties', () => {
    let id = md5('Link Table item properties');
    cy.get(`[data-cy=${id}]`).within(() => {

      cy.contains('增加').click();
      cy.get('tbody tr').each(($item) => {
        cy.wrap($item).find('input').eq(0).as('maxNum');
        cy.wrap($item).find('input').eq(1).as('minNum');

        cy.get('@maxNum').type(8);
        cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible')
        cy.get('@minNum').type(9);
        cy.get('.invalid-feedback:contains("validate error")').should('be.visible').and('have.length', 2);
        cy.get('@maxNum').clear().type(10);
        cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
        cy.get('@minNum').clear().type(11);
        cy.get('.invalid-feedback:contains("validate error")').should('be.visible').and('have.length', 2);
        cy.get('@minNum').clear().type(9);
        cy.get('.invalid-feedback:contains("validate error")').should('not.be.visible');
      })
    })
  })

})

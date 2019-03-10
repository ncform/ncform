/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('Nesting', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_nesting.html')
  })

  it('Object nested object', () => {
    let id = md5('Object nested object');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('user').should('exist');
      cy.get('@user').next().find('legend').contains('name').as('name').should('exist');
      cy.get('@name').next().find('label:contains("name")').its('length').should('equal', 2);
    })
  })

  it('Object nested array and table', () => {
    let id = md5('Object nested array and table');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('company').as('company').should('exist');

      cy.get('@company').next().find('legend').contains('users1').as('users1').should('exist');
      cy.get('@users1').next().find('label:contains("users1 1")').its('length').should('equal', 1);
      cy.get('@users1').next().find('input').its('length').should('equal', 1);

      cy.get('@company').next().find('legend').contains('users2').as('users2').should('exist');
      cy.get('@users2').next().find('th:contains("users2")').should('exist');
      cy.get('@users2').next().find('input').its('length').should('equal', 1);
    })
  })

  it('Arrays and table items are objects', () => {
    let id = md5('Arrays and table items are objects');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('companies1').as('companies1').should('exist');
      cy.get('@companies1').next().find('label:contains("companies1 1")').as('companies1Item').should('exist');
      cy.get('@companies1Item').next().next().find('label:contains("name")').its('length').should('equal', 1);
      cy.get('@companies1Item').next().next().find('input').its('length').should('equal', 1);

      cy.get('legend').contains('companies2').as('companies2').should('exist');
      cy.get('@companies2').next().find('th:contains("name")').should('exist');
      cy.get('@companies2').next().find('input').its('length').should('equal', 1);
    })
  })

  it('Arrays and table items are array and table', () => {
    let id = md5('Arrays and table items are array and table');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('companies1').as('companies1').should('exist');
      cy.get('@companies1').next().find('label:contains("companies1 1")').as('companies1Item').its('length').should('equal', 1);
      cy.get('@companies1Item').next().next().find('legend').contains('User').as('users').should('exist');
      cy.get('@users').next().find('label').contains('User 1').should('exist');
      cy.get('@users').next().find('input').its('length').should('equal', 1);

      cy.get('legend').contains('companies2').as('companies2').should('exist');
      cy.get('@companies2').next().find('label:contains("companies2 1")').as('companies2Item').its('length').should('equal', 1);
      cy.get('@companies2Item').next().next().find('legend').contains('User').as('users').should('exist');
      cy.get('@users').next().find('th').contains('User').should('exist');
      cy.get('@users').next().find('input').its('length').should('equal', 1);

      cy.get('legend').contains('companies3').as('companies3').should('exist');
      cy.get('@companies3').next().find('th').contains('companies3').should('exist');
      cy.get('@companies3').next().find('td').find('legend').contains('User').as('users').should('exist');
      cy.get('@users').next().find('label:contains("User 1")').should('exist');
      cy.get('@users').next().find('input').its('length').should('equal', 1);

      cy.get('legend').contains('companies4').as('companies4').should('exist');
      cy.get('@companies4').next().find('th').contains('companies4').should('exist');
      cy.get('@companies4').next().find('td').find('legend').contains('User').as('users').should('exist');
      cy.get('@users').next().find('th').contains('User').should('exist');
      cy.get('@users').next().find('input').its('length').should('equal', 1);
    })
  })

})

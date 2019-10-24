/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('globalConfig', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_globalConfig.html')
  })

  it('ignoreRulesWhenHidden is true', () => {
    let id = md5('ignoreRulesWhenHidden is true');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('show').next().find('input').as('showInput');
      cy.get('legend').contains('info').as('infoItem');
      cy.get('button').contains('Submit').as('submitBtn');
      cy.get('div').contains('valid pass').as('resultLabel');

      cy.get('@infoItem').should('not.be.visible');
      cy.get('@submitBtn').click();
      cy.get('@resultLabel').should('contain', 'true');

      cy.get('@showInput').type('1');
      cy.get('@infoItem').should('be.visible');
      cy.get('@submitBtn').click();
      cy.get('@resultLabel').should('contain', 'false');
    })
  })

  it('ignoreRulesWhenHidden is false', () => {
    let id = md5('ignoreRulesWhenHidden is false');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('button').contains('Submit').as('submitBtn');
      cy.get('div').contains('valid pass').as('resultLabel');

      cy.get('@resultLabel').should('contain', 'true');
      cy.get('@submitBtn').click();
      cy.get('@resultLabel').should('contain', 'false');
    })
  })

  it('other configs', () => {
    let id = md5('other configs');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('name').next().find('input').as('nameInput');
      cy.get('label').contains('fullname').next().find('input').as('fullnameInput');

      cy.get('.daniel-form').should('exist');

      cy.get('@nameInput').type('daniel');
      cy.get('@fullnameInput').should('have.value', 'daniel xiao');

      cy.get('@nameInput').clear();
      cy.get('@nameInput').next().should('have.class', 'new-invalid-feedback-class');
    })
  })

})

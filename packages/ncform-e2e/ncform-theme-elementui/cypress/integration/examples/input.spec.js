/// <reference types="Cypress" />

import common from './common';

context('input', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('<testcase name>', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();
    // common.submitForm();

    cy.get('.previewArea').within(() => {

      // Declare action elements
      cy.get('label').contains('name').as('nameLabel');
      cy.get('@nameLabel').next().find('input').as('nameInput');

      cy.get('@nameInput').type('daniel').should('have.value', 'daniel');


    })

  });
});

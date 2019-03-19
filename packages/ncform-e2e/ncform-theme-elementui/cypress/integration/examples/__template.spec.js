/// <reference types="Cypress" />

import common from './common';

context('<context name>', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('<testcase name>', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          ui: {
            widget: '',
            widgetConfig: {}
          }
        }
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('.previewArea').within(() => {
      // Declare action elements
      cy.get('label')
      .contains('name1')
      .parent()
      .within(() => {
      });
      // common.submitForm();
    });
  });
});

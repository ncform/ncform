/// <reference types="Cypress" />

import common from './common';

context('Label', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Basic', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name2: {
          type: 'string',
          value: 'ncform, a nice form development way that generates form UIs and their interactions with just configuration.',
          ui: {
            widget: 'label'
          }
        },
        name3: {
          type: 'string',
          value: 'ncform, a nice form development way that generates form UIs and their interactions with just configuration.',
          ui: {
            widget: 'label',
            widgetConfig: {
              multiLine: true
            }
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
      .contains('name2')
      .parent()
      .within(() => {
        cy.get('.ncform-label').should('have.css', 'text-overflow', 'ellipsis')
      });

      cy.get('label')
      .contains('name3')
      .parent()
      .within(() => {
        cy.get('.ncform-label').should('not.have.css', 'text-overflow', 'ellipsis')
      });
      // common.submitForm();
    });
  });
});

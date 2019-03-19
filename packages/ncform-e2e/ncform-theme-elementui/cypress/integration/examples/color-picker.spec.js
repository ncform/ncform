/// <reference types="Cypress" />

import common from './common';

context('color-picker', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Basic', () => {
    let formSchema = {
      type: 'object',
      properties: {
        // has init value
        name0: {
          type: 'string',
          value: '#ccffff',
          ui: {
            widget: 'color-picker'
          }
        },
        name1: {
          type: 'string',
          ui: {
            widget: 'color-picker',
            disabled: true
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'color-picker',
            readonly: true
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();

    cy.get('body').as('body');

    cy.get('.previewArea').within(() => {
      cy.get('label')
        .contains('name0')
        .parent()
        .within(() => {
          cy.get('input').should('have.value', '#CCFFFF');
          cy.get('.el-color-picker__trigger').click();
          cy.get('@body')
            .find('.el-color-picker__panel')
            .should('be.visible');
        });

      cy.get('@body').click();

      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-color-picker__trigger').should('not.be.enabled');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-color-picker__trigger').should('not.be.enabled');
        });
    });
  });
});

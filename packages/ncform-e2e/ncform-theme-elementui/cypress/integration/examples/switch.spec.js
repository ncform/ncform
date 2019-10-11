/// <reference types="Cypress" />

import common from './common';

context('switch', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Basic', () => {
    let formSchema = {
      type: 'object',
      properties: {
        // has init value
        name0: {
          type: 'boolean',
          value: true,
          ui: {
            widget: 'switch'
          }
        },
        name1: {
          type: 'boolean',
          ui: {
            widget: 'switch',
            disabled: true
          }
        },
        name2: {
          type: 'boolean',
          ui: {
            widget: 'switch',
            readonly: true
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();

    cy.get('.previewArea').within(() => {
      cy.get('label')
        .contains('name0')
        .parent()
        .within(() => {
          cy.get('.is-checked').should('exist')
        });


      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-switch__inputr').should('not.be.enabled');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-switch__inputr').should('not.be.enabled');
        });
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          default: 'OFF',
          ui: {
            widget: 'switch',
            widgetConfig: {
              width: 80,
              activeIconClass: 'el-icon-unlock',
              inactiveIconClass: 'el-icon-lock',
              activeValue: 'ON',
              inactiveValue: 'OFF',
              activeColor: '#67C23A',
              inactiveColor: '#E6A23C'
            }
          }
        },
        name2: {
          type: 'boolean',
          ui: {
            widget: 'switch',
            widgetConfig: {
              activeText: 'On',
              inactiveText: 'Off'
            }
          }
        },
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
          cy.get('.el-switch__core').should('have.css', 'width', '80px');
          cy.get('.el-switch__label--left > .el-icon-lock').should('exist');
          cy.get('.el-switch__label--right > .el-icon-unlock').should('exist');
          cy.get('.el-switch__core').should('have.css', 'background-color', 'rgb(230, 162, 60)');
          cy.get('.el-switch').click();
          cy.get('.el-switch__core').should('have.css', 'background-color', 'rgb(103, 194, 58)');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-switch__label--left').should('have.text', 'Off');
          cy.get('.el-switch__label--right').should('have.text', 'On');
        });

      // common.submitForm();
    });
  });
});

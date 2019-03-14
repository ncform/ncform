/// <reference types="Cypress" />

import common from './common';

context('Radio', () => {
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
          value: true
        },
        name1: {
          type: 'boolean',
          ui: {
            disabled: true
          }
        },
        name2: {
          type: 'boolean',
          ui: {
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
          cy.get('label.is-checked').should('contain', 'Yes');
        });

      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-radio-group').should('not.be.enabled');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-radio-group').should('not.be.enabled');
        });
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'boolean',
          ui: {
            widgetConfig: {
              arrangement: 'v'
            }
          }
        },
        name2: {
          type: 'boolean',
          ui: {
            widgetConfig: {
              type: 'button'
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
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-radio').then($dom => {
            expect($dom.eq(0).offset().left).to.be.equal(
              $dom.eq(1).offset().left
            );
            expect($dom.eq(0).offset().top).to.be.lessThan(
              $dom.eq(1).offset().top
            );
          });
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-radio-button__inner').contains('Yes');
          cy.get('.el-radio-button__inner').contains('No');
        });

      // common.submitForm();
    });
  });

  it.only('Source', () => {
    cy.server();
    cy.route(() => {
      return {
        method: 'GET',
        url: '/users',
        response: {
          data: [
            {
              value: '1',
              label: 'daniel'
            },
            {
              value: '2',
              label: 'sarah'
            }
          ]
        }
      };
    }).as('users');

    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          ui: {
            widget: 'radio',
            widgetConfig: {
              itemValueField: 'id',
              itemLabelField: 'name',
              enumSource: [
                { id: '1', name: 'daniel' },
                { id: '2', name: 'sarah' }
              ]
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'radio',
            widgetConfig: {
              enumSourceRemote: {
                remoteUrl: '/users',
                resField: 'data'
              }
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
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-radio__label').contains('daniel');
          cy.get('.el-radio__label').contains('sarah');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-radio__label').contains('daniel');
          cy.get('.el-radio__label').contains('sarah');
        });
      // common.submitForm();
    });
  });
});

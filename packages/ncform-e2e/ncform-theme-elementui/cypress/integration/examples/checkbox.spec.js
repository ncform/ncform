/// <reference types="Cypress" />

import common from './common';

context('Checkbox', () => {
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
            widget: 'checkbox'
          }
        },
        name1: {
          type: 'boolean',
          ui: {
            disabled: true,
            widget: 'checkbox'
          }
        },
        name2: {
          type: 'boolean',
          ui: {
            readonly: true,
            widget: 'checkbox'
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
          type: 'array',
          ui: {
            widget: 'checkbox',
            widgetConfig: {
              arrangement: 'v',
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
          type: 'array',
          ui: {
            widget: 'checkbox',
            widgetConfig: {
              type: 'button',
              itemValueField: 'id',
              itemLabelField: 'name',
              enumSource: [
                { id: '1', name: 'daniel' },
                { id: '2', name: 'sarah' }
              ]
            }
          }
        },
        name3: {
          type: 'array',
          ui: {
            widget: 'checkbox',
            widgetConfig: {
              selectAll: true,
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
          cy.get('.el-checkbox').then($dom => {
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
          cy.get('.el-checkbox-button:contains("daniel")').click();
          cy.get('.el-checkbox-button.is-checked').its('length').should('equal', 1);
          cy.get('.el-checkbox-button:contains("sarah")').click();
          cy.get('.el-checkbox-button.is-checked').its('length').should('equal', 2);
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.wait('@users').then(() => {
            cy.get('.el-checkbox:contains("All")').as('ckAll');
            cy.get('.el-checkbox:contains("daniel")').as('ckDaniel');
            cy.get('.el-checkbox:contains("sarah")').as('ckSarah');

            cy.get('.el-checkbox__input.is-checked').should('not.exist');

            cy.get('@ckDaniel').click();
            cy.get('.el-checkbox__input.is-indeterminate').its('length').should('equal', 1);
            cy.get('.el-checkbox__input.is-checked').its('length').should('equal', 1);

            cy.get('@ckDaniel').click();
            cy.get('.el-checkbox__input.is-indeterminate').should('not.exist');
            cy.get('.el-checkbox__input.is-checked').should('not.exist');

            cy.get('.check-all').click();
            cy.get('.el-checkbox__input.is-checked').its('length').should('equal', 3);

            cy.get('.check-all').click();
            cy.get('.el-checkbox__input.is-checked').should('not.exist');
          })
        });

      // common.submitForm();
    });
  });
});

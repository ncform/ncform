/// <reference types="Cypress" />

import common from './common';

context('Tabs', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        users1: {
          type: 'array',
          items: {
            type: 'string'
          },
          ui: {
            widget: 'array-tabs',
            widgetConfig: {
              collapsed: true,
              addTxt: 'Add Item',
              delAllTxt: 'Remove All'
            }
          }
        },
        users2: {
          type: 'array',
          value: [
            'daniel', 'sarah'
          ],
          items: {
            type: 'string'
          },
          ui: {
            widget: 'array-tabs',
            widgetConfig: {
              disableAdd: true,
              disableDel: true,
              disableCollapse: true,
            }
          }
        },
        users3: {
          type: 'array',
          value: [
            'daniel', 'sarah'
          ],
          items: {
            type: 'string'
          },
          ui: {
            widget: 'array-tabs',
            widgetConfig: {
              requiredDelConfirm: true,
              delConfirmText: {
                item: 'Sure to delete item'
              },
            }
          }
        }
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('body').as('body');

    cy.get('.previewArea').within(() => {
      // Declare action elements
      cy.get('legend')
        .contains('users1')
        .parent()
        .within(() => {
          cy.get('legend').next().should('not.be.visible');
          cy.get('legend').click();
          cy.get('legend').next().should('be.visible');

          cy.get('.el-icon-plus').click()
          cy.get('.el-tabs__item').its('length').should('equal', 2);

          cy.get('input').eq(0).type('daniel')
          cy.get('.el-tabs__item').eq(1).click();
          cy.get('input').eq(1).type('sarah')

          cy.get('.el-icon-close:visible').click();
          cy.get('.el-tabs__item').its('length').should('equal', 1);
        });

      cy.get('legend')
        .contains('users2')
        .parent()
        .within(() => {
          cy.get('legend').next().should('be.visible');
          cy.get('legend').click();
          cy.get('legend').next().should('be.visible');

          cy.get('.el-icon-plus').should('not.exist');
          cy.get('.el-icon-close').should('not.exist');
        });

      cy.get('legend')
        .contains('users3')
        .parent()
        .within(() => {
          cy.get('.el-icon-close:visible').click();
          cy.get('@body').find('.el-message-box__message').should('have.text', 'Sure to delete item');
          cy.get('@body').find('.el-message-box__btns .el-button--primary').click();
          cy.get('.el-tabs__item').its('length').should('equal', 1);
        });
      // common.submitForm();
    });
  });

});

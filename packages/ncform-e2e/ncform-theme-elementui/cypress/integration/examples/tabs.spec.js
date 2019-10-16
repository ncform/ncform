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
        },
        users4: {
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
              "disableDel": true,
              "delExceptionRows": 'dx: (function(item) { return item === "daniel"})'
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

          cy.get('.el-icon-plus').click();
          cy.get('.el-icon-plus').click();
          cy.get('.el-tabs__item').its('length').should('equal', 2);
          cy.get('.el-tabs__item:last-child').should('have.class', 'is-active');

          // Add two items, now has three items
          cy.get('.el-icon-plus').click();

          // Delete the first item with selected state, the next item is auto selected
          cy.get('.el-tabs__item').eq(0).click();
          cy.get('.el-icon-close').eq(0).click();
          cy.get('.el-tabs__item:first-child').should('have.class', 'is-active');

          // Delete the last item with selected state, the prev item is auto selected
          cy.get('.el-icon-plus').click();
          cy.get('.el-icon-close').eq(2).click();
          cy.get('.el-tabs__item:last-child').should('have.class', 'is-active');

          // Now has three items
          cy.get('.el-icon-plus').click();

          // Delete the item after active item, no change
          cy.get('.el-tabs__item').eq(1).click();
          cy.get('.el-icon-close').eq(2).click();
          cy.get('.el-tabs__item:last-child').should('have.class', 'is-active');

          // Delet the item before active item, no change
          cy.get('.el-icon-close').eq(0).click({ force: true });
          cy.get('.el-tabs__item:last-child').should('have.class', 'is-active');

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

      cy.get('legend')
        .contains('users4')
        .parent()
        .within(() => {
          cy.get('.el-icon-close').should('be.visible');

          cy.get('.el-tabs__item').eq(1).click();
          cy.get('.el-icon-close').should('not.be.visible');
        });
      // common.submitForm();
    });
  });

  it('showOneIfEmpty option', () => {
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
              showOneIfEmpty: true
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
          // 默认有一项
          cy.get('.el-tabs__item').its('length').should('equal', 1);
          cy.get('input').should('have.value', '');

          // 填写值然后删除该项
          cy.get('input').type('daniel');
          cy.get('input').should('have.value', 'daniel');
          cy.get('.el-icon-close').click();
          cy.get('input').should('have.value', '');
        });

      // common.submitForm();
    });
  });

});

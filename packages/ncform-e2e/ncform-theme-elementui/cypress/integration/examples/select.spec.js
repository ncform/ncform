/// <reference types="Cypress" />

import common from './common';

context('select', () => {
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
          value: 'daniel',
          ui: {
            widget: 'select',
            widgetConfig: {
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
            }
          }
        },
        name1: {
          type: 'string',
          ui: {
            disabled: true,
            widget: 'select',
            widgetConfig: {
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            readonly: true,
            widget: 'select',
            widgetConfig: {
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
            }
          }
        },
        name3: {
          type: 'string',
          ui: {
            hidden: true,
            widget: 'select',
            widgetConfig: {
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
            }
          }
        },
        name4: {
          type: 'string',
          ui: {
            placeholder: 'your name',
            widget: 'select',
            widgetConfig: {
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
            }
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();
    // common.submitForm();

    cy.get('.previewArea').within(() => {
      cy.get('label')
        .contains('name0')
        .as('nameLabel0');
      cy.get('@nameLabel0')
        .next()
        .find('input')
        .as('nameInput0');
      cy.get('@nameInput0').should('have.value', 'daniel');

      cy.get('label')
        .contains('name1')
        .as('nameLabel1');
      cy.get('@nameLabel1')
        .next()
        .find('input')
        .as('nameInput1');
      cy.get('@nameInput1').should('be.disabled');

      cy.get('label')
        .contains('name2')
        .as('nameLabel2');
      cy.get('@nameLabel2')
        .next()
        .find('input')
        .as('nameInput2');
      cy.get('@nameInput2').should('be.disabled');

      cy.get('label')
        .contains('name3')
        .as('nameLabel3');
      cy.get('@nameLabel3')
        .next()
        .find('input')
        .as('nameInput3');
      cy.get('@nameInput3').should('not.be.visible');

      cy.get('label')
        .contains('name4')
        .as('nameLabel4');
      cy.get('@nameLabel4')
        .next()
        .find('input')
        .as('nameInput4');
      cy.get('@nameInput4').should('have.prop', 'placeholder', 'your name');
    });
  });

  it.only('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          ui: {
            widget: 'select',
            widgetConfig: {
              multiple: true,
              clearable: true,
              filterable: true,
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'select',
            widgetConfig: {
              multiple: false,
              clearable: false,
              filterable: false,
              enumSource: [
                {
                  value: 'daniel',
                  label: 'daniel'
                },
                {
                  value: 'sarah',
                  label: 'sarah'
                }
              ]
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
      cy.get('label').contains('name1').parent().within(() => {
        cy.get('input').eq(0).focus();
        cy.get('@body').find('li:contains("daniel")').click().should('be.visible');
        cy.get('@body').find('li:contains("sarah")').click().should('be.visible');
        cy.get('.el-select__tags-text:contains("daniel")').should('exist').and('be.visible');
        cy.get('.el-select__tags-text:contains("sarah")').should('exist').and('be.visible');

        cy.get('input').eq(0).type('d').should('have.value', 'd')
        cy.get('@body').find('li:contains("sarah")').should('not.be.visible');

        cy.get('.el-icon-arrow-up').trigger('mouseenter');
        cy.get('.el-icon-circle-close').click();
        cy.get('input').eq(0).should('have.value', '');
      })

      // cy.get('label').contains('name2').parent().within(() => {
      //   cy.get('input').eq(0).focus();
      //   cy.get('@body').find('li:contains("daniel")').click().should('be.visible');
      //   cy.get('@body').find('li:contains("sarah")').click().should('be.visible');
      //   cy.get('.el-select__tags-text:contains("daniel")').should('exist').and('be.visible');
      //   cy.get('.el-select__tags-text:contains("sarah")').should('exist').and('be.visible');

      //   cy.get('input').eq(0).type('d').should('have.value', 'd')
      //   cy.get('@body').find('li:contains("sarah")').should('not.be.visible');

      //   cy.get('.el-icon-arrow-up').trigger('mouseenter');
      //   cy.get('.el-icon-circle-close').click();
      //   cy.get('input').eq(0).should('have.value', '');
      // })

      // common.submitForm();
    })

  });

});

/// <reference types="Cypress" />

import common from './common';

context('Slider', () => {
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
          value: 20,
          ui: {
            widget: 'slider'
          }
        },
        name1: {
          type: 'string',
          ui: {
            widget: 'slider',
            disabled: true
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'slider',
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
          cy.get('.el-slider__bar').should('have.css', 'width', '92px');
        });

      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-slider__button').should('not.be.enabled');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-slider__button').should('not.be.enabled');
        });
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name0: {
          type: 'string',
          ui: {
            widget: 'slider',
            widgetConfig: {
              min: 10,
              max: 60,
              step: 5
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
      cy.get('label')
        .contains('name0')
        .parent()
        .within(() => {
          cy.get('.el-slider__button-wrapper').trigger('mouseenter');
          cy.get('@body').find('.el-tooltip__popper').should('contain', '10');

          cy.get('.el-slider__button-wrapper').trigger('mousedown')
          cy.get('.el-slider__button-wrapper').trigger('mousemove', { clientX: 550 })
          cy.get('@body').find('.el-tooltip__popper').should('contain', '15');

          cy.get('.el-slider__button-wrapper').trigger('mousemove', { clientX: 1200 })
          cy.get('@body').find('.el-tooltip__popper').should('contain', '60');
        });

      // common.submitForm();
    });
  });
});

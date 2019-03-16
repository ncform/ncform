/// <reference types="Cypress" />

import common from './common';

context('Rate', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Basic', () => {
    let formSchema = {
      type: 'object',
      properties: {
        // has init value
        name0: {
          type: 'number',
          value: 3,
          ui: {
            widget: 'rate'
          }
        },
        name1: {
          type: 'number',
          value: 1,
          ui: {
            widget: 'rate',
            disabled: true,
            widgetConfig: {
              disabledVoidColor: 'rgb(161,136,127)'
            }
          }
        },
        name2: {
          type: 'number',
          value: 1,
          ui: {
            widget: 'rate',
            readonly: true,
            widgetConfig: {
              disabledVoidIconClass: 'el-icon-info'
            }
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
          cy.get('.el-icon-star-on')
            .its('length')
            .should('equal', 3);
        });

      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.el-rate__item').should('not.be.enabled');

          cy.get('.el-rate__icon')
            .eq(1)
            .should('have.css', 'color', 'rgb(161, 136, 127)');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-rate__item').should('not.be.enabled');
          cy.get('.el-rate__icon')
            .eq(1)
            .should('have.class', 'el-icon-info');
        });
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'number',
          value: 3.5,
          ui: {
            widget: 'rate',
            widgetConfig: {
              max: 8,
              allowHalf: true,
              lowThreshold: 4,
              highThreshold: 6,
              colors: [
                'rgb(92,107,192)',
                'rgb(156,204,101)',
                'rgb(255,167,38)'
              ],
              voidColor: 'rgb(97,97,97)'
            }
          }
        },
        name2: {
          type: 'number',
          value: 1,
          ui: {
            widget: 'rate',
            widgetConfig: {
              iconClasses: [
                'el-icon-goods',
                'el-icon-sold-out',
                'el-icon-news'
              ],
              voidIconClass: 'el-icon-view'
            }
          }
        },
        name3: {
          type: 'number',
          value: 1,
          ui: {
            widget: 'rate',
            widgetConfig: {
              showText: true,
              textColor: 'rgb(76,175,80)',
              texts: ['A', 'B', 'C', 'D', 'E']
            }
          }
        },
        name4: {
          type: 'number',
          value: 1,
          ui: {
            widget: 'rate',
            widgetConfig: {
              showScore: true
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
          cy.get('.el-rate__item')
            .its('length')
            .should('equal', 8);

          cy.get('.el-rate__decimal').should('exist');

          cy.get('.el-icon-star-off').should(
            'have.css',
            'color',
            'rgb(97, 97, 97)'
          );

          cy.get('.el-icon-star-on').should(
            'have.css',
            'color',
            'rgb(92, 107, 192)'
          );
          cy.get('.el-rate__icon')
            .eq(4)
            .trigger('mousemove');
          cy.get('.el-icon-star-on').should(
            'have.css',
            'color',
            'rgb(156, 204, 101)'
          );
          cy.get('.el-rate__icon')
            .eq(6)
            .trigger('mousemove');
          cy.get('.el-icon-star-on').should(
            'have.css',
            'color',
            'rgb(255, 167, 38)'
          );
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-icon-view')
            .its('length')
            .should('equal', 4);
          cy.get('.el-icon-goods')
            .its('length')
            .should('equal', 1);
          cy.get('.el-rate__icon')
            .eq(2)
            .trigger('mousemove');
          cy.get('.el-icon-sold-out')
            .its('length')
            .should('equal', 3);
          cy.get('.el-rate__icon')
            .eq(3)
            .trigger('mousemove');
          cy.get('.el-icon-news')
            .its('length')
            .should('equal', 4);
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.get('.el-rate__text')
            .should('contain', 'A')
            .and('have.css', 'color', 'rgb(76, 175, 80)');
          cy.get('.el-rate__icon')
            .eq(1)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', 'B');
          cy.get('.el-rate__icon')
            .eq(2)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', 'C');
          cy.get('.el-rate__icon')
            .eq(3)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', 'D');
          cy.get('.el-rate__icon')
            .eq(4)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', 'E');
        });

        cy.get('label')
        .contains('name4')
        .parent()
        .within(() => {
          cy.get('.el-rate__text')
            .should('contain', '1')
            .and('have.css', 'color', 'rgb(31, 45, 61)');
          cy.get('.el-rate__icon')
            .eq(1)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', '2');
          cy.get('.el-rate__icon')
            .eq(2)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', '3');
          cy.get('.el-rate__icon')
            .eq(3)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', '4');
          cy.get('.el-rate__icon')
            .eq(4)
            .trigger('mousemove');
          cy.get('.el-rate__text').should('contain', '5');
        });

      // common.submitForm();
    });
  });
});

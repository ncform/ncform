/// <reference types="Cypress" />

import common from './common';

context('Object', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        user1: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            }
          },
          ui: {
            widgetConfig: {
              layout: 'v',
              collapsed: true
            }
          }
        },
        user2: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            }
          },
          ui: {
            widgetConfig: {
              layout: 'h',
              labelWidth: '120px',
              disableCollapse: true
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
      cy.get('legend')
        .contains('user1')
        .parent()
        .within(() => {
          cy.get('legend')
            .next()
            .should('not.be.visible');
          cy.get('legend').click();
          cy.get('legend')
            .next()
            .should('be.visible');

          cy.get('legend')
            .next()
            .then($dom => {
              expect($dom.find('label').offset().top).to.be.lessThan($dom.find('input').offset().top);
              expect($dom.find('label').offset().left).to.be.equal($dom.find('input').offset().left);
            });
        });

      cy.get('legend')
        .contains('user2')
        .parent()
        .within(() => {
          cy.get('legend')
            .next()
            .should('be.visible');
          cy.get('legend').click();
          cy.get('legend')
            .next()
            .should('be.visible');

          cy.get('legend')
            .next()
            .then($dom => {
              expect($dom.find('label').offset().top).to.be.equal($dom.find('input').offset().top);
              expect($dom.find('label').offset().left).to.be.lessThan($dom.find('input').offset().left);
            });

          cy.get('label').contains('name').should('have.css', 'width', '120px');
        });

      // common.submitForm();
    });
  });
});

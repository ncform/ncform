/// <reference types="Cypress" />

import common from './common';

context('input-number', () => {
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
          value: 10,
          ui: {
            widget: 'input-number'
          }
        },
        name1: {
          type: 'number',
          ui: {
            disabled: true,
            widget: 'input-number'
          }
        },
        name2: {
          type: 'number',
          ui: {
            widget: 'input-number',
            readonly: true
          }
        },
        name3: {
          type: 'number',
          ui: {
            widget: 'input-number',
            hidden: true
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
      cy.get('@nameInput0').should('have.value', '10');

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
      cy.get('@nameInput2').should('have.prop', 'readonly');

      cy.get('label')
        .contains('name3')
        .as('nameLabel3');
      cy.get('@nameLabel3')
        .next()
        .find('input')
        .as('nameInput3');
      cy.get('@nameInput3').should('not.be.visible');
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'number',
          ui: {
            widget: 'input-number',
            widgetConfig: {
              min: 10,
              max: 20,
              step: 2
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
      cy.get('label').contains('name1').parent().within(() => {
        cy.get('input').should('have.value', '10')
        cy.get('*[role=button]').eq(1).click();
        cy.get('input').should('have.value', '12')
        cy.get('input').clear().type('5').blur().should('have.value', '10')
        cy.get('input').clear().type('21').blur().should('have.value', '20')
        cy.get('*[role=button]').eq(0).click();
        cy.get('input').should('have.value', '18')
      })

      // common.submitForm();
    });
  });
});

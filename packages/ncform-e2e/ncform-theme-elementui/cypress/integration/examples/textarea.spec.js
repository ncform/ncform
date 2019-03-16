/// <reference types="Cypress" />

import common from './common';

context('textarea', () => {
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
            widget: 'textarea'
          }
        },
        name1: {
          type: 'string',
          ui: {
            widget: 'textarea',
            disabled: true
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'textarea',
            readonly: true
          }
        },
        name3: {
          type: 'string',
          ui: {
            widget: 'textarea',
            hidden: true
          }
        },
        name4: {
          type: 'string',
          ui: {
            widget: 'textarea',
            widgetConfig: {
              rows: 4
            },
            placeholder: 'your name'
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
        .find('textarea')
        .as('nameInput0');
      cy.get('@nameInput0').should('have.value', 'daniel');

      cy.get('label')
        .contains('name1')
        .as('nameLabel1');
      cy.get('@nameLabel1')
        .next()
        .find('textarea')
        .as('nameInput1');
      cy.get('@nameInput1').should('be.disabled');

      cy.get('label')
        .contains('name2')
        .as('nameLabel2');
      cy.get('@nameLabel2')
        .next()
        .find('textarea')
        .as('nameInput2');
      cy.get('@nameInput2').should('have.prop', 'readonly');

      cy.get('label')
        .contains('name3')
        .as('nameLabel3');
      cy.get('@nameLabel3')
        .next()
        .find('textarea')
        .as('nameInput3');
      cy.get('@nameInput3').should('not.be.visible');

      cy.get('label')
        .contains('name4')
        .as('nameLabel4');
      cy.get('@nameLabel4')
        .next()
        .find('textarea')
        .as('nameInput4');
      cy.get('@nameInput4').should('have.prop', 'placeholder', 'your name').and('have.prop', 'rows', 4);
    });
  });

  it('autoSize', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          ui: {
            widget: 'textarea',
            widgetConfig: {
              autoSize: true
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'textarea',
            widgetConfig: {
              autoSize: false
            }
          }
        },
        name3: {
          type: 'string',
          ui: {
            widget: 'textarea',
            widgetConfig: {
              autoSize: { minRows: 3, maxRows: 6 }
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
        let $textarea = Cypress.$('textarea').eq(1);
        let initHeight = $textarea.height();
        cy.get('textarea').type('aa{enter}bb{enter}cc{enter}')
        cy.wait(100).then(() => {
          expect($textarea.height()).to.be.greaterThan(initHeight);
        })
        cy.get('textarea').clear();
        cy.wait(100).then(() => {
          expect($textarea.height()).to.be.equal(initHeight);
        })
      })

      cy.get('label').contains('name2').parent().within(() => {
        let $textarea = Cypress.$('textarea').eq(2);
        let initHeight = $textarea.height();
        cy.get('textarea').type('aa{enter}bb{enter}cc{enter}')
        cy.wait(100).then(() => {
          expect($textarea.height()).to.be.equal(initHeight);
        })
      })

      cy.get('label').contains('name3').parent().within(() => {
        let $textarea = Cypress.$('textarea').eq(3);
        let initHeight = $textarea.height();
        cy.get('textarea').type('aa{enter}bb{enter}cc{enter}dd{enter}')
        cy.wait(100).then(() => {
          expect($textarea.height()).to.be.greaterThan(initHeight);
        })
        cy.get('textarea').type('aa{enter}bb{enter}cc{enter}')
        cy.wait(100).then(() => {
          initHeight = $textarea.height();;
        })
        cy.get('textarea').type('aa{enter}bb{enter}cc{enter}')
        cy.wait(100).then(() => {
          expect($textarea.height()).to.be.equal(initHeight);
        })
      })

      // common.submitForm();
    })

  });

});

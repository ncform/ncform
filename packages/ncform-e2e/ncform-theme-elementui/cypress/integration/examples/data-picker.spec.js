/// <reference types="Cypress" />

import common from './common';

context('data-picker', () => {
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
          value: '1512284108066',
          ui: {
            widget: 'date-picker'
          }
        },
        name1: {
          type: 'string',
          ui: {
            widget: 'date-picker',
            disabled: true
          }
        },
        name2: {
          type: 'string',
          ui: {
            widget: 'date-picker',
            readonly: true
          }
        },
        name3: {
          type: 'string',
          ui: {
            widget: 'date-picker',
            placeholder: 'fill in date'
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
          cy.get('input').should('have.value', '2017-12-03');
        });

      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('input').should('not.be.enabled');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('input').should('have.prop', 'readonly');
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.get('input').should('have.prop', 'placeholder', 'fill in date');
        });
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              clearable: true,
              format: '(yyyy)MM-dd'
            }
          }
        },
        name2: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              clearable: false
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
          // format
          cy.get('input').should('have.value', '(2017)12-03');

          // clearable
          cy.get('input').trigger('mouseenter');
          cy.get('.el-icon-circle-close').click();
          cy.get('input').should('have.value', '');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          // clearable
          cy.get('input').trigger('mouseenter');
          cy.wait(100).then(() => {
            cy.get('.el-icon-circle-close').should('not.be.visible');
          });
        });

      // common.submitForm();
    });
  });

  it('Type', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              type: 'year'
            }
          }
        },
        name2: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              type: 'month'
            }
          }
        },
        name3: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              type: 'date'
            }
          }
        },
        name4: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              type: 'week'
            }
          }
        },
        name5: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              type: 'datetime'
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
          cy.get('input').should('have.value', '2017');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('input').should('have.value', '2017-12');
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.get('input').should('have.value', '2017-12-03');
        });

      cy.get('label')
        .contains('name4')
        .parent()
        .within(() => {
          cy.get('input').should('have.value', 'Week 48 of 2017');
        });

      cy.get('label')
        .contains('name5')
        .parent()
        .within(() => {
          cy.get('input').then($dom => {
            expect($dom.val().replace(/\d+:\d+:\d+/, 'xx:xx:xx')).to.be.equal('2017-12-03 xx:xx:xx');
          })
        });

      // common.submitForm();
    });
  });

  it('dx config', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          value: '1512284108066',
          ui: {
            widget: 'date-picker',
            widgetConfig: {
              format: 'dx: "(yyyy)MM-dd"'
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
          // format
          cy.get('input').should('have.value', '(2017)12-03');
        });
      // common.submitForm();
    });
  });

});

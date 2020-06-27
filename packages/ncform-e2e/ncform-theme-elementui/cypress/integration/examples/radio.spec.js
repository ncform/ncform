/// <reference types="Cypress" />

import common from './common';

context('Radio', () => {
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
          value: true
        },
        name1: {
          type: 'boolean',
          ui: {
            disabled: true
          }
        },
        name2: {
          type: 'boolean',
          ui: {
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
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'boolean',
          ui: {
            widgetConfig: {
              arrangement: 'v'
            }
          }
        },
        name2: {
          type: 'boolean',
          ui: {
            widgetConfig: {
              type: 'button'
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
          cy.get('.el-radio').then($dom => {
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
          cy.get('.el-radio-button__inner').contains('Yes');
          cy.get('.el-radio-button__inner').contains('No');
        });

      // common.submitForm();
    });
  });

  it('Source', () => {
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
          type: 'string',
          ui: {
            widget: 'radio',
            widgetConfig: {
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
          type: 'string',
          ui: {
            widget: 'radio',
            widgetConfig: {
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
          cy.get('.el-radio:contains("daniel")').click();
          cy.get('.el-radio.is-checked').its('length').should('equal', 1)
          cy.get('.el-radio.is-checked').contains('daniel')

          cy.get('.el-radio:contains("sarah")').click();
          cy.get('.el-radio.is-checked').its('length').should('equal', 1)
          cy.get('.el-radio.is-checked').contains('sarah')
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-radio__label').contains('daniel');
          cy.get('.el-radio__label').contains('sarah');
        });
      // common.submitForm();
    });
  });

  it('dx config', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name0: {
          type: 'array',
          items: {
            type: 'string'
          },
          ui: {
            widget: 'array-table',
            widgetConfig: {
              showOneIfEmpty: true
            }
          }
        },
        name1: {
          type: 'string',
          ui: {
            widget: 'radio',
            widgetConfig: {
              enumSource: 'dx: {{$root.name0}}.map(item => ({label: item, vallue: item}))'
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
      .contains('name0')
      .parent()
      .within(() => {
        cy.get('button').contains('Add').click();
        cy.get('input').eq(0).type('daniel')
        cy.get('input').eq(1).type('sarah')
      });

      cy.get('label')
      .contains('name1')
      .parent()
      .within(() => {
        cy.get('.el-radio').contains('daniel')
        cy.get('.el-radio').contains('sarah')
      });
      // common.submitForm();
    });
  });

  it('itemDataKey', () => {
    cy.server();
    cy.route(() => {
      return {
        method: 'GET',
        url: '/list',
        response: {
          data: [
            {
              value: '1',
              label: 'daniel',
              desc: 'boy'
            },
            {
              value: '2',
              label: 'sarah',
              desc: 'girl'
            }
          ]
        }
      };
    }).as('list');

    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          value: '1',
          ui: {
            description: 'dx: {{$temp.selectedItem1.desc}}',
            widget: 'radio',
            widgetConfig: {
              itemDataKey: 'selectedItem1',
              enumSourceRemote: {
                remoteUrl: '/list',
                resField: 'data'
              }
            }
          }
        },
        name2: {
          type: 'string',
          value: '1',
          ui: {
            description: 'dx: {{$temp.selectedItem2.desc}}',
            widget: 'radio',
            widgetConfig: {
              itemDataKey: 'selectedItem2',
              enumSource: [
                {
                  value: '1',
                  label: 'ncform',
                  desc: 'ncform is a very nice configuration generation way to develop forms'
                },
                {
                  value: '2',
                  label: 'daniel',
                  desc: 'Daniel is the author of ncform'
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
      cy.wait('@list');

      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('.form-desc').as('desc');
          cy.get('@desc').should('have.text', 'boy');

          cy.get('.el-radio:contains("sarah")').click();
          cy.get('@desc').should('have.text', 'girl');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.form-desc').as('desc');
          cy.get('@desc').should('have.text', 'ncform is a very nice configuration generation way to develop forms');

          cy.get('.el-radio:contains("daniel")').click();
          cy.get('@desc').should('have.text', 'Daniel is the author of ncform');
        });
      // common.submitForm();
    });
  });

});

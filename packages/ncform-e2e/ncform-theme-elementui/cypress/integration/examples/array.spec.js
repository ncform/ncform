/// <reference types="Cypress" />

import common from './common';

context('Array', () => {
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
            widgetConfig: {
              collapsed: true,
              itemCollapse: true,
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
            widgetConfig: {
              disableAdd: true,
              disableDel: true,
              disableReorder: true,
              disableCollapse: true,
              disableItemCollapse: true
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
        .contains('users1')
        .parent()
        .within(() => {
          cy.get('legend').next().should('not.be.visible');
          cy.get('legend').click();
          cy.get('legend').next().should('be.visible');

          cy.get('input').should('not.be.visible');
          cy.get('button').find('.el-icon-arrow-up').click()
          cy.get('input').should('be.visible');

          cy.get('button').contains('Add Item').click();
          cy.get('button').find('.el-icon-arrow-up:visible').click()
          cy.get('input').its('length').should('equal', 2);

          cy.get('input').eq(0).type('daniel')
          cy.get('input').eq(1).type('sarah')
          cy.get('.el-icon-sort-down:visible').click();
          cy.get('input').eq(0).should('have.value', 'sarah')
          cy.get('input').eq(1).should('have.value', 'daniel')

          cy.get('.el-icon-remove').eq(0).click();
          cy.get('input').its('length').should('equal', 1);
        });

      cy.get('legend')
        .contains('users2')
        .parent()
        .within(() => {
          cy.get('legend').next().should('be.visible');
          cy.get('legend').click();
          cy.get('legend').next().should('be.visible');

          cy.get('.el-icon-arrow-up').should('not.exist');
          cy.get('.el-icon-arrow-down').should('not.exist');

          cy.get('.el-icon-sort-up').should('not.exist');
          cy.get('.el-icon-sort-down').should('not.exist');

          cy.get('button:contains("Add")').should('not.exist');

          cy.get('button:contains("Delete All")').should('not.exist');
          cy.get('.el-icon-remove').should('not.exist');
        });
      // common.submitForm();
    });
  });

  it('dx config', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name0: {
          type: 'string',
          value: 'Add One'
        },
        users: {
          type: 'array',
          items: {
            type: 'string'
          },
          ui: {
            widgetConfig: {
              addTxt: 'dx: {{$root.name0}}',
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

      cy.get('label').contains('name0').next().find('input').as('rowInput');

      cy.get('legend')
        .contains('users')
        .parent()
        .within(() => {
          cy.get('button:contains("Add One")').should('exist')
          cy.get('@rowInput').clear().type('AddItem')
          cy.get('button:contains("AddItem")').should('exist')
        });
      // common.submitForm();
    });
  });

  it('label and legend', () => {
    let formSchema = {
      type: 'object',
      properties: {
        user1: {
          type: 'object',
          properties: {
            names: {
              type: 'array',
              items: {
                type: 'string'
              },
              ui: {
                label: 'name',
                legend: 'NAME',
              }
            }
          },
          ui: {
            showLegend: false
          }
        },
        user2: {
          type: 'object',
          properties: {
            names: {
              type: 'array',
              items: {
                type: 'string'
              },
              ui: {
                label: 'name',
                showLegend: false,
              }
            }
          },
          ui: {
            showLegend: false
          }
        },
        user3: {
          type: 'object',
          properties: {
            names: {
              type: 'array',
              items: {
                type: 'string',
                ui: {
                  label: 'Name'
                }
              },
              ui: {
                noLabelSpace: true,
                legend: 'NAME',
              }
            }
          },
          ui: {
            showLegend: false
          }
        },
        user4: {
          type: 'object',
          properties: {
            names: {
              type: 'array',
              items: {
                type: 'string'
              },
              ui: {
                label: 'name',
                legend: 'NAME',
              }
            }
          },
          ui: {
            showLegend: false,
            widgetConfig: {
              layout: 'h',
            }
          }
        },
        user5: {
          type: 'object',
          properties: {
            names: {
              type: 'array',
              items: {
                type: 'string'
              },
              ui: {
                label: 'name',
                showLegend: false,
              }
            }
          },
          ui: {
            widgetConfig: {
              layout: 'h',
            },
            showLegend: false
          }
        },
        user6: {
          type: 'object',
          properties: {
            names: {
              type: 'array',
              items: {
                type: 'string',
                ui: {
                  label: 'Name'
                }
              },
              ui: {
                noLabelSpace: true,
                legend: 'NAME',
              }
            }
          },
          ui: {
            widgetConfig: {
              layout: 'h',
            },
            showLegend: false
          }
        },
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('.previewArea').within(() => {
      // Declare action elements
      cy.get('label')
        .contains('user1')
        .parent()
        .then($dom => {
          expect($dom.find('label:contains("name")').offset().top).to.be.lessThan($dom.find('legend:contains("NAME")').offset().top);
          expect($dom.find('label:contains("name")').offset().left).to.be.equal($dom.find('legend:contains("NAME")').offset().left);
        });

      cy.get('label')
        .contains('user2')
        .parent()
        .then($dom => {
          expect($dom.find('label:contains("name")').offset().top).to.be.lessThan($dom.find('label:contains("name")').next().offset().top);
          expect($dom.find('label:contains("name")').offset().left).to.be.equal($dom.find('label:contains("name")').next().offset().left);
          cy.wrap($dom.find('legend:contains("NAME")')).should('not.exist');
        });

      cy.get('label')
        .contains('user3')
        .parent()
        .then($dom => {
          cy.wrap($dom.find('label:contains("name")')).should('not.exist');
          cy.wrap($dom.find('legend:contains("NAME")')).should('exist');
        });

      cy.get('label')
        .contains('user4')
        .parent()
        .then($dom => {
          expect($dom.find('label:contains("name")').offset().left).to.be.lessThan($dom.find('legend:contains("NAME")').offset().left);
        });

      cy.get('label')
        .contains('user5')
        .parent()
        .then($dom => {
          expect($dom.find('label:contains("name")').offset().left).to.be.lessThan($dom.find('label:contains("name")').next().offset().left);
          cy.wrap($dom.find('legend:contains("NAME")')).should('not.exist');
        });

      cy.get('label')
        .contains('user6')
        .parent()
        .then($dom => {
          cy.wrap($dom.find('label:contains("name")')).should('not.exist');
          cy.wrap($dom.find('legend:contains("NAME")')).should('exist');
        });
      // common.submitForm();
    });
  });

});

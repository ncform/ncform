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

  it('dx config', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name0: {
          type: 'number',
          value: '80'
        },
        user: {
          type: 'object',
          properties: {
            firstname: {
              type: 'string'
            }
          },
          ui: {
            widgetConfig: {
              layout: 'h',
              labelWidth: 'dx: {{$root.name0}} + "px"'
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
        .contains('user')
        .parent()
        .within(() => {
          cy.get('label').contains('firstname').should('have.css', 'width', '80px');
          cy.get('@rowInput').clear().type('120')
          cy.get('label').contains('firstname').should('have.css', 'width', '120px');
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
            name: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string'
                }
              },
              ui: {
                label: 'name',
                legend: 'NAME'
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
            name: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string'
                }
              },
              ui: {
                label: 'name',
                showLegend: false
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
            name: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string'
                }
              },
              ui: {
                noLabelSpace: true,
                legend: 'NAME'
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
            name: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string'
                }
              },
              ui: {
                label: 'name',
                legend: 'NAME'
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
            name: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string'
                }
              },
              ui: {
                label: 'name',
                showLegend: false
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
            name: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string'
                }
              },
              ui: {
                noLabelSpace: true,
                legend: 'NAME'
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

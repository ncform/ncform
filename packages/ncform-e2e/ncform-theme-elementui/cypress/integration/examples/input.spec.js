/// <reference types="Cypress" />

import common from './common';

context('input', () => {
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
          value: 'daniel'
        },
        name1: {
          type: 'string',
          ui: {
            disabled: true
          }
        },
        name2: {
          type: 'string',
          ui: {
            readonly: true
          }
        },
        name3: {
          type: 'string',
          ui: {
            hidden: true
          }
        },
        name4: {
          type: 'string',
          ui: {
            placeholder: 'your name'
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();
    // common.submitForm();

    cy.get('.previewArea').within(() => {

      cy.get('label').contains('name0').as('nameLabel0');
      cy.get('@nameLabel0').next().find('input').as('nameInput0');
      cy.get('@nameInput0').should('have.value', 'daniel');

      cy.get('label').contains('name1').as('nameLabel1');
      cy.get('@nameLabel1').next().find('input').as('nameInput1');
      cy.get('@nameInput1').should('be.disabled');

      cy.get('label').contains('name2').as('nameLabel2');
      cy.get('@nameLabel2').next().find('input').as('nameInput2');
      cy.get('@nameInput2').should('have.prop', 'readonly');

      cy.get('label').contains('name3').as('nameLabel3');
      cy.get('@nameLabel3').next().find('input').as('nameInput3');
      cy.get('@nameInput3').should('not.be.visible');

      cy.get('label').contains('name4').as('nameLabel4');
      cy.get('@nameLabel4').next().find('input').as('nameInput4');
      cy.get('@nameInput4').should('have.prop', 'placeholder', 'your name');

    })

  });

  it('Simple Props', () => {

    let formSchema = {
      type: 'object',
      properties: {
        // has init value
        name1: {
          type: 'string',
          ui: {
            widgetConfig: {
              prefixIcon: 'el-icon-search',
              trim: false
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            widgetConfig: {
              suffixIcon: 'el-icon-date',
              clearable: true
            }
          }
        },
        name3: {
          type: 'string',
          ui: {
            widgetConfig: {
              prefixIcon: 'el-icon-search',
              suffixIcon: 'el-icon-date',
            }
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();
    // common.submitForm();

    cy.get('.previewArea').within(() => {

      cy.get('label').contains('name1').as('nameLabel1');
      cy.get('@nameLabel1').next().find('input').as('nameInput1');
      cy.get('@nameInput1').type(' daniel  ').should('have.value', ' daniel  ');
      cy.get('@nameInput1').parent().find('.el-icon-search').should('exist');
      cy.get('@nameInput1').parent().find('.el-input__clear').should('not.be.visible');

      cy.get('label').contains('name2').as('nameLabel2');
      cy.get('@nameLabel2').next().find('input').as('nameInput2');
      cy.get('@nameInput2').parent().find('.el-input__clear').should('not.be.visible');
      cy.get('@nameInput2').type(' daniel  ').should('have.value', 'daniel');
      cy.get('@nameInput2').parent().find('.el-input__clear').should('be.visible');
      cy.get('@nameInput2').parent().find('.el-input__clear').click();
      cy.get('@nameInput2').should('have.value', '');
      cy.get('@nameInput2').parent().find('.el-input__clear').should('not.be.visible');
      cy.get('@nameInput2').parent().find('.el-icon-date').should('exist');

      cy.get('label').contains('name3').parent().as('item');
      cy.get('@item').find('.el-icon-search').should('exist');
      cy.get('@item').find('.el-icon-date').should('exist');
    })

  });

  it.only('type', () => {

    cy.server()
    cy.route('POST', '/upload', { data: 'http://www.w3school.com.cn/i/eg_tulip.jpg' })

    let formSchema = {
      type: 'object',
      properties: {
        name2: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'number'
            }
          }
        },
        name3: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'password'
            }
          }
        },
        name4: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'file',
              upload: {
                uploadUrl: '/upload',
                resField: 'data',
                data: {
                  name: 'daniel'
                },
                fileField: 'photo',
                accept: '.png',
                constraint: {
                  width: 0,
                  height: 0,
                  sizeFixed: true,
                  maxSize: 0,
                  minSize: 0
                },
                uploadText: 'Upload Now',
              }
            }
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();

    cy.get('.previewArea').within(() => {

      cy.get('label').contains('name2').as('nameLabel2');
      cy.get('@nameLabel2').next().find('input').as('nameInput2');
      cy.get('@nameInput2').type('daniel').should('have.value', '');
      cy.get('@nameInput2').type('123').should('have.value', '123');

      cy.get('label').contains('name3').as('nameLabel3');
      cy.get('@nameLabel3').next().find('input').as('nameInput3');
      cy.get('@nameInput3').type('daniel123').should('have.value', 'daniel123').and('have.prop', 'type', 'password');

    })

  });

});

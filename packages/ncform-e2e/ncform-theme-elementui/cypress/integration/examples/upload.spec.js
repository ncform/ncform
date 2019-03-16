/// <reference types="Cypress" />

import common from './common';

context('Upload', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Basic', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'array',
          value: [
            {
              name: 'girl.jpg',
              url: '//user-gold-cdn.xitu.io/2019/3/15/1697f38df3ba0613?w=570&h=273&f=jpeg&s=40278'
            }
          ],
          ui: {
            widget: 'upload'
          }
        },
        name2: {
          type: 'array',
          ui: {
            disabled: true,
            widget: 'upload'
          }
        },
        name3: {
          type: 'array',
          value: [
            {
              name: 'girl.jpg',
              url: '//user-gold-cdn.xitu.io/2019/3/15/1697f38df3ba0613?w=570&h=273&f=jpeg&s=40278'
            }
          ],
          ui: {
            readonly: true,
            widget: 'upload'
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
          cy.get('.el-upload-list li').contains('girl.jpg');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('button').should('not.be.enabled');
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.get('button').should('not.be.visible');
        });

      // common.submitForm();
    });
  });

  it('Simple Props', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: '/upload/single',
      response: {
        data: {
          picName: 'pic-1.jpg',
          picUrl: '//user-gold-cdn.xitu.io/2019/3/15/1697f38df3ba0613?w=570&h=273&f=jpeg&s=40278'
        }
      }
    }).as('uploadSingle');

    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'array',
          ui: {
            widget: 'upload',
            widgetConfig: {
              uploadUrl: '/upload/single',
              resField: 'data',
              fileUrlField: 'picUrl',
              fileNameField: 'picName',
              fileField: 'pic',
              data: {
                name: 'daniel'
              },
              accept: '.png',
              listType: 'text',
              showFileList: true
              // constraint: {
              //   width: 300,
              //   height: 300,
              //   sizeFixed: true
              // }
            }
          }
        },
        name2: {
          type: 'array',
          ui: {
            widget: 'upload',
            widgetConfig: {
              uploadUrl: '/upload/single',
              resField: 'data',
              multipe: true,

              listType: 'picture',
              limit: 2
              // constraint: {
              //   width: 320,
              //   height: 320,
              //   sizeFixed: false
              // }
            }
          }
        },
        name3: {
          type: 'array',
          ui: {
            widget: 'upload',
            widgetConfig: {
              uploadUrl: '/upload/single',
              fileUrlField: 'picUrl',
              fileNameField: 'picName',
              resField: 'data',

              drag: true,
              listType: 'picture-card'
              // constraint: {
              //   maxSize: 30,
              //   minSize: 10
              // }
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
          cy.get('button')
            .contains('Select file')
            .should('exist');

          common.uploadImage('assets/img/dx.png');

          // listType: 'text'
          cy.get('.el-upload-list--text li')
            .its('length')
            .should('equal', 1);

          cy.get('button')
            .contains('Upload to server')
            .click();

          cy.wait('@uploadSingle').then(xhr => {
            let uploadParams = {};
            xhr.request.body.forEach((item, key) => (uploadParams[key] = item));

            // data
            cy.wrap(uploadParams)
              .its('name')
              .should('equal', 'daniel');
            // fileField
            cy.wrap(uploadParams).should('have.property', 'pic');
          });
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('button')
            .contains('Select file')
            .should('exist');

          common.uploadImage('assets/img/dx.png');
          // listType: 'picture'
          cy.get('.el-upload-list--picture li')
            .its('length')
            .should('equal', 1);
          common.uploadImage('assets/img/dx.png');
          cy.wait(500);
          cy.get('.el-upload-list--picture li')
            .its('length')
            .should('equal', 2);
          common.uploadImage('assets/img/dx.png');
          cy.wait(500);
          cy.get('.el-upload-list--picture li')
            .its('length')
            .should('equal', 2);
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {

          common.uploadImage('assets/img/dx.png');
          // listType: 'picture-card'
          cy.get('.el-upload-list--picture-card li')
            .its('length')
            .should('equal', 1);
          cy.get('.el-upload-dragger').should('exist');
        });
      // common.submitForm();
    });
  });
});

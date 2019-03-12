/// <reference types="Cypress" />

context('<context name>', () => {

  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html')
  })

  it('<testcase name>', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        }
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('.previewArea').within(() => {
      // Declare action elements

      // common.submitForm();
    })

  });

})

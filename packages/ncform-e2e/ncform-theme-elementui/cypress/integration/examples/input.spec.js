/// <reference types="Cypress" />

context('input', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('<testcase name>', () => {
    cy.window()
      .its('editor')
      .invoke(
        'setValue',
        JSON.stringify(
          {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              }
            }
          },
          null,
          2
        )
      );
  });
});

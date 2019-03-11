/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('<context name>', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/<page name>.html')
  })

  it('<testcase name>', () => {
    let id = md5('<testcase name>');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('name').next().find('input').should('have.value', 'daniel');
    })
  })

})

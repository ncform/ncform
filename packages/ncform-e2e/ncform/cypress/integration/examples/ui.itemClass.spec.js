/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.itemClass', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.itemClass.html')
  })

  it('Add item class', () => {
    let id = md5('Add item class');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('.obj-daniel').should('exist').and('have.css', 'border-color', 'rgb(64, 158, 255)');
      cy.get('.obj-item-daniel input').should('exist').and('have.css', 'border-color', 'rgb(64, 158, 255)');
      cy.get('.array-daniel').should('exist').and('have.css', 'border-color', 'rgb(245, 108, 108)');
      cy.get('.array-item-daniel input').should('exist').and('have.css', 'border-color', 'rgb(245, 108, 108)');
      cy.get('.table-daniel').should('exist').and('have.css', 'border-color', 'rgb(230, 162, 60)');
      cy.get('.table-item-daniel input').should('exist').and('have.css', 'border-color', 'rgb(230, 162, 60)');
    })
  })

})

/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('required', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_required.html')
  })

  it('Specify true value', () => {
    let id = md5('Specify true value');
    cy.get(`[data-cy=${id}]`).within(() => {
      // object
      cy.get('legend').contains('user').next().as('user');
      cy.get('@user').find('label:contains("name")').contains('*').should('be.visible');
      cy.get('@user').find('input').type('daniel').clear()
      cy.get('@user').find('.invalid-feedback').should('be.visible');

      // array
      cy.get('legend').contains('users1').next().as('users1');
      cy.get('@users1').find('label:contains("firstname")').contains('*').should('be.visible');
      cy.get('@users1').find('input').type('daniel').clear()
      cy.get('@users1').find('.invalid-feedback').should('be.visible');

      // array-table
      cy.get('legend').contains('users2').next().as('users2');
      cy.get('@users2').find('th:contains("users2")').contains('*').should('be.visible');
      cy.get('@users2').find('input').type('daniel').clear()
      cy.get('@users2').find('.invalid-feedback').should('be.visible');
    })
  })

  it('Object: Specify dx value', () => {
    let id = md5('Object: Specify dx value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('age').parent().as('age');
      cy.get('label').contains('firstname').parent().as('firstname');
      cy.get('label').contains('lastname').parent().as('lastname');

      cy.get('@firstname').find('label').should('not.contain', '*');
      cy.get('@lastname').find('label').should('not.contain', '*');

      cy.get('@age').find('input').type(19);
      cy.get('@firstname').find('label').should('contain', '*');
      cy.get('@lastname').find('label').should('contain', '*');

      cy.get('@age').find('input').clear().type(10);
      cy.get('@firstname').find('label').should('not.contain', '*');
      cy.get('@lastname').find('label').should('not.contain', '*');
    })
  })

  it('Array: Specify dx value', () => {
    let id = md5('Array: Specify dx value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('age').parent().as('age');
      cy.get('legend').contains('users').parent().as('users');
      cy.get('legend').contains('users1').parent().as('users1');

      // users
      cy.get('@users').find('button').contains('Add').click();
      cy.get('@users').find('label:contains("name")').should('not.contain', '*');

      cy.get('@age').find('input').type(19);
      cy.get('@users').find('label:contains("name")').should('contain', '*');

      cy.get('@age').find('input').clear().type(10);
      cy.get('@users').find('label:contains("name")').should('not.contain', '*');

      // users1
      cy.get('@users1').find('button').contains('Add').click();
      cy.get('@users1').find('label:contains("users1")').each($item => {
        cy.wrap($item).parent().find('label').contains('age').next().find('input').as('ageInput');
        cy.wrap($item).parent().find('label').contains('name').as('nameLabel');

        cy.get('@ageInput').type(19)
        cy.get('@nameLabel').should('contain', '*');
        cy.get('@ageInput').clear().type(11)
        cy.get('@nameLabel').should('not.contain', '*');
      })
    })
  })

  it('Table: Specify dx value', () => {
    let id = md5('Table: Specify dx value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('age').parent().as('age');
      cy.get('legend').contains('users').parent().as('users');
      cy.get('legend').contains('users1').parent().as('users1');

      // users
      cy.get('@users').find('button').contains('Add').click();
      cy.get('@users').find('th:contains("name")').should('not.contain', '*');

      cy.get('@age').find('input').type(19);
      cy.get('@users').find('th:contains("name")').should('contain', '*');

      cy.get('@age').find('input').clear().type(10);
      cy.get('@users').find('th:contains("name")').should('not.contain', '*');

      // users1
      cy.get('@users1').find('button').contains('Add').click();
      cy.get('@users1').find('tbody tr').each($item => {
        cy.wrap($item).find('input').eq(0).as('ageInput');
        cy.wrap($item).find('input').eq(1).as('nameInput');

        cy.get('@nameInput').type('daniel').clear();
        cy.get('@nameInput').next('.invalid-feedback').should('not.be.visible');

        cy.get('@ageInput').type(19)
        cy.get('@nameInput').next('.invalid-feedback').should('be.visible');
        cy.get('@nameInput').type('daniel').clear();
        cy.get('@nameInput').next('.invalid-feedback').should('be.visible');

        cy.get('@ageInput').clear().type(11)
        cy.get('@nameInput').next('.invalid-feedback').should('not.be.visible');
        cy.get('@nameInput').type('daniel').clear();
        cy.get('@nameInput').next('.invalid-feedback').should('not.be.visible');
      })
    })
  })

})

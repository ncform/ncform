/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ValueTemplate', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_valueTemplate.html')
  })

  it('Follow the firstname and lastname', () => {
    let id = md5('Follow the firstname and lastname');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('firstname').next().find('input').type('daniel');
      cy.get('label').contains('lastname').next().find('input').type('xiao');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel xiao');
    })
  })

  it('Fullname has init value', () => {
    let id = md5('Fullname has init value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel.xiao');
      cy.get('label').contains('fullname').next().find('input').type(' hi');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel.xiao hi');
      cy.get('label').contains('firstname').next().find('input').clear().type('daniel');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel wang');
    })
  })

  it('Fullname has no init value', () => {
    let id = md5('Fullname has no init value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'sarah wang');
      cy.get('label').contains('firstname').next().find('input').clear().type('daniel');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel wang');
    })
  })

  it('Array: Fullname has init value', () => {
    let id = md5('Array: Fullname has init value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel.xiao');
      cy.get('label').contains('firstname').next().find('input').clear().type('daniel');
      cy.get('label').contains('fullname').next().find('input').should('have.value', 'daniel wang');
    })
  })

  it('Array widgets support follow feature', () => {
    let id = md5('Array widgets support follow feature');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('test1').next().find('input').should('have.value', '["daniel", "sarah"]');
      cy.get('legend').contains('array1').parent().within(() => {
        cy.get('input').first().should('have.value', 'daniel');
        cy.get('input').last().should('have.value', 'sarah');
      });
      cy.get('label').contains('test1').next().find('input').clear().type('["hi daniel", "hello sarah"]');
      cy.get('legend').contains('array1').parent().within(() => {
        cy.get('input').first().should('have.value', 'hi daniel');
        cy.get('input').last().should('have.value', 'hello sarah');
      });
      cy.get('label').contains('test1').next().find('input').clear().type('["one daniel"]');
      cy.get('legend').contains('array1').parent().within(() => {
        cy.get('input').should('have.length', 1);
        cy.get('input').first().should('have.value', 'one daniel');
      });

      cy.get('label').contains('test2').next().find('input').should('have.value', '[{"text": "hi"}, {"text": "hello"}]');
      cy.get('legend').contains('array2').parent().within(() => {
        cy.get('input').should('have.length', 1);
        cy.get('input').first().should('have.value', 'init');
      });

      cy.get('label').contains('test2').next().find('input').clear().type('[{{}"text": "hi daniel"}, {{}"text": "hello"}]');
      cy.get('legend').contains('array2').parent().within(() => {
        cy.get('input').first().should('have.value', 'hi daniel');
        cy.get('input').last().should('have.value', 'hello');
      });
      cy.get('label').contains('test2').next().find('input').clear().type('[{{}"text": "one daniel"}]');
      cy.get('legend').contains('array2').parent().within(() => {
        cy.get('input').should('have.length', 1);
        cy.get('input').first().should('have.value', 'one daniel');
      });
    })
  })

})

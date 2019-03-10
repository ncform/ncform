/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.label and ui.legend', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.label.html')
  })

  it('Only provide label value', () => {
    let id = md5('Only provide label value');
    cy.get(`[data-cy=${id}]`).within(() => {
      ['user1', 'user2'].forEach(itemName => {
        cy.get('legend').contains(itemName).parent().within(() => {
          cy.get('label').contains('Your Name').should('exist');
          cy.get('label').contains('Your Name').next().find('input').type('daniel');
          cy.get('label').contains("daniel's age").should('exist');
        })
      })
    })
  })

  it('ShowLabel is false', () => {
    let id = md5('ShowLabel is false');
    cy.get(`[data-cy=${id}]`).within(() => {
      ['user1', 'user2'].forEach(itemName => {
        cy.get('legend').contains(itemName).parent().within(() => {
          cy.get('label').contains('Lastname').should('not.be.visible');
        })
      })

      cy.get('legend').contains('user1').parent().within(() => {
        cy.get('input').then(($inputs) => {
          cy.log('Align the top of the two controls')
          cy.wrap($inputs.eq(0).offset().top).should('equal', $inputs.eq(1).offset().top)
        })
      })

      cy.get('legend').contains('user2').parent().within(() => {
        cy.get('input').then(($inputs) => {
          cy.log('Align the left of the two controls')
          cy.wrap($inputs.eq(0).offset().left).should('equal', $inputs.eq(1).offset().left)
        })
      })

    })
  })

  it('NoLabelSpace is true', () => {
    let id = md5('NoLabelSpace is true');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('Lastname').should('not.be.visible');
    })
  })

  it('Object: show label', () => {
    let id = md5('Object: show label');
    cy.get(`[data-cy=${id}]`).within(() => {

      cy.get('label').contains('user1').parent().within(() => {
        cy.get('label').contains('user1').should('be.visible');
        cy.get('label').then(($inputs) => {
          cy.wrap($inputs.eq(0).offset().top).should('be.lessThan', $inputs.eq(1).offset().top)
        })
      })

      cy.get('label').contains('user2').parent().within(() => {
        cy.get('label').contains('user2').should('be.visible');
        cy.get('label').then(($inputs) => {
          cy.wrap($inputs.eq(0).offset().left).should('be.lessThan', $inputs.eq(1).offset().left)
        })
      })

    })
  })

  it('Object & array: only provide legend value', () => {
    let id = md5('Object & array: only provide legend value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('One User').should('be.visible');
      cy.get('legend').contains('Users').should('be.visible');
    })
  })

})

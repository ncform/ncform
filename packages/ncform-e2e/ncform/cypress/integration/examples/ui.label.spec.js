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

  it('Object,array,array-table : only provide legend dx value', () => {
    let id = md5('Object,array,array-table : only provide legend dx value');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('info-object').should('be.visible');
      cy.get('label').contains('name').next().find('input').type('daniel');
      cy.get('legend').contains('daniel info-object').should('be.visible');

      cy.get('legend').contains('info-array').should('be.visible');
      cy.get('legend').contains('info-array').parent().find('input').type('sarah');
      cy.get('legend').contains('sarah info-array').should('be.visible');

      cy.get('legend').contains('info-table').should('be.visible');
      cy.get('legend').contains('info-table').parent().find('input').type('dx');
      cy.get('legend').contains('dx info-table').should('be.visible');
    })
  })

  it('array and table: dx value for item label', () => {
    let id = md5('array and table: dx value for item label');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('th').eq(0).as('header');
      cy.get('legend').contains('users1').parent().as('array');

      cy.get('@header').then($dom => expect($dom.text().trim()).to.be.equal('dx from:'));
      cy.get('@array').find('label').then($dom => expect($dom.text().trim()).to.be.equal('dx from:  1'));

      cy.get('label').contains('company').next().find('input').type('google');
      cy.get('@header').then($dom => expect($dom.text().trim()).to.be.equal('dx from: google'));
      cy.get('@array').find('label').then($dom => expect($dom.text().trim()).to.be.equal('dx from: google 1'));
    })
  })

})

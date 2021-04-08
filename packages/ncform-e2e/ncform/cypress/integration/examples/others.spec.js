/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('Others', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_others.html')
  })

  it('v-model: external update', () => {
    let id = md5('v-model: external update');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('name').next().find('input').as('input');

      cy.get('@input').type('sarah');
      cy.get('@input').should('have.value', 'sarah');
      cy.get('button').contains('Updated Model').click();
      cy.get('@input').should('have.value', 'daniel');
    })
  })

  it('reset', () => {
    let id = md5('reset');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('name').next().find('input').as('input');

      cy.get('@input').type('sarah');
      cy.get('@input').should('have.value', 'sarah');
      cy.get('button').contains('Reset').click();
      cy.get('@input').should('have.value', '');

      // reset to latest external update model
      cy.get('button').contains('Updated Model').click();
      cy.get('@input').should('have.value', 'daniel');
      cy.get('@input').type(' good boy');
      cy.get('@input').should('have.value', 'daniel good boy');
      cy.get('button').contains('Reset').click();
      cy.get('@input').should('have.value', 'daniel');
    })
  })

  it('submit event && $ncformValidate api', () => {
    let id = md5('submit event && $ncformValidate api');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('firstname').next().find('input').as('firstnameInput');
      cy.get('label').contains('lastname').next().find('input').as('lastnameInput');

      cy.get('@firstnameInput').type('{enter}');
      cy.get('@firstnameInput').next('.invalid-feedback').should('be.visible');
      cy.get('@lastnameInput').next('.invalid-feedback').should('be.visible');
    })
  })

  it('is-dirty.sync', () => {
    let id = md5('is-dirty.sync');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('button').contains('Submit').as('submitBtn');
      cy.get('button').contains('Reset').as('resetBtn');
      cy.get('button').contains('Updated Model').as('updateBtn');
      cy.get('label').contains('name').next().find('input').as('nameInput');

      cy.get('@submitBtn').should('not.be.enabled');
      cy.get('@nameInput').type('daniel');
      cy.get('@submitBtn').should('be.enabled');
      cy.get('@nameInput').clear();
      cy.get('@submitBtn').should('not.be.enabled');

      cy.get('@nameInput').type('daniel');
      cy.get('@submitBtn').should('be.enabled');
      cy.get('@resetBtn').click();
      cy.get('@submitBtn').should('not.be.enabled');

      cy.get('@updateBtn').click();
      cy.get('@submitBtn').should('not.be.enabled');
      cy.get('@nameInput').clear();
      cy.get('@submitBtn').should('be.enabled');
      cy.get('@nameInput').type('daniel')
      cy.get('@submitBtn').should('not.be.enabled');
    })
  })

  it('$ncformAllWidgets and $ncformAllRules()', () => {
    cy.window().then(win => {
      expect(win.Vue.prototype.$ncformAllRules()).to.deep.equal(["contains", "exclusiveMinimum", "ipv6", "maximum", "minimum", "required", "dateTime", "hostname", "maxItems", "minItems", "multipleOf", "tel", "email", "maxLength", "minLength", "number", "uniqueItems", "exclusiveMaximum", "ipv4", "maxProperties", "minProperties", "pattern", "url", "ajax"]);
      expect(win.Vue.prototype.$ncformAllWidgets()).to.deep.equal(["object", "array", "array-table", "input"]);
    })
  })

  it('$ncformGetValue api', () => {
    cy.window().then(win => {
      let formName = 'form_' + md5('$ncformGetValue api');
      expect(win.Vue.prototype.$ncformGetValue(formName, {ignoreHiddenField: true})).to.deep.equal({"showField":"1","obj":{"show":"1"},"arr":[{"show":"1"}]});
    })
  })

})

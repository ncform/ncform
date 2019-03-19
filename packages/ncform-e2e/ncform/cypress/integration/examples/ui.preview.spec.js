/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('ui.preview', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_ui.preview.html')
  })

  it('Video preview', () => {
    let id = md5('Video preview');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('video1').next().as('video1');
      cy.get('@video1').find('video').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/movie.ogg');
      cy.get('@video1').find('input').clear().type('http://www.runoob.com/try/demo_source/mov_bbb.mp4');
      cy.get('@video1').find('video').should('have.prop', 'src', 'http://www.runoob.com/try/demo_source/mov_bbb.mp4');

      cy.get('label').contains('video2').next().as('video2');
      cy.get('@video2').find('video').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/movie.ogg');
      cy.get('@video2').find('.clear').click();
      cy.get('@video2').find('input').should('have.value', '');
    })
  })

  it('Audio preview', () => {
    let id = md5('Audio preview');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('audio1').next().as('audio1');
      cy.get('@audio1').find('audio').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/movie.ogg');
      cy.get('@audio1').find('input').clear().type('http://www.runoob.com/try/demo_source/mov_bbb.mp4');
      cy.get('@audio1').find('audio').should('have.prop', 'src', 'http://www.runoob.com/try/demo_source/mov_bbb.mp4');

      cy.get('label').contains('audio2').next().as('audio2');
      cy.get('@audio2').find('audio').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/movie.ogg');
      cy.get('@audio2').find('.clear').click();
      cy.get('@audio2').find('input').should('have.value', '');
    })
  })

  it('Image preview', () => {
    let id = md5('Image preview');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('image1').next().as('image1');
      cy.get('@image1').find('img').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/eg_tulip.jpg').and('have.css', 'height', '200px');
      cy.get('@image1').find('input').clear().type('http://www.runoob.com/images/pulpit.jpg');
      cy.get('@image1').find('img').should('have.prop', 'src', 'http://www.runoob.com/images/pulpit.jpg');

      cy.get('label').contains('image2').next().as('image2');
      cy.get('@image2').find('img').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/eg_tulip.jpg');
      cy.get('@image2').find('.clear').click();
      cy.get('@image2').find('input').should('have.value', '');

      cy.get('label').contains('image3').next().as('image3');
      cy.get('@image3').find('img').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/eg_tulip.jpg').and('have.css', 'width', '200px');
      cy.get('@image3').find('img').parent().should('have.class', 'rounded');

      cy.get('label').contains('image4').next().as('image4');
      cy.get('@image4').find('img').should('exist').and('have.prop', 'src', 'http://www.w3school.com.cn/i/eg_tulip.jpg').and('have.css', 'width', '200px');
      cy.get('@image4').find('img').parent().should('have.class', 'circle');
    })
  })

  it('Link preview', () => {
    let id = md5('Link preview');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('label').contains('link1').next().as('link1');
      cy.get('@link1').find('a').should('exist').and('have.prop', 'href', 'https://github.com/ncform/ncform');
      cy.get('@link1').find('input').clear().type('https://github.com/daniel-dx');
      cy.get('@link1').find('a').should('have.prop', 'href', 'https://github.com/daniel-dx');

      cy.get('label').contains('link2').next().as('link2');
      cy.get('@link2').find('a').should('exist').and('have.prop', 'href', 'https://github.com/ncform/ncform');
      cy.get('@link2').find('.clear').click();
      cy.get('@link2').find('input').should('have.value', '');
    })
  })

})

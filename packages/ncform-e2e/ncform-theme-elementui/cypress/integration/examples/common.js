const path = require('path');

export function fillInSchema(formSchema) {
  return cy.window()
    .its('editor')
    .invoke('setValue', JSON.stringify(formSchema, null, 2));
}

export function startRun() {
  return cy.get('button').contains('Run').click();
}

export function submitForm() {
  return cy.get('button').contains('Get Data').click()
}

export function uploadImage(fileUrl) {
  const extName = path.extname(fileUrl).replace('.', '');
  return cy.fixture(fileUrl).as('logo')
    .get('input[type=file]').then(function (el) {
      return Cypress.Blob.base64StringToBlob(this.logo, 'image/' + extName)
        .then(blob => {
          const testFile = new File([blob], path.basename(fileUrl), { type: 'image/' + extName })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(testFile)
          el[0].files = dataTransfer.files;
        })
    })
}

export default {
  startRun,
  submitForm,
  fillInSchema,
  uploadImage
}

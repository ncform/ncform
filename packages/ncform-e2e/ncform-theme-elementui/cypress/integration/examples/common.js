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

export function uploadFile(fileUrl) {
  return cy.fixture(fileUrl).as('logo')
    .get('input[type=file]').then(function (el) {
      return Cypress.Blob.base64StringToBlob(this.logo, 'image/png')
        .then(blob => {
          el[0].files[0] = blob
          el[0].dispatchEvent(new Event('change', { bubbles: true }))
        })
    })
}

export default {
  startRun,
  submitForm,
  fillInSchema,
  uploadFile
}

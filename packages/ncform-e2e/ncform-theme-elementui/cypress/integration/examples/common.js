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

export default {
  startRun,
  submitForm,
  fillInSchema
}


export default class CypressPageObject {

  includeUrl(url) {
    return cy.url().should('include', url);
  }

  getTextFieldByID(key, text) {
    return cy.get(`input[id="${key}"]`).type(text);
  }
  getTextFieldByName(key) {
    return cy.get(`input[name="${key}"]`).click();
  }
  getIdByList(key) {
    return cy.get(`li[id="${key}"]`).click();
  }
  getBytext(key) {
    return cy.contains(key).should("be.visible");
  }
  logout() {
    cy.get('input[value="Log out"]').click();
  }

}
export const pageObjects = new CypressPageObject();

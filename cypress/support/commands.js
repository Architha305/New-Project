// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
   // failing the test
   return false
})

Cypress.Commands.add('requestQuotation', () => {
   cy.contains('Request Quotation').click();
   cy.get('h2').contains('Request a quotation').should('be.visible');
   cy.contains('Policyexcess').should('be.visible');
   cy.contains('Windscreenrepair').should('be.visible');
   cy.get('input[value="Yes"]').check();
   cy.get('input[id="quotation_incidents"]').type("test");
   cy.get('input[id="quotation_vehicle_attributes_registration"]').type("7653");
   cy.get('input[id="quotation_vehicle_attributes_mileage"]').type("77");
   cy.get('input[id="quotation_vehicle_attributes_value"]').type("89");
   cy.get('select[id="quotation_vehicle_attributes_parkinglocation"]').select("Driveway/Carport");
   cy.get('input[value="Save Quotation"]').click();
})

Cypress.Commands.add('enterQuotationId', () => {
   cy.contains('Retrieve Quotation').click();
   cy.get('input[placeholder="identification number"]').type("19510");
   cy.get('input[value="Retrieve"]').click();
})

Cypress.Commands.add('validateExistingRequestedUsaerdata', () => {
   cy.contains('Insurance Name').should("be.visible");
   cy.contains('user_id').should("be.visible");
   cy.contains('49471').should("be.visible");
   cy.contains('7384').should("be.visible");
})

Cypress.Commands.add('profileDetails', () => {
   cy.contains('Profile').click();
   cy.contains('Title:').should("be.visible");
   cy.contains('Firstname:').should("be.visible");
   cy.contains('Surname:').should("be.visible");
   cy.contains('Phone:').should("be.visible");
   cy.contains('Dataofbirth:').should("be.visible");
   cy.contains('License type:').should("be.visible");
})

Cypress.Commands.add('EditProfileDetails', () => {
   cy.contains('Edit Profile').click();
   cy.get('select[id="user_title"]').select("Miss");
   cy.get('input[id="user_surname"]').type("Talasani");
   cy.get('input[id="user_firstname"]').type("Architha");
   cy.get('input[id="user_phone"]').type("7653855678");
   cy.get('select[id="user_dateofbirth_1i"]').select("1992");
   cy.get('select[id="user_dateofbirth_2i"]').select("March");
   cy.get('select[id="user_dateofbirth_3i"]').select("12");
   cy.get('input[id="user_licencetype_f"]').check();
   cy.get('select[id="user_licenceperiod"]').select("6");
   cy.get('select[id="user_occupation_id"]').select("Artist");
   cy.get('input[id="user_address_attributes_street"]').type("tkr colony");
   cy.get('input[id="user_address_attributes_city"]').type("Hyderabad");
   cy.get('input[id="user_address_attributes_county"]').type("India");
   cy.get('input[id="user_address_attributes_postcode"]').type("500097");
   cy.get('input[value="Update User"]').click();
})
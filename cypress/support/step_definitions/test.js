
/// <reference types="cypress" />


import { And, Given, Then } from "cypress-cucumber-preprocessor/steps"
import { pageObjects } from "../PO/pageObjects"


let credentials

before(() => {
    cy.fixture('user.json').then(data => (credentials = data));
});

Given('I navigate to the website', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
})


And('I enter the wrong credentials on Login section', () => {
    pageObjects.getTextFieldByID("email", credentials.failureCredentials.email)
    pageObjects.getTextFieldByID("password", credentials.failureCredentials.password)
    pageObjects.getTextFieldByName("submit");
})

Then('I validate the error validation', () => {
    pageObjects.getBytext("Enter your Email address and password correct");
})

And('I enter the proper credentials on Login section', () => {
    pageObjects.getTextFieldByID("email", credentials.SuccessCredentials.email)
    pageObjects.getTextFieldByID("password", credentials.SuccessCredentials.password);
    pageObjects.getTextFieldByName("submit");
})

Then('I validate the success navigation', () => {
    pageObjects.getBytext("Broker Insurance WebPage");
    pageObjects.includeUrl('/header.php')
})

When('I validate and enter the data on Request page', () => {
    cy.requestQuotation()
})

Then('I validate the success message for request Quation', () => {
    pageObjects.includeUrl('/new_quotation.php');
    pageObjects.getBytext('You have saved this quotation!');
})

When('I validate and enter the quotation id', () => {
    cy.enterQuotationId();
})

Then('I validate the data of existing requested customer', () => {
    cy.validateExistingRequestedUsaerdata();
})

Then('I validate the profile details which user need to enter', () => {
    cy.profileDetails();
})

Then('I edit the profile details', () => {
    cy.EditProfileDetails();
})

When('I click on Logout button', () => {
    pageObjects.logout();
})

Then('I validate the Logout button functionality', () => {
   pageObjects.getBytext('Register');
})



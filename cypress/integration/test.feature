Feature:
    I wanted to validate the Quatation to registered Insurance customer

    Scenario: Login failure for Insurance customer
        Given I navigate to the website
        And I enter the wrong credentials on Login section
        Then I validate the error validation
    Scenario: Login success for Insurance customer
        Given I navigate to the website
        And I enter the proper credentials on Login section
        Then I validate the success navigation
    Scenario: Requesting a Quatation from a customer
        Given I navigate to the website
        And I enter the proper credentials on Login section
        When I validate and enter the data on Request page
        Then I validate the success message for request Quation
    Scenario: Retrieve a Quatation from a customer
        Given I navigate to the website
        And I enter the proper credentials on Login section
        When I validate and enter the quotation id
        Then I validate the data of existing requested customer
    Scenario: Validate the user profile details
        Given I navigate to the website
        And I enter the proper credentials on Login section
        Then I validate the profile details which user need to enter
    Scenario: Validate the user profile details
        Given I navigate to the website
        And I enter the proper credentials on Login section
        Then I edit the profile details
    Scenario: Logout from customer Profile
        Given I navigate to the website
        And I enter the proper credentials on Login section
        When I click on Logout button
        Then I validate the Logout button functionality
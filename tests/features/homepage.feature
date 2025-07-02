Feature: Test Home Page

  Scenario: Successful login and home page display
    Given the user is on the home page
    When the user enters login details
    Then the login should be successful
    And the home page should be displayed

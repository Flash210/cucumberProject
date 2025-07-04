Feature: Practice Form Submission

Scenario: Form submission with valid data
  Given I navigate to the practice form
  When I fill in the form with:
    | firstName | John    |
    | lastName  | Doe     |
    | gender    | Male    |
    | mobile    | 1234567890 |
  And I submit the form
  Then I should see a success modal with the submitted information

Scenario: Form submission with missing mandatory fields
  Given I navigate to the practice form
  When I fill in the form with:
    | firstName |         |
    | lastName  |         |
    | gender    |         |
    | mobile    |         |
  And I submit the form
  Then I should see validation errors for the missing fields
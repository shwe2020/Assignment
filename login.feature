Feature: performing login

Background: 
    Given I am on the login page

Scenario: login with user credential
    When I login with default user
    Then I should see a homepage

   
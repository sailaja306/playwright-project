
Feature: Validate Login Functionality

@smoke
Scenario: User login with valid credentials
Given I open the SauceDemo
When I enter username
When I enter password
And I click on login button
Then I should see Dashboard Page

@sanity #AMA-7665 - jira ticket
Scenario: User login with invalid credentials
Given I open the SauceDemo
When I enter username
When I enter password
And I click on login button
Then I should handle error

@reg
Scenario Outline: Multi set of datas
Given I open the URL
When I enter "<username>" and "<password>"
And I click on login button
Then I should handle error or dashboard

Examples:
    | username       | password      | 
    | standard_user  | secret_sauce  | 
    |locked_out_user | secret_sauce  |
    |wrong username  | wrong password|





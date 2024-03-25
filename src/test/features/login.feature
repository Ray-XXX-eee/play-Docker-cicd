Feature: Landing Page
Test major features for landing page of Liaison Group's website

  Scenario: Test Header section
    Given user navigates to the website
    When checks all header hyperlink options
    When check all hover options

  Scenario: Test Search section
    Given user navigates to the website
    When check resent search
    Then check actual search
    When check popular search
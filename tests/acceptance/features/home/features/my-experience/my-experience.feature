@home-page
@my-experience

Feature: ✨ Home Page - My Experience Section

  Scenario: 📽️ My Experience Section is displayed with correct heading
    Given the user is on home page
    Then the heading with name "Expérience professionnelle" should be visible

  Scenario: 📽️ My Experience Section displays all experiences
    Given the user is on home page
    And the user scrolls to the region with exact name "Expérience professionnelle"
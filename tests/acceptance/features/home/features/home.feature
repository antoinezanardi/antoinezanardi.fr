@home-page

Feature: 🏡 Home Page

  Scenario: 🏡 Home Page is displayed with correct headings
    Given the user is on home page
    Then the heading with exact name "Antoine Zanardi" should be visible
    And the heading with exact name "Consultant Tech Lead" should be visible
    And the heading with exact name "Expert Web FullStack" should be visible
    And the link with exact name "Mon CV" should be visible
    And the page creates the missing snapshot with name "Home Page"

  Scenario: 🏡 Home Page has correct SEO tags
    Given the user is on home page
    Then the page should have head title "Antoine ZANARDI" and meta tags
      | name        | content                                                                                                        |
      | description | Portfolio d'Antoine ZANARDI, expert informatique spécialisé dans le web regroupant CV, projets et compétences. |
      | viewport    | width=device-width, initial-scale=1                                                                            |

  Scenario: 🏡 Home Page doesn't have any accessibility issues
    Given the user is on home page
    Then the page should not contain accessibility issues in desktop mode
    And the page should not contain accessibility issues in mobile mode
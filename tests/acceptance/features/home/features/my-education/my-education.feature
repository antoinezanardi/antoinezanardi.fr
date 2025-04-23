@home-page
@my-education

  Feature: 🎓️ Home Page - My Education Section

    Scenario: 🎓️ My Education Section is displayed with correct heading
      Given the user is on home page
      Then the heading with name "Formation & Certifications" should be visible

    Scenario: 🎓️ My Education Section displays all diplomas
      Given the user is on home page
      And the user scrolls to the region with exact name "Formation & Certifications"

      Then the nested heading with exact name "EPITECH" under the region with name "1 - EPITECH" should be visible
      And the nested img with exact name "EPITECH" under the region with name "1 - EPITECH" should be visible
      And the nested region with exact name "Période : septembre 2015 à septembre 2020" under the region with name "1 - EPITECH" should be visible
      And the nested text "Diplôme d'Expert en Informatique et Système d'Information" under the region with name "1 - EPITECH" should be visible
      And the nested text "Majeure en développement web et mobile" under the region with name "1 - EPITECH" should be visible
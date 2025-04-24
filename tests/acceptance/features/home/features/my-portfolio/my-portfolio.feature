@home-page
@my-portfolio

Feature: 📽️ Home Page - My Portfolio Section

  Scenario: 📽️ My Portfolio Section is displayed with correct heading
    Given the user is on home page
    Then the heading with name "Portfolio" should be visible

  Scenario: 📽️ My Portfolio Section displays all projects with correct links
    Given the user is on home page
    And the user scrolls to the region with exact name "Portfolio"
    Then the link with exact name "Mon portfolio Présentation de mon travail" should be visible
    And the link with exact name "Assistant Loups-Garous L'outil idéal pour le maître du jeu des Loups-Garous de Thiercelieux™" should be visible
    And the link with exact name "Boutique de livres Boutique en ligne de distribution de livres" should be visible
    And the link with exact name "Découvrez mes autres projets Et n'hésitez pas à me suivre sur GitHub !" should be visible
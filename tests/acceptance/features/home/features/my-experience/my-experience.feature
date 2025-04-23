@home-page
@my-experience

Feature: ✨ Home Page - My Experience Section

  Scenario: ✨ My Experience Section is displayed with correct heading
    Given the user is on home page
    Then the heading with name "Expérience professionnelle" should be visible

  Scenario: ✨ My Experience Section displays all experiences
    Given the user is on home page
    And the user scrolls to the region with exact name "Expérience professionnelle"

    Then the nested heading with exact name "Consultant Tech Lead Web Full-Stack" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested img with exact name "Daveo" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested region with exact name "Période : avril 2022 à aujourd'hui" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested text "Après avoir fait mes armes chez SoBook dans les technologies du web" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested text "Le consulting chez ces grands groupes comme Norauto," under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested text "Mes missions se résument en trois points majeurs" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested text "En parallèle, Daveo m’offre la possibilité de passer des certifications dans le Cloud Product Management" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible
    And the nested text "J'organise régulièrement des conférences et des workshops" under the region with name "1 - Consultant Tech Lead Web Full-Stack" should be visible

    And the nested heading with exact name "Ingénieur Recherche & Développement Informatique" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested img with exact name "OhMyCode" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested region with exact name "Période : septembre 2019 à mars 2022" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested exact text "( 2 ans et 7 mois )" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested text "Suite logique après mes nombreux stages dans la société" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested text "En tant que chef de projet" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested text "Je priorise de même les débuts d'un projet" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible
    And the nested text "En tant que développeur" under the region with name "2 - Ingénieur Recherche & Développement Informatique" should be visible

    And the nested heading with exact name "Stagiaire Développeur Web Full-Stack" under the region with name "3 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested img with exact name "OhMyCode" under the region with name "3 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested region with exact name "Période : septembre 2018 à août 2019" under the region with name "3 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested exact text "( 1 an )" under the region with name "3 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested text "Durant ce stage d’un an, la société m’a confié la responsabilité de grands projets comme la réalisation d’une boutique de distribution de livres à l’international. J’ai réalisé ces projets de bout en bout et en équipe" under the region with name "3 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested text "Ce stage de fin d’études a permis de valider mes compétences d’expert informatique auprès de la société, l’EPITECH et moi-même." under the region with name "3 - Stagiaire Développeur Web Full-Stack" should be visible

    And the nested heading with exact name "Stagiaire Développeur Web Full-Stack" under the region with name "4 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested img with exact name "OhMyCode" under the region with name "4 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested region with exact name "Période : septembre 2016 à avril 2017" under the region with name "4 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested exact text "( 8 mois )" under the region with name "4 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested text "Première expérience dans la toute nouvelle branche informatique de SoBook" under the region with name "4 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested text "Toutes ces fonctionnalités se regroupent dans une seule et même application web." under the region with name "4 - Stagiaire Développeur Web Full-Stack" should be visible

    And the nested heading with exact name "Auto-Entrepreneur Développeur Web Full-Stack" under the region with name "5 - Auto-Entrepreneur Développeur Web Full-Stack" should be visible
    And the nested img with exact name "SoBook" under the region with name "5 - Auto-Entrepreneur Développeur Web Full-Stack" should be visible
    And the nested region with exact name "Période : février 2016 à août 2016" under the region with name "5 - Auto-Entrepreneur Développeur Web Full-Stack" should be visible
    And the nested exact text "( 7 mois )" under the region with name "5 - Auto-Entrepreneur Développeur Web Full-Stack" should be visible
    And the nested text "Ma première mission chez SoBook ayant été enrichissante" under the region with name "5 - Auto-Entrepreneur Développeur Web Full-Stack" should be visible
    And the nested text "Mes responsabilités se sont vite multipliées :" under the region with name "5 - Auto-Entrepreneur Développeur Web Full-Stack" should be visible

    And the nested heading with exact name "Stagiaire Développeur Web Full-Stack" under the region with name "6 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested img with exact name "SoBook" under the region with name "6 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested region with exact name "Période : juillet 2015 à décembre 2015" under the region with name "6 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested exact text "( 6 mois )" under the region with name "6 - Stagiaire Développeur Web Full-Stack" should be visible
    And the nested text "Durant mon tout premier stage en tant que développeur web, j'ai eu la responsabilité de développer" under the region with name "6 - Stagiaire Développeur Web Full-Stack" should be visible
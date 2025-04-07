@home-page
@about-me

Feature: 👤 Home Page - About Me Section

  Scenario: 👤 About Me Section is displayed with correct headings
    Given the user is on home page
    Then the heading with name "Qui suis-je ?" should be visible
    And the heading with name "Informations personnelles" should be visible

  Scenario: 👤 About Me Section has some paragraphs about me
    Given the user is on home page
    Then the exact text "Hello 👋 ! Je suis Antoine Zanardi et bienvenue sur mon profil. Je suis expert informatique spécialisé dans le web et passionné par les nouvelles technologies, la robotique, l'intelligence artificielle et les innovations en tout genre." should be visible
    And the exact text "Mes diplômes acquis pendant mon cursus scolaire couplés à mon parcours professionnel me permettent d'avoir un esprit d'équipe fort ainsi que des compétences techniques et managériales avancées." should be visible
    And the exact text "Ma passion et mon perfectionnisme me poussent à aller au bout de mes projets en y apportant ma rigueur et mon savoir pour les terminer dans les temps et dans la qualité attendue. Ma veille technologique me permet d'être à la page sur les nouveautés du web et de les appliquer dans mes projets." should be visible

#  Scenario: 👤 About My Personal Info Section displays contact data
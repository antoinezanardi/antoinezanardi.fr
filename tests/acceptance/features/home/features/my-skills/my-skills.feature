@home-page
@my-skills

Feature: 🛠️ Home Page - My Skills Section

  Scenario: 🛠 My Skills Section is displayed with correct heading
    Given the user is on home page
    Then the heading with name "Compétences techniques" should be visible

  Scenario: 🛠 My Skills Section displays all skills with progress bars
    Given the user is on home page
    And the user scrolls to the region with exact name "Compétences techniques"
    Then the progressbar with exact name "Je maîtrise la technologie HTML à 95%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie CSS à 90%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie JavaScript à 95%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie TypeScript à 85%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie Vue 3 à 95%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie Nuxt 3 à 90%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie MySQL à 85%" should be visible
    And the progressbar with exact name "Je maîtrise la technologie MongoDB à 90%" should be visible

  Scenario: 🛠 My Skills Section displays all tools used
    Given the user is on home page
    And the user scrolls to the region with exact name "Compétences techniques"
    Then the heading with name "Mes outils" should be visible
    And the exact text "(Survolez ou cliquez sur les icônes pour plus de détails)" should be visible
    And the img with exact name "Je déploie mes travaux web sur des serveurs sous Linux (Debian). Je m'occupe moi-même de la configuration de l'hébergement des applications sur le serveur grâce à une CI/CD robuste." should be visible
    And the img with exact name "J'organise mes applications Web en micro-services : les API(s) communiquent avec l'interface pour la servir à chaque demande des utilisateurs. Tout est séparé en galaxie de services." should be visible
    And the img with exact name "J'utilise Git pour le version control de mes projets." should be visible
    And the img with exact name "Pour tous mes projets, je mets en place plusieurs environnements (une production couplée à une pré-production au minimum) grâce au système de branches de Git et des flows séparés de CI/CD." should be visible
    And the img with exact name "Je travaille sur GitHub et utilise GitHub Actions comme outil de CI/CD pour tester le code et déployer les productions, tout cela de manière automatisée et sécurisée." should be visible
    And the img with exact name "NodeJS est un environnement indispensable pour tous mes projets en Typescript. Je l'utilise à la fois pour mes APIs et mes interfaces web." should be visible
    And the img with exact name "Je maîtrise plusieurs frameworks de design comme Bootstrap, MaterializeCSS ou encore Font Awesome pour parfaire mes interfaces." should be visible
    And the img with exact name "J'utilise le framework VueJS 3 couplé à NuxtJS 3 pour construire l'interface web de mes projets, allant de simples sites vitrines à des backoffices complets et ergonomiques." should be visible
    And the img with exact name "Je soutiens l'open-source en intégrant des modules NPM à mes projets. Je suis leurs prochaines releases sur GitHub." should be visible
    And the img with exact name "Mon code est soumis à une norme stricte (W3School pour HTML et ESLint pour JS / TS / Vue) afin qu'il reste maintenable, homogène et lisible." should be visible
    And the img with exact name "Je m'efforce d'écrire le maximum de tests unitaires et E2E sur mes projets afin de prouver leur robustesse." should be visible
    And the img with exact name "Je déploie mes applications dans des conteneurs Docker pour garantir une portabilité et une sécurité maximale." should be visible
    And the img with exact name "Je suis un ferveur défenseur de l'open-source et je contribue régulièrement à des projets qui me tiennent à coeur." should be visible

    When the user clicks on the img with exact name "Je déploie mes travaux web sur des serveurs sous Linux (Debian). Je m'occupe moi-même de la configuration de l'hébergement des applications sur le serveur grâce à une CI/CD robuste."
    Then the tooltip with text "Je déploie mes travaux web sur des serveurs sous Linux (Debian). Je m'occupe moi-même de la configuration de l'hébergement des applications sur le serveur grâce à une CI/CD robuste." should be visible

    When the user hovers the img with exact name "J'organise mes applications Web en micro-services : les API(s) communiquent avec l'interface pour la servir à chaque demande des utilisateurs. Tout est séparé en galaxie de services."
    Then the tooltip with text "J'organise mes applications Web en micro-services : les API(s) communiquent avec l'interface pour la servir à chaque demande des utilisateurs. Tout est séparé en galaxie de services." should be visible

    When the user hovers the img with exact name "J'utilise Git pour le version control de mes projets."
    Then the tooltip with text "J'utilise Git pour le version control de mes projets." should be visible

    When the user hovers the img with exact name "Pour tous mes projets, je mets en place plusieurs environnements (une production couplée à une pré-production au minimum) grâce au système de branches de Git et des flows séparés de CI/CD."
    Then the tooltip with text "Pour tous mes projets, je mets en place plusieurs environnements (une production couplée à une pré-production au minimum) grâce au système de branches de Git et des flows séparés de CI/CD." should be visible

    When the user hovers the img with exact name "Je travaille sur GitHub et utilise GitHub Actions comme outil de CI/CD pour tester le code et déployer les productions, tout cela de manière automatisée et sécurisée."
    Then the tooltip with text "Je travaille sur GitHub et utilise GitHub Actions comme outil de CI/CD pour tester le code et déployer les productions, tout cela de manière automatisée et sécurisée." should be visible

    When the user hovers the img with exact name "NodeJS est un environnement indispensable pour tous mes projets en Typescript. Je l'utilise à la fois pour mes APIs et mes interfaces web."
    Then the tooltip with text "NodeJS est un environnement indispensable pour tous mes projets en Typescript. Je l'utilise à la fois pour mes APIs et mes interfaces web." should be visible

    When the user hovers the img with exact name "Je soutiens l'open-source en intégrant des modules NPM à mes projets. Je suis leurs prochaines releases sur GitHub."
    Then the tooltip with text "Je soutiens l'open-source en intégrant des modules NPM à mes projets. Je suis leurs prochaines releases sur GitHub." should be visible

    When the user hovers the img with exact name "Mon code est soumis à une norme stricte (W3School pour HTML et ESLint pour JS / TS / Vue) afin qu'il reste maintenable, homogène et lisible."
    Then the tooltip with text "Mon code est soumis à une norme stricte (W3School pour HTML et ESLint pour JS / TS / Vue) afin qu'il reste maintenable, homogène et lisible." should be visible

    When the user hovers the img with exact name "Je m'efforce d'écrire le maximum de tests unitaires et E2E sur mes projets afin de prouver leur robustesse."
    Then the tooltip with text "Je m'efforce d'écrire le maximum de tests unitaires et E2E sur mes projets afin de prouver leur robustesse." should be visible

    When the user hovers the img with exact name "Je déploie mes applications dans des conteneurs Docker pour garantir une portabilité et une sécurité maximale."
    Then the tooltip with text "Je déploie mes applications dans des conteneurs Docker pour garantir une portabilité et une sécurité maximale." should be visible

    When the user hovers the img with exact name "Je suis un ferveur défenseur de l'open-source et je contribue régulièrement à des projets qui me tiennent à coeur."
    Then the tooltip with text "Je suis un ferveur défenseur de l'open-source et je contribue régulièrement à des projets qui me tiennent à coeur." should be visible
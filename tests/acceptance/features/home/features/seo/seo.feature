@home-page
@seo

Feature: 🏡 Home Page SEO

  Scenario: 🏡 Home Page has correct SEO tags
    Given the user is on home page
    Then the page should have head title "Antoine ZANARDI" and meta tags
      | name        | content                                                                                                        |
      | description | Portfolio d'Antoine ZANARDI, expert informatique spécialisé dans le web regroupant CV, projets et compétences. |
      | viewport    | width=device-width, initial-scale=1                                                                            |
      | robots      | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1                                   |

  Scenario: 🏡 Home Page provides robots.txt
    Given the user is on /robots.txt page
    Then the text "User-agent: *" should be visible
    And the text "Disallow:" should be visible
    And the text "Sitemap: https://test.antoinezanardi.fr/sitemap.xml" should be visible

  Scenario: 🏡 Home Page provides sitemap.xml
    Given the user is on /sitemap.xml page
    Then the exact text "XML Sitemap" should be visible
    And the text "Antoine ZANARDI - Portfolio Test" should be visible
    And the text "This XML Sitemap contains 1 URLs" should be visible
    And the text "https://test.antoinezanardi.fr/" should be visible
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
@home-page
@my-education

  Feature: 🎓️ Home Page - My Education Section

    Scenario: 🎓️ My Education Section is displayed with correct heading
      Given the user is on home page
      Then the heading with name "Formation & Certifications" should be visible

    Scenario: 🎓️ My Education Section displays all diplomas
      Given the user is on home page
      And the user scrolls to the region with exact name "Formation & Certifications"

      Then the nested heading with exact name "Google Associate Cloud Engineer (ACE)" under the region with name "1 - Google Associate Cloud Engineer (ACE)" should be visible
      And the nested img with exact name "Google" under the region with name "1 - Google Associate Cloud Engineer (ACE)" should be visible
      And the nested region with exact name "Obtenu en 2022" under the region with name "1 - Google Associate Cloud Engineer (ACE)" should be visible
      And the nested text "Pour continuer mon apprentissage de l'univers du DevOps" under the region with name "1 - Google Associate Cloud Engineer (ACE)" should be visible

      And the nested heading with exact name "Certified Kubernetes Application Developer (CKAD)" under the region with name "2 - Certified Kubernetes Application Developer (CKAD)" should be visible
      And the nested img with exact name "Cloud Native Computing Foundation" under the region with name "2 - Certified Kubernetes Application Developer (CKAD)" should be visible
      And the nested region with exact name "Obtenu en 2022" under the region with name "2 - Certified Kubernetes Application Developer (CKAD)" should be visible
      And the nested text "Grâce à la certification CKAD, je peux conseiller mes clients" under the region with name "2 - Certified Kubernetes Application Developer (CKAD)" should be visible

      And the nested heading with exact name "Master en Informatique - Titre d'Expert" under the region with name "3 - Master en Informatique - Titre d'Expert" should be visible
      And the nested img with exact name "Epitech" under the region with name "3 - Master en Informatique - Titre d'Expert" should be visible
      And the nested region with exact name "Période : 2014 à 2019" under the region with name "3 - Master en Informatique - Titre d'Expert" should be visible
      And the nested exact text "( 5 ans )" under the region with name "3 - Master en Informatique - Titre d'Expert" should be visible
      And the nested text "Mes 3 premières années à Epitech m'ont permis de découvrir de nombreux langages de programmation" under the region with name "3 - Master en Informatique - Titre d'Expert" should be visible
      And the nested text "Durant mes 2 dernières années, j'ai travaillé sur mon projet de fin d'études" under the region with name "3 - Master en Informatique - Titre d'Expert" should be visible

      And the nested heading with exact name "Certificat en Technologies de l'Information (Double diplôme)" under the region with name "4 - Certificat en Technologies de l'Information (Double diplôme)" should be visible
      And the nested img with exact name "Université Laval" under the region with name "4 - Certificat en Technologies de l'Information (Double diplôme)" should be visible
      And the nested region with exact name "Période : 2017 à 2018" under the region with name "4 - Certificat en Technologies de l'Information (Double diplôme)" should be visible
      And the nested exact text "( 1 an )" under the region with name "4 - Certificat en Technologies de l'Information (Double diplôme)" should be visible
      And the nested text "Expérience internationale pour obtenir un certificat sur mesure en technologie de l'information" under the region with name "4 - Certificat en Technologies de l'Information (Double diplôme)" should be visible
      And the nested exact text "Ces études à l'étranger m'ont aussi permis d'élargir mes compétences de ma formation purement technique de l’EPITECH." under the region with name "4 - Certificat en Technologies de l'Information (Double diplôme)" should be visible

      And the nested heading with exact name "Baccalauréat Scientifique" under the region with name "5 - Baccalauréat Scientifique" should be visible
      And the nested img with exact name "Lycée du Vimeu" under the region with name "5 - Baccalauréat Scientifique" should be visible
      And the nested region with exact name "Période : 2011 à 2014" under the region with name "5 - Baccalauréat Scientifique" should be visible
      And the nested exact text "( 3 ans )" under the region with name "5 - Baccalauréat Scientifique" should be visible
      And the nested exact text "Obtention du BAC S, option européenne Anglais et mention Très Bien." under the region with name "5 - Baccalauréat Scientifique" should be visible
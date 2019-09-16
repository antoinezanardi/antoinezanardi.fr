<template>
  <div id="education" class="section">
    <div class="container cc-education">
      <div class="h4 text-center mb-4 title">
          <i class="fa fa-user-graduate mr-2"></i>
          Formation
      </div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
               data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>2014 - 2019</p>
              <div class="h5">Master en informatique</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Master en informatique</div>
              <p class="category">EPITECH, Lille</p>
              <p>Mes 3 première années à Epitech m'ont permis de découvrir de nombreux langages de
                  programmation: C, C++, PHP, JavaScript, Python, Java... Cette école m'a appris à gérer
                  un projet, manager une équipe et réaliser un travail atteignant les qualités attendues par un
                  client. Durant mes 2 dernières années, j'ai travaillé sur mon projet de fin d'études qui m'a
                  emmené au CES de Las Vegas 2017 pour le présenter en tant que grand projet d'aide aux
                  sans-abris.</p>
              <img class="firm-logo" alt="Logo EPITECH" :src="epitechLogo">
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
               data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>2017 - 2018</p>
              <div class="h5">Double diplôme</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Certificat en technologies de l'information</div>
              <p class="category">Université Laval, Québec</p>
              <p>Expérience internationale pour obtenir un certificat sur mesure en technologie de
                  l'information avec acquisition de compétences en marketing, gestion de projet et
                  comportement organisationnel. Ces études à l'étranger m'ont aussi permis d'élargir mes
                  compétences de ma formation purement technique de l’EPITECH.<br/>&nbsp;</p>
              <img class="firm-logo" alt="Logo Université Laval" :src="ulLogo">
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
               data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>2011 - 2014</p>
              <div class="h5">Baccalauréat</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Baccalauréat Scientifique</div>
              <p class="category">Lycée du Vimeu, Friville-Escarbotin</p>
              <p>Obtention du BAC S, option européenne Anglais et mention Très Bien.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import epitechLogo from "@/assets/images/epi-logo.png";
import ulLogo from "@/assets/images/ul-logo.png";

export default {
    name: "Education",
    data() {
        return {
            epitechLogo,
            ulLogo,
        };
    },
};
</script>

<style scoped>

</style>
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
                            <img class="white-logo school-logo mb-3" alt="Logo Epitech" :src="epitechLogo">
                            <div class="education-date">2019</div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="education-date">2014</div>
                            <div class="font-weight-bold mt-2">
                                ( 5 ans )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">Master en Informatique - Titre d'Expert</div>
                            <p class="category">EPITECH, Lille</p>
                            <p>
                                Mes 3 premières années à Epitech m'ont permis de découvrir de nombreux langages de
                                programmation: C, C++, PHP, JavaScript, Python, Java... Cette école m'a appris à gérer
                                un projet, manager une équipe et réaliser un travail atteignant les qualités attendues
                                par un client.
                            </p>
                            <p>
                                Durant mes 2 dernières années, j'ai travaillé sur mon projet de fin d'études qui m'a
                                emmené au CES de Las Vegas 2017 pour le présenter en tant que grand projet d'aide aux
                                sans-abris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-education-header">
                            <img class="school-logo mb-3" alt="Logo Epitech" :src="ulLogo">
                            <div class="education-date">2018</div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="education-date">2017</div>
                            <div class="font-weight-bold mt-2">
                                ( 1 an )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">Certificat en Technologies de l'Information (Double diplôme)</div>
                            <p class="category">Université Laval, Québec</p>
                            <p>
                                Expérience internationale pour obtenir un certificat sur mesure en technologie de
                                l'information avec acquisition de compétences en marketing, gestion de projet et
                                comportement organisationnel.
                            </p>
                            <p>
                                Ces études à l'étranger m'ont aussi permis d'élargir mes compétences de ma formation
                                purement technique de l’EPITECH.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body cc-education-header">
                            <div class="education-date">2014</div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="education-date">2011</div>
                            <div class="font-weight-bold mt-2">
                                ( 3 ans )
                            </div>
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
        return { epitechLogo, ulLogo };
    },
};
</script>

<style scoped>

.cc-education-header {
    padding-top: 25px !important;
}

@media (max-width: 768px) {
    .cc-education-header {
        padding-right: 1.25rem !important;
    }
}

.school-logo {
    max-width: 180px;
    max-height: 75px;
}

.education-date {
    font-size: 1rem;
}

</style>
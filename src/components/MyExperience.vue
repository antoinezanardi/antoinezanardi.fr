<template>
    <div id="experience" class="section">
        <div class="container cc-experience">
            <div class="h4 text-center mb-4 title">
                <i class="fa fa-tasks mr-2"/>
                Expérience Professionnelle
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <img class="white-logo company-logo mb-3" alt="Logo OhMyCode" :src="omcLogo"/>
                            <div class="experience-date">
                                Aujourd'hui
                            </div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="experience-date">
                                Septembre 2019
                            </div>
                            <div class="font-weight-bold mt-2">
                                ( {{ currentJobMonths }} mois )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">
                                Ingénieur Recherche & Développement Informatique
                            </div>
                            <p>
                                Suite logique après mes nombreux stages dans la société, j'ai décroché un CDI en sortant
                                de l'école et rejoint définitivement l'équipe en tant qu'ingénieur en R&D et développeur
                                Full Stack. Aujourd'hui, je possède de nombreuses casquettes : chef de projet,
                                développeur full-stack, maquetteur, testeur, reviewer... J'accompagne chacun de mes clients
                                avec mon expertise tout en les guidant sur la meilleure marche à suivre pour faire
                                évoluer au mieux leur(s) projet(s).
                            </p>
                            <p>
                                En tant que chef de projet, je privilégie mon équipe en entretenant leur cohésion et en
                                appliquant une répartition des tâches suivant les capacités et compétences de chacun, tout
                                en écoutant leurs besoins, techniques ou humains.<br/>
                                Je priorise de même les débuts d'un projet : une écoute attentive du besoin client,
                                une période suffisante de réflexion des flux et une gestion des risques complète sont
                                pour moi les points clefs pour démarrer correctement un projet. Les fondations doivent
                                être les plus solides possible.
                            </p>
                            <p>
                                En tant que développeur, j'applique mon expertise et ma technicité toutes deux apprises
                                durant mon cursus pour livrer des fonctionnalités robustes, ergonomiques et en phase
                                avec le besoin client. J'essaye sans cesse de remettre en question mes idées afin
                                d'évoluer et de ne pas m'enfermer dans ma zone de confort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <img class="white-logo company-logo mb-3" alt="Logo OhMyCode" :src="omcLogo"/>
                            <div class="experience-date">
                                Août 2019
                            </div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="experience-date">
                                Septembre 2018
                            </div>
                            <div class="font-weight-bold mt-2">
                                ( 12 mois )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">
                                Stagiaire Développeur Full-Stack
                            </div>
                            <p>
                                Durant ce stage d’un an, la société m’a confié la responsabilité de grands projets comme la
                                réalisation d’une boutique de distribution de livres à l’international.
                                J’ai réalisé ces projets de bout en bout et en équipe, en participant à l'élaboration de leur
                                cahier des charges, en planifiant les tâches à réaliser et bien évidemment, en développant
                                chacune des parties en m’assurant que le client final soit satisfait.
                            </p>
                            <p>
                                Ce stage de fin d’études a permis de valider mes compétences d’expert informatique auprès de la société,
                                l’EPITECH et moi-même.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <img class="white-logo company-logo mb-3" alt="Logo OhMyCode" :src="omcLogo"/>
                            <div class="experience-date">
                                Avril 2017
                            </div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="experience-date">
                                Septembre 2016
                            </div>
                            <div class="font-weight-bold mt-2">
                                ( 8 mois )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">
                                Stagiaire Développeur Full-Stack
                            </div>
                            <p>
                                Première expérience dans la toute nouvelle branche informatique de SoBook, ma
                                principale mission était de penser et développer un système de gestion de projets et de
                                clients, un système de résolution de tickets et un agenda inter-développeurs.
                            </p>
                            <p>
                                Toutes ces fonctionnalités se regroupent dans une seule et même application web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <img class="white-logo company-logo mb-3" alt="Logo SoBook" :src="sobookLogo"/>
                            <div class="experience-date">
                                Août 2016
                            </div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="experience-date">
                                Février 2016
                            </div>
                            <div class="font-weight-bold mt-2">
                                ( 7 mois )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">
                                Auto-Entrepreneur Développeur Web Full-Stack
                            </div>
                            <p>
                                Ma première expérience chez SoBook ayant été enrichissante, j'ai décidé de la réitérer
                                pendant 1 an en tant qu'auto-entrepreneur.
                            </p>
                            <p>
                                Mes responsabilités se sont vite multipliées : améliorer et maintenir mon module de
                                stocks, créer une interface de traduction, assister les autres développeurs dans leurs
                                projets et bien plus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <img class="white-logo company-logo mb-3" alt="Logo SoBook" :src="sobookLogo"/>
                            <div class="experience-date">
                                Décembre 2015
                            </div>
                            <i class="fa fa-arrow-up fa-2x my-1"/>
                            <div class="experience-date">
                                Juillet 2015
                            </div>
                            <div class="font-weight-bold mt-2">
                                ( 6 mois )
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">
                                Stagiaire Développeur Full-Stack
                            </div>
                            <p>
                                Durant mon tout premier stage en tant que développeur web, j'ai eu la responsabilité
                                de développer le module de stocks des livres produits par l'entreprise de A à Z. Par
                                la suite, j'ai maintenu ce module tout en apportant mon aide sur les autres projets
                                de l'équipe informatique.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sobookLogo from "@/assets/images/sobook-logo.png";
import omcLogo from "@/assets/images/omc-logo.png";

export default {
    name: "Experience",
    data() {
        return {
            sobookLogo,
            omcLogo,
        };
    },
    computed: {
        currentJobMonths() {
            const startingDate = new Date(2019, 9);
            const now = new Date();
            return now.getMonth() - startingDate.getMonth() + 12 * (now.getFullYear() - startingDate.getFullYear());
        },
    },
};
</script>

<style scoped>
.cc-experience-header {
    padding-top: 25px !important;
}

@media (max-width: 768px) {
    .cc-experience-header {
        padding-right: 1.25rem !important;
    }
}

.company-logo {
    max-width: 180px;
    max-height: 75px;
}

.experience-date {
    font-size: 1rem;
}
</style>
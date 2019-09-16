<template>
    <div class="section" id="experience">
        <div class="container cc-experience">
            <div class="h4 text-center mb-4 title">
                <i class="fa fa-tasks mr-2"></i>
                Expérience Professionnelle
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <p>Septembre 2018 - Août 2019</p>
                            <div class="h5">OhMyCode</div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">Stagiaire Développeur Full-Stack</div>
                            <p>Durant ce stage d’un an, la société m’a confié la responsabilité de grands projets comme la
                                réalisation d’une boutique de distribution de livres à l’international.
                                J’ai réalisé ces projets de bout en bout et en équipe, en participant à l'élaboration de leur
                                cahier des charges, en planifiant les tâches à réaliser et bien évidemment, en développant
                                chacune des parties en m’assurant que le client final soit satisfait. Ce stage de fin d’études
                                a permi de valider mes compétences d’expert informatique auprès de la société,
                                l’EPITECH et moi-même.</p>
                            <img class="firm-logo" alt="Logo OhMyCode" :src="omcLogo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <p>Avril 2017 - Juillet 2017</p>
                            <div class="h5">OhMyCode</div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">Stagiaire Développeur Full-Stack</div>
                            <p>Première expérience dans la toute nouvelle branche informatique de SoBook, ma
                                principale mission était de penser et développer un système de gestion de projets et de
                                clients, un système de résolution de tickets et un agenda inter-développeurs. Toutes ces
                                fonctionnalités se regroupent dans une seule et même application web.</p>
                            <img class="firm-logo" alt="Logo OhMyCode" :src="omcLogo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <p>Février 2016 - Mars 2017</p>
                            <div class="h5">SoBook</div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">Auto-Entrepreneur Développeur Web Full-Stack</div>
                            <p>Ma première expérience chez SoBook ayant été enrichissante, j'ai décidé de la réitérer
                                pendant 1 an en tant qu'auto-entrepreneur. Mes responsabilités se sont vite multipliées:
                                Améliorer et maintenir mon module de stocks, créer une interface de traduction, assister
                                les autres développeurs dans leurs projets et bien plus.</p>
                            <img class="firm-logo" alt="Logo SoBook" :src="sobookLogo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                         data-aos-duration="500">
                        <div class="card-body cc-experience-header">
                            <p>Août 2015 - Décembre 2015</p>
                            <div class="h5">SoBook</div>
                        </div>
                    </div>
                    <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div class="card-body">
                            <div class="h5">Stagiaire Développeur Full-Stack</div>
                            <p>Durant mon tout premier stage en tant que développeur web, j'ai eu la responsabilité
                                de développer le module de stocks des livres produits par l'entreprise de A à Z. Par
                                la suite, j'ai maintenu ce module tout en apportant mon aide sur les autres projets
                                de l'équipe informatique.</p>
                            <img class="firm-logo" alt="Logo SoBook" :src="sobookLogo">
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
};
</script>

<style scoped>

</style>
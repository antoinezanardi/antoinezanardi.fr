<template>
    <div class="section" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                    <div class="h4 text-center mb-4 title">
                        <i class="fa fa-star"/>
                        Portfolio
                    </div>
                </div>
            </div>
            <div class="tab-content gallery">
                <div class="tab-pane active" id="web-development">
                    <div class="ml-auto mr-auto">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <a target='_blank' href="https://www.antoinezanardi.fr">
                                        <figure class="cc-effect">
                                            <img :src="portfolioThumbnail" alt="Image"/>
                                            <figcaption>
                                                <div class="h4">Mon portfolio</div>
                                                <p class="project-desc">Présentation de mon travail</p>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <a target='_blank' href="https://werewolves-assistant.antoinezanardi.fr/">
                                        <figure class="cc-effect">
                                            <img :src="werewolvesAssistantThumbnail" alt="Image"/>
                                            <figcaption>
                                                <div class="h4">Assistant Loups-Garous</div>
                                                <p class="project-desc">
                                                    L'outil idéal pour le maître du jeu des Loups-Garous de Thiercelieux™
                                                </p>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <a target='_blank' href="https://www.airvey-editions.fr/">
                                        <figure class="cc-effect">
                                            <img :src="distributionThumbnail" alt="Image"/>
                                            <figcaption>
                                                <div class="h4">Boutique de livres</div>
                                                <p class="project-desc">Boutique en ligne de distribution de livres</p>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <a href="https://github.com/antoinezanardi" target="_blank">
                                        <figure class="cc-effect">
                                            <img :src="githubThumbnail" alt="Image"/>
                                            <figcaption>
                                                <div class="h4">Découvrez mes autres projets</div>
                                                <p>Et n'hésitez pas à me suivre sur GitHub !</p>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioThumbnail from "@/assets/images/portfolio-thumbnail.png";
import werewolvesAssistantThumbnail from "@/assets/images/werewolves-assistant-thumbnail.png";
import distributionThumbnail from "@/assets/images/distribution-thumbnail.png";
import githubThumbnail from "@/assets/images/github.jpg";

export default {
    name: "Portfolio",
    data() {
        return {
            portfolioThumbnail,
            githubThumbnail,
            distributionThumbnail,
            werewolvesAssistantThumbnail,
        };
    },
};
</script>

<style scoped>
.project-desc {
    text-shadow: 1px 1px 1px black;
}
</style>
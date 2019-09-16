<template>
    <div class="profile-page">
        <div class="wrapper">
            <div class="page-header page-header-small" data-fiter-color="green">
                <div class="page-header-image" data-parallax="true"
                     :style="{ 'background-image': `url(${profileBackground})` }"></div>
                <div class="container">
                    <div class="content-center">
                        <div class="cc-profile-image">
                            <a href="https://www.linkedin.com/in/antoinezanardi/" target="_blank">
                                <img :src="profilePic" alt="Image"/>
                            </a>
                        </div>
                        <div class="h2 title text-shadow">Antoine Zanardi</div>
                        <p class="category text-white text-shadow">Ingénieur Recherche & Développement informatique</p>
                        <p class="category text-white text-shadow">Expert Web Full-Stack</p>
                        <!--            <a class="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"-->
                        <!--               data-aos-anchor="data-aos-anchor" v-smooth-scroll="{ duration: 1000 }">Me contacter</a>-->
                        <a id="my-cv" class="btn btn-primary" href="CV.pdf" download="CV Antoine ZANARDI.pdf" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">
                            Mon CV
                        </a>
                    </div>
                </div>
                <div class="section">
                    <div class="container">
                        <div class="button-container">
                            <a class="btn btn-info btn-round btn-lg btn-icon mr-3" target="_blank"
                               href="https://www.linkedin.com/in/antoinezanardi/" data-toggle="tooltip"
                               title="Rejoignez mon réseau"><i class="fab fa-linkedin-in fa-2x fa-btn"></i></a>
                            <a class="btn btn-primary btn-round btn-lg btn-icon"
                               href="https://github.com/antoinezanardi" target="_blank" data-toggle="tooltip"
                               title="Découvrez mes projets"><i class="fab fa-github fa-2x fa-btn"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import profileBackground from "../assets/images/cc-bg-1.jpg";
import profilePic from "../assets/images/antoine.jpg";

export default {
    name: "Profile",
    data() {
        return {
            profileBackground,
            profilePic,
        };
    },
};
</script>

<style scoped>

    .title {
        margin-top: 5px !important;
        border-bottom: white solid 1px;
        margin-bottom: 35px;
        padding-bottom: 10px;
    }

    .text-shadow {
        text-shadow: #394036 1px 1px;
    }

    #my-cv {
        font-size: 1rem;
    }
</style>
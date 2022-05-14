<template>
    <div class="profile-page">
        <div class="wrapper">
            <div class="page-header page-header-small" data-fiter-color="green">
                <div class="page-header-image" data-parallax="true"/>
                <div class="container">
                    <div class="content-center">
                        <div class="cc-profile-image">
                            <a href="https://www.linkedin.com/in/antoinezanardi/" rel="noopener noreferrer"
                               target="_blank">
                                <img id="profile-pic" :src="profilePic" alt="Image"/>
                            </a>
                        </div>
                        <div class="h2 title text-shadow">
                            Antoine Zanardi
                        </div>
                        <p class="category text-white text-shadow">
                            Consultant en Informatique
                        </p>
                        <p class="category text-white text-shadow">
                            Expert Web FullStack
                        </p>
                        <a id="my-cv" class="btn btn-primary" href="CV.pdf" download="CV Antoine ZANARDI.pdf"
                           data-aos="zoom-in" data-aos-anchor="data-aos-anchor">
                            Mon CV
                        </a>
                    </div>
                </div>
                <div class="section">
                    <div class="container">
                        <div class="button-container">
                            <a class="btn btn-info btn-round btn-lg btn-icon mr-3" target="_blank"
                               rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/antoinezanardi/"
                               data-bs-toggle="tooltip"
                               title="Rejoignez mon réseau">
                                <i class="fab fa-linkedin-in fa-2x fa-btn"/>
                            </a>
                            <a class="btn btn-primary btn-round btn-lg btn-icon"
                               href="https://github.com/antoinezanardi" target="_blank" rel="noopener noreferrer"
                               data-bs-toggle="tooltip"
                               title="Découvrez mes projets">
                                <i class="fab fa-github fa-2x fa-btn"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import profilePic from "../assets/images/antoine.jpg";
</script>

<style scoped>
.title {
    margin-top: 5px !important;
    border-bottom: white solid 1px;
    margin-bottom: 35px;
    padding-bottom: 10px;
}

.page-header-image {
    background-image: url("../assets/images/cc-bg-1.jpg");
}

.text-shadow {
    text-shadow: #394036 1px 1px;
}

#my-cv {
    font-size: 1rem;
}
</style>
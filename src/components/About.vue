<template>
    <div class="section" ref="about" id="about">
        <div class="container">
            <div class="card" data-aos="fade-up" data-aos-offset="10">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="card-body">
                            <div class="h4 mt-0 title">
                                <i class="fa fa-user-circle mr-2"></i>
                                Qui suis-je?
                            </div>
                            <hr/>
                            <p>Hello 👋 ! Je suis <b>Antoine Zanardi</b> et bienvenue sur mon profil. Je suis <b>expert
                                informatique spécialisé
                                dans le web</b> et passionné par les nouvelles technologies, la robotique,
                                l'intelligence artificielle
                                et les innovations en tout genre.</p>
                            <p>Mes diplômes acquis pendant <b><a href="#education" v-smooth-scroll="{ duration: 1000 }">mon cursus scolaire</a></b>
                                couplés à <b><a href="#experience" v-smooth-scroll="{ duration: 1000 }">mon parcours professionnel</a></b>
                                me permettent d'avoir un <b>esprit d'équipe</b> fort ainsi que des compétences <b>techniques et managériales</b>
                                avancées.</p>
                            <p>Ma passion et mon perfectionnisme me poussent à aller au bout de mes projets en y
                                apportant <b>ma rigueur et mon savoir</b> pour les terminer dans les temps et dans
                                <b>la qualité attendue</b>. Ma veille technologique me permet d'être à la page sur les
                                nouveautés du web et de les appliquer dans mes projets.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="card-body">
                            <div class="h4 mt-0 title">
                                <i class="fa fa-id-card mr-2"></i>
                                Informations personnelles
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-4"><strong class="text-uppercase">Sexe:</strong></div>
                                <div id="sex" class="col-sm-8">Homme</div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
                                <div id="age" class="col-sm-8">{{ age }} ans</div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
                                <div class="col-sm-8">
                                    <b><a href="mailto:a.zanardi@sobook.fr">
                                        a.zanardi@sobook.fr
                                    </a></b>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-4"><strong class="text-uppercase">Téléphone:</strong></div>
                                <div class="col-sm-8">
                                    <b><a href="tel:0648920823">
                                        06 48 92 08 23
                                    </a></b>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-4"><strong class="text-uppercase">Adresse:</strong></div>
                                <div class="col-sm-8">96 rue Ratisbonne, Lille, France
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-4"><strong class="text-uppercase">Langues:</strong></div>
                                <div class="col-sm-8">Anglais et Français</div>
                            </div>
                            <div class="row mt-3 align-items-center">
                                <div class="col-sm-4"><strong class="text-uppercase">Permis:</strong></div>
                                <div class="col-sm-8">
                                    <i data-toggle="tooltip" title="Voiture" class="fa fa-car fa-2x mr-2"></i>
                                    <i data-toggle="tooltip" title="Bateau" class="fa fa-anchor fa-2x"></i>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-4"><strong class="text-uppercase">Travaille chez:</strong></div>
                                <div class="col-sm-8">OhMyCode (<b><a href="https://www.sobook.fr" target="_blank">SoBook</a></b>)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    computed: {
        age() {
            const birthday = new Date("1996-04-14");
            return new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970;
        },
    },
};
</script>

<style scoped>

</style>
<template>
  <div class="section" ref="about" id="about">
    <div class="container">
      <div class="card" data-aos="fade-up" data-aos-offset="10">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">Qui es-tu?</div>
              <p>Hello ! Je suis Antoine Zanardi et bienvenue sur mon profil. Vous recherchez un
                développeur web <b>capable de réaliser votre projet</b> hébergé en ligne ? Alors
                continuez à lire, vous êtes au bon endroit !</p>
              <p>Auto-entrepreneur et <b>spécialisé dans le web</b> depuis quelques années maintenant,
                je suis toujours à la recherche de nouveaux projets à réaliser. Vous êtes un
                particulier, une association ou même une entreprise, quelle que soit votre idée de
                projet, <b>elle m'intéresse</b> !</p>
              <p>Que ce soit une <b>application web, une API ou même un simple site web</b> comme
                celui où vous vous trouvez actuellement, je serai capable de transformer votre idée
                en <b>un projet abouti</b>.</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">Informations personnelles</div>
              <div class="row">
                <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
                <div id="age" class="col-sm-8"></div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
                <div class="col-sm-8">antoine.zanardi@epitech.eu</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Téléphone:</strong></div>
                <div class="col-sm-8">06 48 92 08 23</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Adresse:</strong></div>
                <div class="col-sm-8">13 rue du Chevalier La Barre, Friville-Escarbotin, France
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Langues:</strong></div>
                <div class="col-sm-8">Anglais et Français</div>
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
        name: "About"
    }
</script>

<style scoped>

</style>

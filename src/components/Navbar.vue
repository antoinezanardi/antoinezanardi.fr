<template>
  <header>
    <div class="profile-page sidebar-collapse">
      <nav class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" data-color-on-scroll="400">
        <div class="container">
          <div class="navbar-translate"><a class="navbar-brand" href="#" data-toggle="tooltip">Antoine Zanardi</a>
            <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navigation" aria-controls="navigation" aria-expanded="false"
                    aria-label="Toggle navigation"><span class="navbar-toggler-bar bar1"></span><span
              class="navbar-toggler-bar bar2"></span><span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link smooth-scroll" v-smooth-scroll="{duration: 1000}" href="#about">À propos de moi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" v-smooth-scroll="{duration: 1000}" href="#skill">Compétences</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" v-smooth-scroll="{duration: 1000}" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" v-smooth-scroll="{duration: 1000}" href="#experience">Expérience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" v-smooth-scroll="{duration: 1000}" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>

</style>

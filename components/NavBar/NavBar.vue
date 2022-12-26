<template>
  <header>
    <div class="profile-page sidebar-collapse">
      <nav class="navbar navbar-expand-lg fixed-top bg-primary" data-color-on-scroll="100">
        <div class="container">
          <div class="navbar-translate">
            <a class="navbar-brand text-uppercase" href="#" data-bs-toggle="tooltip" v-html="$t('shared.antoineZanardi')"/>
            <button
              class="navbar-toggler navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              :aria-expanded="false"
            >
              <span class="navbar-toggler-bar bar1"/>
              <span class="navbar-toggler-bar bar2"/>
              <span class="navbar-toggler-bar bar3"/>
            </button>
          </div>
          <div id="navigation" class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#about" v-html="$t('AboutMe.whoAmI')"/>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#skill" v-html="$t('MySkills.itSkills')"/>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#portfolio" v-html="$t('MyPortfolio.portfolio')"/>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#experience" v-html="$t('MyExperience.professionalExperience')"/>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#education" v-html="$t('MyEducation.education')"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
  .navbar {
    box-shadow: 0px -5px 20px 5px black;
    background-color: #2F7C36 !important;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
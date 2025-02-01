<template>
  <header>
    <div class="profile-page sidebar-collapse">
      <nav
        class="bg-primary fixed-top navbar navbar-expand-lg"
        data-color-on-scroll="100"
      >
        <div class="container">
          <div class="navbar-translate">
            <a
              class="navbar-brand text-uppercase"
              data-bs-toggle="tooltip"
              href="#"
            >
              {{ $t('shared.antoineZanardi') }}
            </a>

            <button
              aria-controls="navigation"
              :aria-expanded="false"
              class="navbar-toggler navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              type="button"
            >
              <span class="bar1 navbar-toggler-bar"/>

              <span class="bar2 navbar-toggler-bar"/>

              <span class="bar3 navbar-toggler-bar"/>
            </button>
          </div>

          <div
            id="navigation"
            class="collapse justify-content-end navbar-collapse"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#about"
                >
                  {{ $t('AboutMyProfile.whoAmI') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#skill"
                >
                  {{ $t('MySkills.itSkills') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#portfolio"
                >
                  {{ $t('MyPortfolio.portfolio') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#experience"
                >
                  {{ $t('MyExperience.professionalExperience') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#education"
                >
                  {{ $t('MyEducation.education') }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
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
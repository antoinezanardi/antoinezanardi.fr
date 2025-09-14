<template>
  <header>
    <div class="profile-page sidebar-collapse">
      <nav
        class="background-primary fixed-top navbar navbar-expand-lg"
        data-color-on-scroll="100"
      >
        <div class="container">
          <div class="navbar-translate">
            <a
              class="navbar-brand text-uppercase"
              href="#"
            >
              {{ $t('shared.antoineZanardi') }}
            </a>

            <button
              aria-controls="navigation"
              :aria-expanded="false"
              :aria-label="$t('NavBar.openNavigation')"
              class="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              type="button"
              @click="onClickFromNavBarToggler"
            >
              <span class="bar1 navbar-toggler-bar"/>

              <span class="bar2 navbar-toggler-bar"/>

              <span class="bar3 navbar-toggler-bar"/>
            </button>
          </div>

          <div
            id="navigation"
            class="collapse justify-content-end navbar-collapse"
            :class="{ 'show': !isMobileNavBarCollapsed }"
          >
            <ul class="navbar-nav w-100">
              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#about"
                  @click="onClickFromNavBarLink"
                >
                  {{ $t('AboutMyProfile.whoAmI') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#skills"
                  @click="onClickFromNavBarLink"
                >
                  {{ $t('MySkills.itSkills') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#portfolio"
                  @click="onClickFromNavBarLink"
                >
                  {{ $t('MyPortfolio.portfolio') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#experience"
                  @click="onClickFromNavBarLink"
                >
                  {{ $t('MyExperience.professionalExperience') }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link smooth-scroll"
                  href="#education"
                  @click="onClickFromNavBarLink"
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

<script lang="ts" setup>
const isMobileNavBarCollapsed = ref<boolean>(true);

function onClickFromNavBarToggler(): void {
  isMobileNavBarCollapsed.value = !isMobileNavBarCollapsed.value;
}

function onClickFromNavBarLink(): void {
  isMobileNavBarCollapsed.value = true;
}
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0px -5px 20px 5px black;

  #navigation.show {
    transform: unset;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .navbar-toggler {
    border: 0;
  }
}
</style>
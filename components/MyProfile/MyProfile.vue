<template>
  <div class="profile-page">
    <div class="wrapper">
      <div class="page-header page-header-small" data-fiter-color="green">
        <div class="page-header-image" data-parallax="true"/>
        <div class="container">
          <div class="content-center">
            <div class="cc-profile-image">
              <a
                href="https://www.linkedin.com/in/antoinezanardi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img id="profile-pic" src="~/assets/images/antoine.png" :alt="$t('MyProfile.profilePicture')"/>
              </a>
            </div>
            <div class="h2 title text-shadow" v-html="$t('shared.antoineZanardi')"/>
            <p class="category text-white text-shadow mb-1" v-html="$t('MyProfile.itConsultant')"/>
            <p class="category text-white text-shadow" v-html="$t('MyProfile.fullStackWebExpert')"/>
            <a
              id="my-cv"
              class="btn btn-primary"
              href="/CV.pdf"
              :download="`${$t('MyProfile.cv')} Antoine ZANARDI.pdf`"
              data-aos="zoom-in"
              data-aos-anchor="data-aos-anchor"
              v-html="$t('MyProfile.myCv')"
            />
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="button-container">
              <LinkedInButton class="me-2"/>
              <GitHubButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GitHubButton from "~/components/shared/Buttons/GitHubButton.vue";
import LinkedInButton from "~/components/shared/Buttons/LinkedInButton.vue";
</script>

<style lang="scss" scoped>
.title {
  margin-top: 5px !important;
  border-bottom: white solid 1px;
  margin-bottom: 35px;
  padding-bottom: 10px;
  font-size: 2.25rem;
  font-weight: bolder;
}

.category {
  font-size: 1rem;
}

.page-header-image {
  background-image: url("../../assets/images/background.png");
}
.text-shadow {
  text-shadow: #394036 1px 1px;
}
#my-cv {
  font-size: 1.25rem;
}
</style>
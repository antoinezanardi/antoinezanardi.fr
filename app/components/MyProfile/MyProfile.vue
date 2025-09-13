<template>
  <div class="profile-page">
    <div class="wrapper">
      <div
        class="page-header page-header-small"
        data-fiter-color="green"
      >
        <div
          class="page-header-image"
          data-parallax="true"
        />

        <div class="container">
          <div class="content-center">
            <div class="cc-profile-image">
              <a
                href="https://www.linkedin.com/in/antoinezanardi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <NuxtImg
                  id="profile-pic"
                  :alt="$t('MyProfile.profilePicture')"
                  size="180x180"
                  src="/images/antoine.webp"
                />
              </a>
            </div>

            <h1
              class="h1 text-shadow title"
            >
              {{ $t('shared.antoineZanardi') }}
            </h1>

            <h2
              class="category mb-3 text-shadow text-white"
            >
              {{ $t('MyProfile.itConsultant') }}
            </h2>

            <h2
              class="category mb-3 text-shadow text-white"
            >
              {{ $t('MyProfile.fullStackWebExpert') }}
            </h2>

            <a
              id="my-cv"
              class="btn btn-primary"
              data-aos="zoom-in"
              data-aos-anchor="data-aos-anchor"
              :download="`${$t('MyProfile.cv')} Antoine ZANARDI.pdf`"
              href="/CV.pdf"
              role="button"
            >
              {{ $t('MyProfile.myCv') }}
            </a>
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
  background-image: url("../../assets/images/background.webp");
}
.text-shadow {
  text-shadow: #394036 1px 1px;
}
#my-cv {
  font-size: 1.25rem;
}
</style>
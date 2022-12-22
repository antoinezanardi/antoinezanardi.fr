<template>
  <div id="about" class="section">
    <div class="container">
      <div class="card" data-aos="fade-up" data-aos-offset="10">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h3 mt-0 title">
                <WrappedFontAwesomeIcon icon="fa-user-circle" classes="me-2"/>
                <span v-html="$t('AboutMe.whoAmI')"/>
              </div>
              <hr/>
              <p v-html="$t('AboutMe.welcomeOnMyProfile', { emoji: '👋' })"/>
              <p>
                <span v-html="$t('AboutMe.myDiplomas')"/>
                <a href="#education" class="mx-1" v-html="$t('AboutMe.myEducation')"/>
                <span v-html="$t('AboutMe.bindWith')"/>
                <a href="#experience" class="mx-1" v-html="$t('AboutMe.myExperience')"/>
                <span v-html="$t('AboutMe.giveMeManagementAndTechnicalSkills')"/>
              </p>
              <p v-html="`${$t('AboutMe.myPassionAndPerfectionism')} ${$t('AboutMe.myTechnologyWatch')}`"/>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h3 mt-0 title">
                <WrappedFontAwesomeIcon icon="fa-id-card" classes="me-2"/>
                <span v-html="$t('AboutMe.personalInfo')"/>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.genre')} :`"/>
                </div>
                <div id="genre" class="col-sm-8" v-html="$t('AboutMe.male')"/>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.age')} :`"/>
                </div>
                <div id="age" class="col-sm-8" v-html="$t('AboutMe.yearsOld', { age })"/>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.email')} :`"/>
                </div>
                <div class="col-sm-8">
                  <b>
                    <a :href="`mailto:${config.public.email}`" v-html="config.public.email"/>
                  </b>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.phone')} :`"/>
                </div>
                <div class="col-sm-8">
                  <b>
                    <a :href="`tel:${config.public.phoneNumber}`" v-html="formattedPhoneNumber"/>
                  </b>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.address')} :`"/>
                </div>
                <div class="col-sm-8" v-html="config.public.address"/>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.languages')} :`"/>
                </div>
                <div class="col-sm-8" v-html="$t('AboutMe.englishAndFrench')"/>
              </div>
              <div class="row mt-3 align-items-center">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.licenses')} :`"/>
                </div>
                <div class="col-sm-8 d-flex">
                  <WrappedFontAwesomeIcon data-bs-toggle="tooltip" :title="$t('AboutMe.car')" class="me-2" icon="fa-car" size="2x"/>
                  <WrappedFontAwesomeIcon data-bs-toggle="tooltip" :title="$t('AboutMe.boat')" class="me-2" icon="fa-anchor" size="2x"/>
                </div>
              </div>
              <div class="row align-items-center mt-3">
                <div class="col-sm-4">
                  <b class="text-uppercase" v-html="`${$t('AboutMe.workingAt')} :`"/>
                </div>
                <div class="col-sm-8">
                  <a href="https://www.daveo.fr/" target="_blank" rel="noopener noreferrer">
                    <img class="daveo-logo" src="~/public/images/logos/daveo-logo.png" :alt="COMPANY_NAMES.DAVEO"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useRuntimeConfig } from "#imports";
import WrappedFontAwesomeIcon from "~/components/shared/WrappedFontAwesomeIcon.vue";
import { COMPANY_NAMES } from "~/models/Company";

const config = useRuntimeConfig();
const age = computed<number>(() => {
  const birthday = new Date("1996-04-14");
  const epochYear = 1970;
  return new Date(Date.now() - birthday.getTime()).getUTCFullYear() - epochYear;
});
const formattedPhoneNumber = computed<string>(() => {
  const matches = config.public.phoneNumber.match(/.{2}/gu);
  return matches ? matches.join(" ") : "?";
});
</script>

<style lang="scss">
.daveo-logo {
  margin-left: -5px;
  width: 150px;
}
</style>
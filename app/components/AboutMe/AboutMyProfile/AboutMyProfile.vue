<template>
  <div>
    <div class="card-body">
      <h3 class="h3 mb-2 mt-0 title">
        <WrappedFontAwesomeIcon
          classes="me-2"
          icon="fa-user-circle"
        />

        <span>
          {{ $t('AboutMyProfile.whoAmI') }}
        </span>
      </h3>

      <hr>

      <p v-html="$t('AboutMyProfile.welcomeOnMyProfile', { 'emoji': '👋' })"/>

      <p>
        <span v-html="$t('AboutMyProfile.myDiplomas')"/>

        <span>&nbsp;</span>

        <a
          href="#education"
        >
          {{ $t('AboutMyProfile.myEducation') }}
        </a>

        <span>&nbsp;</span>

        <span v-html="$t('AboutMyProfile.bindWith')"/>

        <span>&nbsp;</span>

        <a
          href="#experience"
        >
          {{ $t('AboutMyProfile.myExperience') }}
        </a>

        <span>&nbsp;</span>

        <span v-html="$t('AboutMyProfile.giveMeManagementAndTechnicalSkills')"/>
      </p>

      <p v-html="`${$t('AboutMyProfile.myPassionAndPerfectionism')} ${$t('AboutMyProfile.myTechnologyWatch')}`"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
</script>
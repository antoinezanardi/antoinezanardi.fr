<template>
  <div>
    <div class="card-body">
      <div class="h3 mt-0 title">
        <WrappedFontAwesomeIcon
          classes="me-2"
          icon="fa-user-circle"
        />

        <span>
          {{ $t('AboutMyProfile.whoAmI') }}
        </span>
      </div>

      <hr>

      <p v-html="$t('AboutMyProfile.welcomeOnMyProfile', { 'emoji': '👋' })"/>

      <p>
        <span v-html="$t('AboutMyProfile.myDiplomas')"/>

        <a
          class="mx-1"
          href="#education"
        >
          {{ $t('AboutMyProfile.myEducation') }}
        </a>

        <span v-html="$t('AboutMyProfile.bindWith')"/>

        <a
          class="mx-1"
          href="#experience"
          v-html="$t('AboutMyProfile.myExperience')"
        />

        <span v-html="$t('AboutMyProfile.giveMeManagementAndTechnicalSkills')"/>
      </p>

      <p v-html="`${$t('AboutMyProfile.myPassionAndPerfectionism')} ${$t('AboutMyProfile.myTechnologyWatch')}`"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
</script>
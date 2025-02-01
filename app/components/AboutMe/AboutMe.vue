<template>
  <div
    id="about"
    class="section"
  >
    <div class="container">
      <div
        class="card"
        data-aos="fade-up"
        data-aos-offset="10"
      >
        <div class="row">
          <AboutMyProfile class="col-lg-6 col-md-12"/>

          <AboutMyPersonalInfo class="col-lg-6 col-md-12"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AboutMyPersonalInfo from "~/components/AboutMe/AboutMyPersonalInfo/AboutMyPersonalInfo.vue";
import AboutMyProfile from "~/components/AboutMe/AboutMyProfile/AboutMyProfile.vue";
</script>
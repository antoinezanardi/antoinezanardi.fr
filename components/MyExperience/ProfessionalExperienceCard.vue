<template>
  <div class="card">
    <div class="row">
      <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body cc-experience-header">
          <PeriodTimeline
            :company="professionalExperience.company"
            :started-at="professionalExperience.job.startedAt"
            :finished-at="professionalExperience.job.finishedAt"
          />
        </div>
      </div>
      <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body">
          <div class="h4" v-html="professionalExperience.job.name"/>
          <hr/>
          <p v-for="(paragraph, index) of professionalExperience.job.description" :key="index" v-html="paragraph"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";
import type { ProfessionalExperience } from "~/models/ProfessionalExperience";

defineProps<{
  professionalExperience: ProfessionalExperience;
}>();
</script>

<style lang="scss" scoped>
.cc-experience-header {
  padding-top: 25px !important;
}
@media (max-width: 768px) {
  .cc-experience-header {
    padding-right: 1.25rem !important;
  }
}
</style>
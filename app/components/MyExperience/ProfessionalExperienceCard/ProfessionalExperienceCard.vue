<template>
  <div class="card">
    <div class="row">
      <div
        class="bg-primary col-md-3"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-offset="50"
      >
        <div class="card-body cc-experience-header">
          <PeriodTimeline
            class="experience-timeline"
            :finished-at="professionalExperience.job.finishedAt"
            :image="professionalExperience.company.image"
            :image-alt="professionalExperience.company.name"
            :started-at="professionalExperience.job.startedAt"
            :url="professionalExperience.company.url"
          />
        </div>
      </div>

      <div
        class="col-md-9"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-offset="50"
      >
        <div class="card-body">
          <h4
            class="font-weight-bold h4 job-name mt-0"
          >
            {{ professionalExperience.job.name }}
          </h4>

          <hr>

          <p
            v-for="(paragraph, index) in professionalExperience.job.description"
            :key="index"
            class="job-description"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProfessionalExperienceCardProps } from "~/components/MyExperience/ProfessionalExperienceCard/professional-experience-card.types";
import PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";

defineProps<ProfessionalExperienceCardProps>();
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
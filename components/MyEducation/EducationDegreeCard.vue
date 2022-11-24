<template>
  <div class="card">
    <div class="row">
      <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body cc-education-header">
          <PeriodTimeline
            :image="schoolImage"
            :url="educationDegree.school.url"
            :started-at="educationDegree.degree.startedAt"
            :finished-at="educationDegree.degree.obtainedAt"
            does-show-year-only
          />
        </div>
      </div>
      <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body">
          <div class="h4" v-html="educationDegree.degree.name"/>
          <div class="d-flex">
            <p class="category mb-0" v-html="schoolLabel"/>
            <CountryFlag class="ms-2" :country="educationDegree.school.country"/>
          </div>
          <hr/>
          <p v-for="(paragraph, index) of educationDegree.degree.description" :key="index" v-html="paragraph"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "#imports";
import CountryFlag from "~/components/shared/CountryFlag.vue";
import PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";
import type { EducationDegree } from "~/models/EducationDegree";

const props = defineProps<{
  educationDegree: EducationDegree;
}>();

const schoolImage = computed<string>(() => props.educationDegree.school.image ?? "college-icon.png");
const schoolLabel = computed<string>(() => {
  const { school } = props.educationDegree;
  let label = school.translatedName ?? "?";
  if (school.city !== undefined) {
    label += `, ${school.city}`;
  }
  return label;
});
</script>

<style lang="scss" scoped>
.cc-education-header {
  padding-top: 25px !important;
}
@media (max-width: 768px) {
  .cc-education-header {
    padding-right: 1.25rem !important;
  }
}
</style>
<template>
  <div class="card">
    <div class="row">
      <div
        class="bg-primary col-md-3"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-offset="50"
      >
        <div class="card-body cc-education-header">
          <PeriodTimeline
            class="education-timeline"
            does-show-year-only
            :finished-at="educationDegree.degree.obtainedAt"
            :image="schoolImage"
            :image-alt="schoolImageAlt"
            :started-at="educationDegree.degree.startedAt"
            :url="educationDegree.school.url"
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
            class="degree-name h4"
          >
            {{ educationDegree.degree.name }}
          </h4>

          <div class="d-flex">
            <p
              class="category mb-0 school-name"
            >
              {{ schoolLabel }}
            </p>

            <CountryFlag
              class="ms-2 school-flag"
              :country="educationDegree.school.country"
            />
          </div>

          <hr>

          <p
            v-for="(paragraph, index) in educationDegree.degree.description"
            :key="index"
            class="degree-description"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { EducationDegreeCardProps } from "~/components/MyEducation/EducationDegreeCard/education-degree-card.types";
import CountryFlag from "~/components/shared/Images/CountryFlag/CountryFlag.vue";
import PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";

const props = defineProps<EducationDegreeCardProps>();

const schoolImage = computed<string>(() => props.educationDegree.school.image ?? "college-icon.png");

const schoolLabel = computed<string>(() => {
  const { school } = props.educationDegree;
  let label = school.translatedName ?? "?";
  if (school.city !== undefined) {
    label += `, ${school.city}`;
  }
  return label;
});

const schoolImageAlt = computed<string>(() => props.educationDegree.school.translatedName ?? "?");
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
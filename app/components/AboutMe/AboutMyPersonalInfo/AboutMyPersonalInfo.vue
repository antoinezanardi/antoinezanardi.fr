<template>
  <div>
    <div class="card-body">
      <h3 class="h3 mb-2 mt-0 title">
        <WrappedFontAwesomeIcon
          classes="me-2"
          icon="fa-id-card"
        />

        <span>
          {{ $t('AboutMyPersonalInfo.personalInfo') }}
        </span>
      </h3>

      <hr>

      <div class="row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.genre')} :` }}
          </b>
        </div>

        <div
          id="genre"
          class="col-sm-8"
        >
          {{ $t('AboutMyPersonalInfo.male') }}
        </div>
      </div>

      <div class="mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.age')} :` }}
          </b>
        </div>

        <div
          id="age"
          class="col-sm-8"
        >
          {{ $t('AboutMyPersonalInfo.yearsOld', { age }) }}
        </div>
      </div>

      <div class="mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.email')} :` }}
          </b>
        </div>

        <div class="col-sm-8">
          <b>
            <a
              :aria-label="$t('AboutMyPersonalInfo.emailLink', { 'email': config.public.email })"
              :href="`mailto:${config.public.email}`"
            >
              {{ config.public.email }}
            </a>
          </b>
        </div>
      </div>

      <div class="mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.phone')} :` }}
          </b>
        </div>

        <div class="col-sm-8">
          <b>
            <a
              id="phone-number"
              :aria-label="$t('AboutMyPersonalInfo.phoneLink', { 'phone': formattedPhoneNumber })"
              :href="`tel:${config.public.phoneNumber}`"
            >
              {{ formattedPhoneNumber }}
            </a>
          </b>
        </div>
      </div>

      <div class="mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.address')} :` }}
          </b>
        </div>

        <div
          id="address"
          class="col-sm-8"
        >
          {{ config.public.address }}
        </div>
      </div>

      <div class="mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.languages')} :` }}
          </b>
        </div>

        <div
          class="col-sm-8"
        >
          {{ $t('AboutMyPersonalInfo.englishAndFrench') }}
        </div>
      </div>

      <div class="align-items-center mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.licenses')} :` }}
          </b>
        </div>

        <div class="col-sm-8 d-flex">
          <WrappedFontAwesomeIcon
            :aria-label="$t('AboutMyPersonalInfo.car')"
            class="me-2"
            data-bs-toggle="tooltip"
            icon="fa-car"
            role="img"
            size="2x"
            :title="$t('AboutMyPersonalInfo.car')"
          />

          <WrappedFontAwesomeIcon
            :aria-label="$t('AboutMyPersonalInfo.boat')"
            class="me-2"
            data-bs-toggle="tooltip"
            icon="fa-anchor"
            role="img"
            size="2x"
            :title="$t('AboutMyPersonalInfo.boat')"
          />
        </div>
      </div>

      <div class="align-items-center mt-3 row">
        <div class="col-sm-4">
          <b
            class="text-uppercase"
          >
            {{ `${$t('AboutMyPersonalInfo.workingAt')} :` }}
          </b>
        </div>

        <div class="col-sm-8">
          <a
            :aria-label="$t('AboutMyPersonalInfo.companyLink', { 'company': 'Daveo' })"
            href="https://www.daveo.fr/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <NuxtImg
              alt="Daveo"
              class="daveo-logo"
              src="/images/logos/daveo-logo.webp"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";

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

<style lang="scss" scoped>
.daveo-logo {
  margin-left: -5px;
  width: 150px;
}
</style>
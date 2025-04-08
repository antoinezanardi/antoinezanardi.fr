<template>
  <div class="progress-container">
    <span
      id="badge-html"
      class="progress-badge"
    >
      <WrappedFontAwesomeIcon
        class="skill-icon"
        classes="me-2"
        :icon="skill.iconClasses"
        :icon-color="skill.color"
      />

      <b>
        <a
          class="skill-name text-muted"
          :href="skill.url"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ skill.name }}
        </a>
      </b>
    </span>

    <div class="progress">
      <div
        :aria-label="progressBarAriaLabel"
        aria-valuemax="100"
        aria-valuemin="0"
        class="progress-bar progress-bar-primary"
        data-aos="progress-full"
        data-aos-duration="2000"
        data-aos-offset="10"
        role="progressbar"
        :style="progressBarStyle"
      />

      <span
        class="font-weight-bold progress-value"
      >
        {{ skill.percent }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillProgressBarProps } from "~/components/MySkills/SkillProgressBar/skill-progress-bar.types";
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";

const props = defineProps<SkillProgressBarProps>();

const { t } = useI18n();

const progressBarStyle = computed<Record<string, string>>(() => ({
  width: props.skill.percent,
  backgroundColor: props.skill.color,
}));

const progressBarAriaLabel = computed<string>(() => t("SkillProgressBar.skillProgress", {
  skillName: props.skill.name,
  skillPercent: props.skill.percent,
}));
</script>
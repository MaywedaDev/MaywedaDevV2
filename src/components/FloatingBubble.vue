<template>
  <div
    class="absolute w-[72px] h-[72px] rotate-[-22deg] bubble z-20"
    :class="position"
    @click="goToLink"
  >
    <icon
      :icon="selectedSocial?.icon || 'simple-icons:gmail'"
      class="w-full h-full text-red opacity-60 hover:opacity-100 transition-opacity duration-500"
    />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  position: {
    type: String,
    required: true,
  },
  smMediaName: {
    type: String as () => "Gmail" | "LinkedIn" | "GitHub" | "Twitter",
    required: false,
    default: "Gmail",
  },
});

const socialMedia = [
  {
    name: "Gmail",
    icon: "simple-icons:gmail",
    link: "mailto:enyoonuche1@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "ri:linkedin-box-fill",
    link: "https://linkedin.com/in/mayweda/",
  },
  {
    name: "GitHub",
    icon: "ri:github-fill",
    link: "https://github.com/MaywedaDev",
  },
  {
    name: "Twitter",
    icon: "ri:twitter-fill",
    link: "https://twitter.com/playermayweda7",
  },
];

const selectedSocial = socialMedia.find(
  (sm) => sm.name.toLowerCase() === props.smMediaName.toLowerCase()
);

const goToLink = () => {
  if (selectedSocial?.link) {
    window.open(selectedSocial.link, "_blank");
  }
};
</script>

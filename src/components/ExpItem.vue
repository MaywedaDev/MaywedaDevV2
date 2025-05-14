<template>
  <div class="w-full">
    <h3 class="text-white text-[36px] uppercase tBebas">{{ companyName }}</h3>
    <div class="w-full flex text-red uppercase text-[24px] justify-between">
      <span class="tBebas">{{ jobTitle }}</span>
      <span class="tBebas">{{ duration }}</span>
    </div>
    <p class="font-light mt-4">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  companyName: {
    type: String,
    default: "Unknown",
  },
  jobTitle: {
    type: String,
    default: "Unknown",
  },
  duration: {
    type: String,
    default: "Unknown",
  },
  description: {
    type: String,
    default: "",
  },
  // position: {
  //   type: String,
  //   default: "left",
  // },
});
</script>

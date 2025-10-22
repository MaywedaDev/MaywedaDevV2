<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-body text-white"
  >
    <FuzzyText
      :text="message1"
      :fontSize="fontSize1"
      :fontWeight="900"
      color="#E11717"
      enableHover
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
    <div class="my-2 lg:my-4"></div>
    <FuzzyText
      :text="message2"
      :fontSize="fontSize2"
      :fontWeight="900"
      color="#E11717"
      enableHover
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
  </div>
</template>

<script setup lang="ts">
import FuzzyText from "../components/FuzzyText.vue";
import { computed } from "vue";

const message1 = "404";
const message2 = "Page Not Found";
const fontSize1 = "clamp(1.5rem, 6vw, 7rem)";
const fontSize2 = "clamp(1.5rem, 4vw, 5rem)";
const fontFamily =
  "'Clash Display', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'";
</script>

<style scoped>
/* ensure the fuzzy canvas doesn't stretch unexpectedly */
canvas {
  display: block;
}
</style>

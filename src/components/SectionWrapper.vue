<template>
  <div
    class="px-[112px] py-12 border-t border-[#484848] w-full flex gap-10 justify-between"
    :class="{ 'flex-row-reverse': ltr }"
  >
    <div class="w-full max-w-[500px]">
      <h2 class="text-red text-[64px] tBebas">{{ title }}</h2>
      <slot name="sub"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<!--  -->

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";

const props = defineProps({
  title: {
    type: String,
    default: "Unknown",
  },
  ltr: {
    type: Boolean,
    default: false,
  },
  // position: {
  //   type: String,
  //   default: "left",
  // },
});
</script>

<style>
.mqscroll {
  --section-name: "";
}
.mqscroll::before {
  content: var(--section-name);
  position: absolute;
}
</style>

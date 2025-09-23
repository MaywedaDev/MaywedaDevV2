<template>
  <div
    ref="gallery"
    class="px-[112px] py-12 border-t border-[#484848] w-full flex justify-between"
  >
    <div ref="titleText" class="w-full max-w-[640px]">
      <h2 class="text-red text-[64px] tBebas">Experience</h2>
      <div
        class="w-full max-w-[640px] rounded-lg bg-grey-100 slider-cont"
      ></div>
    </div>
    <div class="xl:max-w-[600px] max-w-[380px] space-y-14 pl-12">
      <ExpItem
        company-name="Company Name"
        job-title="Fullstack Developer"
        duration="2024 - Present"
        :description="desc"
        v-for="(item, i) in 7"
        :key="i"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ExpItem from "./ExpItem.vue";

import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const titleText = ref<HTMLDivElement>();
const gallery = ref<HTMLDivElement>();

onMounted(() => {
  if (!titleText.value || !gallery.value) return;
  ScrollTrigger.create({
    trigger: gallery.value,
    start: "top top",
    end: "bottom 80%",
    // markers: true,
    pin: titleText.value,
    scrub: true,
  });
});

const desc = `Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed sodales donec. Sit lacus turpis id ornare`;
</script>

<style>
.slider-cont {
  aspect-ratio: 16 / 12;
}
</style>

<template>
  <div
    ref="gallery"
    class="px-[112px] py-12 border-t border-[#484848] w-full flex gap-10 justify-between"
  >
    <div ref="titleText" class="w-full max-w-[500px">
      <h2 class="text-red text-[64px] tBebas">Experience</h2>
      <div class="w-full max-w-[350px] h-[270px] rounded-lg bg-grey-100"></div>
    </div>
    <div class="max-w-[600px] space-y-14">
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
    end: "bottom 70%",
    markers: true,
    pin: titleText.value,
    scrub: true,
  });
});

const desc = `Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed sodales donec. Sit lacus turpis id ornare`;
</script>

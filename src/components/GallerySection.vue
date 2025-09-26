<template>
  <div
    ref="gallery"
    class="lg:px-[112px] py-12 border-t border-[#484848] w-full lg:flex justify-between overflow-hidden"
  >
    <div ref="titleText" class="w-full ml-6 md:ml-16 lg:mx-0 lg:max-w-[640px]">
      <h2 class="text-red text-[64px] tBebas">Experience</h2>
      <div
        class="w-full max-w-[450px] mx-auto lg:max-w-[640px] rounded-lg bg-grey-100 slider-cont"
      ></div>
    </div>
    <div
      ref="expCont"
      class="my-16 px-6 md:px-16 lg:px-0 lg:my-0 lg:max-w-[600px] flex flex-row lg:flex-col pl-12 exp-cont gap-x-5 gap-y-14"
    >
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
const expCont = ref<HTMLDivElement>();

const mm = gsap.matchMedia();

onMounted(() => {
  mm.add("(max-width:1023px)", (context) => {
    if (expCont.value)
      gsap.to(expCont?.value, {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          pin: gallery.value,
          trigger: gallery.value,
          start: "left left",
          end: () => `+=${expCont.value?.offsetWidth} bottom`,
          scrub: 1,
          markers: true,
        },
      });
  });

  mm.add("(min-width:1024px)", () => {
    if (expCont.value)
      ScrollTrigger.create({
        trigger: gallery.value,
        start: "top top",
        end: "bottom 80%",
        // markers: true,
        pin: titleText.value,
        scrub: true,
      });
  });
  // if (!titleText.value || !gallery.value) return;
  // ScrollTrigger.create({
  //   trigger: gallery.value,
  //   start: "top top",
  //   end: "bottom 80%",
  //   // markers: true,
  //   pin: titleText.value,
  //   scrub: true,
  // });
});

const desc = `Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed sodales donec. Sit lacus turpis id ornare`;
</script>

<style>
.slider-cont {
  aspect-ratio: 16 / 12;
}

@media screen and (max-width: 1023px) {
  .exp-cont {
    width: 2908px;
  }
}
</style>

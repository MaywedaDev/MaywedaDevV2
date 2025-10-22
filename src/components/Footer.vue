<template>
  <div class="w-full">
    <div class="h-[500px] grid place-content-center">
      <FuzzyText
        :text="fuzzyText"
        :font-size="80"
        font-weight="900"
        color="#E11717"
        :enable-hover="true"
        :base-intensity="0.18"
        :hover-intensity="0.5"
      />
    </div>

    <div class="w-full flex flex-col items-center gap-8" ref="trigger">
      <h2 class="text-7xl font-clash uppercase" ref="ctaCont">Let's talk</h2>
      <div class="flex gap-3 justify-center items-center" ref="sociaLinks">
        <CustomIcon
          class-name="text-[50px] text-red hover:text-white"
          name="simple-icons:gmail"
          alt="Email"
          href="mailto:enyoonuche1@gmail.com"
        />
        <CustomIcon
          class-name="text-[50px] text-red hover:text-white"
          name="ri:linkedin-box-fill"
          alt="LinkedIn"
          href="https://linkedin.com/in/mayweda/"
        />
        <CustomIcon
          class-name="text-[50px] text-red hover:text-white"
          name="ri:github-fill"
          alt="GitHub"
          href="https://github.com/MaywedaDev"
        />
        <CustomIcon
          class-name="text-[50px] text-red hover:text-white"
          name="ri:twitter-fill"
          alt="Twitter"
          href="https://twitter.com/playermayweda7"
        />
      </div>
    </div>

    <div class="w-full py-4 px-[112px]">
      <div class="flex w-full justify-between mt-10">
        <p class="text-white">
          Designed by <span class="text-accent text-red">Gideon</span>
        </p>
        <p @click="scrollToTop" class="text-white">Back to Top</p>
        <p class="text-white">MWD2025</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CustomIcon from "./CustomIcon.vue";
import FuzzyText from "./FuzzyText.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Got a question, proposal or want to work together on something? Feel
//           free to reach out.
const trigger = ref<HTMLDivElement>();
const ctaCont = ref<HTMLDivElement>();
const sociaLinks = ref<HTMLDivElement>();
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: trigger.value,
    start: "bottom bottom",
  },
});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  if (ctaCont.value && sociaLinks.value)
    tl.from(ctaCont.value, {
      yPercent: 130,
      opacity: 0,
      duration: 0.9,
    }).from(sociaLinks.value?.children, {
      yPercent: 130,
      opacity: 0,
      stagger: 0.5,
      duration: 1.4,
    });
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const fuzzyText = "PROJECT IN MIND?";
</script>

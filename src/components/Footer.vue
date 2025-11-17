<template>
  <div class="w-full" id="contact">
    <div class="h-[200px] md:h-[500px] grid place-content-center">
      <FuzzyText
        :text="fuzzyText"
        font-size="clamp(1.5rem, 6vw, 7rem)"
        font-weight="900"
        color="#E11717"
        :enable-hover="true"
        :base-intensity="0.18"
        :hover-intensity="0.5"
      />
    </div>

    <div class="w-full flex flex-col items-center gap-8" ref="trigger">
      <h2
        class="text-4xl md:text-7xl font-bold font-clash uppercase"
        ref="ctaCont"
      >
        Let's talk
      </h2>
      <div class="flex gap-3 justify-center items-center" ref="sociaLinks">
        <CustomIcon
          class-name="text-[32px] md:text-[50px] text-red hover:text-white"
          name="simple-icons:gmail"
          alt="Email"
          href="mailto:enyoonuche1@gmail.com"
        />
        <CustomIcon
          class-name="text-[32px] md:text-[50px] text-red hover:text-white"
          name="ri:linkedin-box-fill"
          alt="LinkedIn"
          href="https://linkedin.com/in/mayweda/"
        />
        <CustomIcon
          class-name="text-[32px] md:text-[50px] text-red hover:text-white"
          name="ri:github-fill"
          alt="GitHub"
          href="https://github.com/MaywedaDev"
        />
        <CustomIcon
          class-name="text-[32px] md:text-[50px] text-red hover:text-white"
          name="ri:twitter-fill"
          alt="Twitter"
          href="https://twitter.com/playermayweda7"
        />
      </div>
    </div>

    <div class="w-full py-4 px-8 sm:px-[56px] md:px-[112px]">
      <div class="flex w-full justify-between mt-10">
        <p class="text-white footer-link">
          Designed by <span class="text-accent text-red">Gideon</span>
        </p>
        <div class="flex gap-3 items-center footer-link">
          <p @click="scrollToTop" class="text-white">Back to Top</p>
          <Icon icon="mdi:arrow-up" />
        </div>

        <p class="text-white footer-link">MWD2025</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CustomIcon from "./CustomIcon.vue";
import FuzzyText from "./vuebits/FuzzyText.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/vue";

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
    })
      .from(sociaLinks.value?.children, {
        yPercent: 130,
        opacity: 0,
        stagger: 0.5,
        duration: 1.4,
      })
      .from(".footer-link", {
        yPercent: -100,
        stagger: 0.4,
        opacity: 0,
      });
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const fuzzyText = "PROJECT IN MIND?";
</script>

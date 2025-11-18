<template>
  <nav id="nav" class="hidden sm:block w-full px-10 py-5">
    <div ref="navContent" class="flex w-full items-center">
      <p class="text-secondary text-3xl tBebas">Mayweda Dev</p>

      <div
        class="flex items-center uppercase mx-auto ml-[calc(((100%-400px)/2)-140px)]"
        ref="navLinks"
      >
        <div
          class="px-6 py-2 bg-white border border-white text-deepBlack flex gap-2 items-center"
        >
          <Icon icon="streamline-sharp:star-2-solid" class="text-red" />
          <a href="#about">About</a>
        </div>
        <div class="px-6 py-2 border border-white flex gap-2 items-center">
          <Icon icon="material-symbols:circle" class="text-red" />
          <a href="#projects">Works</a>
        </div>
        <div
          class="px-6 py-2 bg-white border border-white text-deepBlack flex gap-2 items-center"
        >
          <Icon icon="material-symbols:square-rounded" class="text-red" />
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="w-full max-w-[1280px] px-4 md:px-10 mb-10 mx-auto space-y-10">
    <div
      class="w-full flex max-[960px]:flex-col overflow-hidden justify-between min-h-[65vh]"
    >
      <div class="mx-auto my-auto max-w-[600px] relative z-10">
        <h6 class="text-secondary ml-10 name tEllen text-xl md:text-3xl">
          Hi I'm
        </h6>
        <h1
          class="text-secondary font-clash text-center text-6xl font-700 md:text-9xl uppercase font-bold inline-block name"
        >
          Onuche Enyo
        </h1>
        <floating-bubble
          sm-media-name="GitHub"
          position="top-5 left-4 md:-left-10"
        ></floating-bubble>
        <floating-bubble
          sm-media-name="LinkedIn"
          position="-bottom-7 left-4 md:-left-10"
        ></floating-bubble>
        <floating-bubble
          sm-media-name="Twitter"
          position="bottom-24 right-3 md:-right-5"
        ></floating-bubble>
        <floating-bubble
          sm-media-name="Gmail"
          position="bottom-0 right-3 md:-right-24"
        ></floating-bubble>
      </div>
    </div>

    <div
      class="w-full flex flex-col gap-[40px] justify-between items-center my-12"
    >
      <div ref="scrollDText">
        <h2 class="text-2xl md:text-5xl text-deepBlack text-center font-bold">
          Scroll down
        </h2>
        <Icon
          icon="solar:double-alt-arrow-down-line-duotone"
          class="text-red text-5xl mt-3 animate-bounce mx-auto"
          @click="scrollToBio"
        />
      </div>

      <div ref="bioSection" id="about">
        <ScrollReveal
          :children="bio"
          :base-rotation="8"
          :base-opacity="0.04"
          :blur-strength="8"
        />
      </div>
    </div>

    <div
      class="w-full max-w-[1024px] rounded-lg mx-auto bg-grey-100 overflow-hidden relative pixel-container my-16"
      ref="pixelCont"
    >
      <img
        src="../assets/images/file_00000000131861f991edae5699a0fe7e.png"
        class="w-full absolute top-0 left-0 h-full object-cover"
        alt=""
      />
    </div>
  </div>
  <!-- <marquee-name /> -->
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import FloatingBubble from "./FloatingBubble.vue";

import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./vuebits/ScrollReveal.vue";

import { Icon } from "@iconify/vue";
import useSplashScreenStatus from "../composables/useSplashScreenStatus";

const navContent = ref<HTMLDivElement>();
const pixelCont = ref<HTMLDivElement>();
const bioSection = ref<HTMLDivElement>();
const scrollDText = ref<HTMLDivElement>();
const navLinks = ref<HTMLDivElement>();
const t1 = gsap.timeline();

const { isSplashScreenFinished } = useSplashScreenStatus();

const bio =
  "Hi, I'm Enyo, a software dev, with a passion for creating beautiful, functional and interactive digital experiences. With a vast experience in full-stack development, I specialize in creating sleek React and Vue interfaces, mobile apps that feel effortless, and I also do indie game development (mostly for fun). Let's build something users will love.";

gsap.registerPlugin(ScrollTrigger);

const body: HTMLElement = document.body;

const scrollToBio = () => {
  if (bioSection.value) {
    bioSection.value.scrollIntoView({ behavior: "smooth" });
  }
};

const mm = gsap.matchMedia();
onMounted(() => {
  // body.style.overflowY = "hidden";
  const headerText = new SplitType(".name", { types: "words,chars" });
  const animText = new SplitType(".typed-text", { types: "words,chars" });

  for (let i = 0; i < 2560; i++) {
    appendPixel();
  }

  // gsap.set(".typed-text .char", {
  //   yPercent: 100,
  //   opacity: 0,
  // });

  t1.pause();

  t1.from(".name .char", {
    yPercent: 130,
    opacity: 0,
    stagger: 0.08,
    ease: "elastic.out(1, 0.5)",
    duration: 1.5,
  });

  t1.from(".bubble", {
    y: 60,
    // x: 30,
    opacity: 0,
    duration: 0.6,
    ease: "back.out",
    onComplete: () => {
      startFloating();
    },
    stagger: 0.2,
  });

  // add the nav children tween conditionally for larger screens (>= 640px)
  mm.add("(min-width: 640px)", () => {
    // @ts-ignore
    t1.from([...navContent.value?.children], {
      yPercent: -100,
      stagger: 0.2,
      opacity: 0,
    });

    t1.from([...navLinks.value?.children], {
      yPercent: -100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    // return () => {
    //   // cleanup if the media query is killed
    //   gsap.killTweensOf([...navContent.value?.children] as any);
    // };
  });
  if (scrollDText.value)
    t1.from(scrollDText.value, {
      yPercent: 60,
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        body.style.overflowY = "scroll";
      },
    });
  // .to(".typed-text .char", {
  //   yPercent: 0,
  //   opacity: 1,
  //   duration: 0.5,
  // })
  // .to(contactButton?.value as HTMLButtonElement, {
  //   duration: 0.7,
  //   opacity: "100%",
  //   ease: "Power1.easeInOut",
  // });

  gsap.to(".pixel", {
    // duration: 1.5,
    opacity: 0,
    stagger: {
      from: "random",
      amount: 1.8,
    },
    ease: "Power1.easeInOut",
    scrollTrigger: {
      trigger: pixelCont.value,
      start: "top 50%",
      // scrub: true,
    },
  });

  // gsap.to(".typed-text .char", {
  //   duration: 2.5,
  //   width: "100%",
  //   // stagger: {
  //   //   amount: 2.5,
  //   //   from: "start",
  //   // },
  //   ease: "Power1.easeInOut",
  //   scrollTrigger: {
  //     trigger: ".typed-text",
  //     start: "top 75%",
  //     end: "top 80%",
  //   },
  // });

  const startFloating = () => {
    const floatingBubbles = gsap.utils.toArray(".bubble");
    floatingBubbles.forEach((bubble) => {
      gsap.to(bubble as GSAPTweenTarget, {
        yPercent: -20 + Math.round(Math.random() * 40),
        xPercent: -20 + Math.round(Math.random() * 40),
        duration: 3 + Math.round(Math.random() * 2),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2,
      });
    });
  };
});

const appendPixel = () => {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixelCont.value?.appendChild(pixel);
};

watch(isSplashScreenFinished, (newVal) => {
  if (newVal) {
    console.log("splash finished - play hero animation");
    t1.play();
  }
});
</script>

<style>
@keyframes blink {
  0%,
  100% {
    background-color: white;
  }
  50% {
    background-color: transparent;
  }
}

/* .typed-text::after {
  content: "";
  position: relative;
  width: 2px;
  background-color: white;
  height: 20px;
  top: 4px; 
  display: inline-block;
  right: 0;
  bottom: 0; 
  animation: blink 1s step-start infinite;
} */

/* .typed-text .word {
  margin-right: 2px;
} */

.typed-text .word {
  margin-right: 2px;
}

/* .name .word,
.typed-text .word,
.anim-text .line {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
} */

.pixel-container {
  display: grid;
  grid-template-columns: repeat(64, 1fr);
  grid-template-rows: repeat(40, 1fr);
  aspect-ratio: 16 / 10;
}

.pixel-container .pixel {
  position: relative;
  background-color: #0a0a0a;
}

.shine-btn {
  transition: all 0.5s;
}
.shine-btn:hover {
  box-shadow: 1px 1px 16px 12px #e1171777;
}

/* responsive rules removed (no styles needed here) */
</style>

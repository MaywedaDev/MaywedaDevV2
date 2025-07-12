<template>
  <nav
    class="w-full px-10 py-5 after:absolute after:bg-grey-100 relative after:h-[2px] after:bottom-0 after:left-0"
  >
    <div ref="navContent" class="flex w-full justify-between items-center">
      <p class="text-secondary text-3xl tBebas">Mayweda Dev</p>
      <!-- <div class="flex  gap-x-6 before:h-full relative before:w-px before:left-[50%] before:bg-secondary before:absolute">
                <router-link to="/github" class="text-accent before:duration-300 before:w-0 hover:before:w-full before:absolute before:h-px before:bg-secondary relative before:-bottom-1 hover:text-secondary duration-300 text-lg">github</router-link>
                <p class="text-accent before:duration-300 before:w-0 hover:before:w-full before:absolute before:h-px before:bg-secondary relative before:-bottom-1 hover:text-secondary duration-300 text-lg">projects</p>
            </div> -->
      <!-- <p class="text-accent text-[14px] uppercase">Lagos, NG 5:19PM</p> -->
      <div class="flex gap-x-5 items-center text-white">
        <span>About</span>
        <span>Works</span>
        <span>Contact</span>
      </div>
    </div>
  </nav>
  <div class="w-full max-w-[1280px] px-10 my-10 mx-auto space-y-10">
    <div
      class="w-full flex overflow-hidden my-8 justify-between h-[550px] pt-10"
    >
      <div class="p-4 max-w-[500px]">
        <h6 class="text-secondary name tEllen text-4xl leading-[60px]">
          Hi I'm
        </h6>
        <h1 class="tBebas text-white font-weight-bold text-[96px] name">
          Enyo Onuche
        </h1>
        <p class="font-weight-light mb-2 w-[400px] typed-text flex flex-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque.
          Odit non sed unde? Aliquid doloremque possimus praesentium fugit.
          Ipsam!
        </p>
        <button
          class="border-2 border-red py-2 px-4 bg-transparent uppercase rounded-3xl opacity-0 my-4 hover:bg-red"
          ref="contactButton"
        >
          LET'S TALK
        </button>
      </div>

      <CurvedText />

      <!-- <div class="mx-auto my-auto w-[600px] relative z-10 ">
            <h6 class="text-secondary ml-10 name tEllen text-3xl">Hi I'm</h6>
            <h1 class="text-secondary font-clash text-center text-7xl font-700 md:text-9xl uppercase font-bold inline-block name">Onuche Enyo</h1>
            <floating-bubble position="top-5 -left-10"></floating-bubble>
            <floating-bubble position="-bottom-7 -left-10"></floating-bubble>
            <floating-bubble position="bottom-24 -right-5"></floating-bubble>
            <floating-bubble position="bottom-0 -right-24"></floating-bubble>
        </div> -->
    </div>
    <div
      class="w-[1024px] h-[640px] rounded-lg mx-auto bg-grey-100 overflow-hidden relative pixel-container"
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
import { onMounted, ref } from "vue";
// import FloatingBubble from "./FloatingBubble.vue";
// import MarqueeName from "./MarqueeName.vue";
// import SectionWrapper from "./SectionWrapper.vue";
// import ProjectCard from "./ProjectCard.vue";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurvedText from "./CurvedText.vue";
// import TextPlugin from "gsap/TextPlugin";

const navContent = ref<HTMLDivElement>();
const contactButton = ref<HTMLButtonElement>();
const pixelCont = ref<HTMLDivElement>();
const t1 = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

const body: HTMLElement = document.body;

onMounted(() => {
  body.style.overflowY = "hidden";
  const headerText = new SplitType(".name", { types: "words,chars" });
  const animText = new SplitType(".typed-text", { types: "words,chars" });

  for (let i = 0; i < 2560; i++) {
    appendPixel();
  }

  t1.from(".name .char", {
    yPercent: 130,
    opacity: 0,
    stagger: 0.08,
    ease: "back.out",
  })
    // .from(".bubble", {
    //   y: 60,
    //   // x: 30,
    //   opacity: 0,
    //   duration: 0.6,
    //   ease: "back.out",
    // })
    // .from(
    //   "#marquee",
    //   {
    //     yPercent: 100,
    //     opacity: 0,
    //   },
    //   "<"
    // )
    //@ts-ignore
    .from([...navContent.value?.children], {
      yPercent: -100,
      stagger: 0.2,
      opacity: 0,
    })
    .to("nav", {
      "--divider-width": "100%",
      duration: 0.8,
      onComplete: () => {
        body.style.overflowY = "scroll";
      },
    });

  createTimeline();

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
});

const createTimeline = () => {
  const t2 = gsap.timeline();
  const typedChars = gsap.utils.toArray(".typed-text .char");

  const createTween = (el: any) => {
    return gsap.from(el, {
      duration: 0.05,
      // width: "100%",
      display: "none",
    });
  };

  typedChars.forEach((el) => {
    t2.add(createTween(el));
  });

  if (!contactButton.value) return t2;
  t2.to(contactButton.value, {
    duration: 0.7,
    opacity: "100%",
    ease: "Power1.easeInOut",
  });

  if (!pixelCont.value) return t2;
  t2.to(
    ".pixel",
    {
      // duration: 0.3,
      opacity: 0,
      stagger: {
        each: 0.02,
        from: "random",
      },
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: pixelCont.value,
        start: "top 75%",
        end: "bottom 100%",
        scrub: true,
      },
    },
    "<"
  );

  return t2;
};

const appendPixel = () => {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixelCont.value?.appendChild(pixel);
};
</script>

<style>
nav {
  --divider-width: 0;
}
nav::after {
  width: var(--divider-width);
}

@keyframes blink {
  0%,
  100% {
    background-color: white;
  }
  50% {
    background-color: transparent;
  }
}

.typed-text {
  /* overflow: hidden; */
  width: fit-content;

  position: relative;
}

.typed-text::after {
  content: "";
  position: relative;
  width: 2px;
  background-color: white;
  height: 20px;
  /* top: 4px; */
  display: inline-block;
  /* right: 0;
  bottom: 0; */
  animation: blink 1s step-start infinite;
}

.typed-text .word {
  display: flex !important;
}

.typed-text .word {
  margin-right: 2px;
}

.name .word,
.anim-text .line {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.pixel-container {
  display: grid;
  grid-template-columns: repeat(64, 1fr);
  grid-template-rows: repeat(40, 1fr);
}

.pixel-container .pixel {
  position: relative;
  background-color: #0a0a0a;
}
</style>

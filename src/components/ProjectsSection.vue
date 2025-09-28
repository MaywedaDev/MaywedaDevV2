<template>
  <div class="w-100 py-10 px-4 md:px-10 lg:px-[112px] flex flex-col projects">
    <h2 class="text-red text-[64px] tBebas header">Selected Works</h2>
    <p class="max-w-[520px] flex flex-wrap">
      Passionate about turning complex ideas into simple, beautiful solutions.
      <br />
      Take a look through some of my featured projects
    </p>

    <div
      class="w-100 my-10 grid lg:grid-cols-[repeat(2,_minmax(360px,_600px))] mx-auto gap-8"
    >
      <project-card :project="item" v-for="(item, i) in projects" :key="i" />
    </div>

    <button
      class="border-2 border-red py-2 px-4 bg-transparent uppercase rounded-3xl mx-auto hover:bg-red hover:text-white hover:shadow-lg transition-all duration-300 shine-btn"
    >
      SHOW MORE
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const projects = [
  {
    name: "QuizWiz",
    image: "src/assets/images/projects/quizwiz_proj.png",
    link: "https://quiz_wiz.vercel.app",
    desc: "A simple quiz application",
  },
  {
    name: "",
    image: "",
    link: "",
  },
  {
    name: "",
    image: "",
    link: "",
  },
  {
    name: "",
    image: "",
    link: "",
  },
  {
    name: "",
    image: "",
    link: "",
  },
  {
    name: "",
    image: "",
    link: "",
  },
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const headerText = new SplitType(".header", { types: "words,chars" });
  const animText = new SplitType(".typed-2-text", { types: "words,chars" });

  createTimeline();

  gsap.set(".project-card", {
    yPercent: 40,
    opacity: 0,
  });

  ScrollTrigger.batch(".project-card", {
    onEnter: (batch) =>
      gsap.to(batch, {
        yPercent: 0,
        delay: 0.4,
        duration: 1,
        opacity: 1,
        ease: "elastic.out(1, 0.75)",
        stagger: 0.3,
      }),
    start: "top bottom",
  });
});

const createTimeline = () => {
  const t2 = gsap.timeline();
  const typedChars = gsap.utils.toArray(".typed-2-text .char");

  const createTween = (el: any) => {
    return gsap.from(el, {
      duration: 0.05,
      // width: "100%",
      display: "none",
    });
  };

  t2.from(".header .char", {
    yPercent: 130,
    opacity: 0,
    stagger: 0.08,
    ease: "back.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 75%",
    },
  });

  typedChars.forEach((el) => {
    t2.add(createTween(el));
  });

  return t2;
};
</script>

<style scoped>
.header .word {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.typed-2-text .word {
  margin-right: 2px;
}
.shine-btn {
  transition: all 0.5s;
}
.shine-btn:hover {
  box-shadow: 1px 1px 16px 12px #e1171777;
}
</style>

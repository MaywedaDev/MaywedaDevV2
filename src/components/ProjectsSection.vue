<template>
  <div
    class="w-100 py-10 px-4 md:px-10 lg:px-[112px] flex flex-col projects"
    id="projects"
  >
    <DecryptedText
      text="Projects"
      :speed="100"
      :max-iterations="20"
      :sequential="false"
      reveal-direction="start"
      :use-original-chars-only="false"
      class-name="text-red text-[64px] tBebas"
      encrypted-class-name="text-[64px] tBebas header"
      animate-on="view"
    />
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import DecryptedText from "./vuebits/DecryptedText.vue";
import type { Project } from "./types";

const projects: Project[] = [
  {
    name: "QuizWiz",
    image: "src/assets/images/projects/quizwiz_proj.png",
    link: "https://quiz_wiz.vercel.app",
    intro: "Interactive quiz platform with 13 topics",
    desc: "A simple quiz application, made with Angular, Typescript, Bootstrap and the Trivia API. \n Consists of Quizzes on 13 different topics ranging from History to Music to Science, and has an interactive results review section where user can see a detailed breakdown on the questions and answers on all of the quizzes taken",
    icons: ["angular", "typescript", "bootstrap"],
    git: "https://github.com/MaywedaDev/QuizWiz",
  },
  {
    name: "Infinite Scrolling Gallery",
    image: "",
    link: "",
    intro: "Endless image gallery with dynamic loading",
    desc: "An Infinite Scrolling Image Gallery.\n Made with jQuery, BootStrap and Pexels API",
    icons: ["jQuery", "bootstrap"],
    git: "https://github.com/MaywedaDev/Infinite-scrolling-gallery",
  },

  {
    name: "NftOcean",
    image: "",
    link: "http://nft-ocean-three.vercel.app/",
    intro: "NFT marketplace showcasing digital assets",
    desc: "An NFT Marketplace Concept website.\n Made with Vue.js and Bootstrap",
    icons: ["vue", "bootstrap"],
    git: "https://github.com/MaywedaDev/NftOcean",
  },
  {
    name: "AceCoin Pay",
    image: "",
    link: "https://acecoin-pay-blond.vercel.app/",
    intro: "Modern payment interface for NFC cards",
    desc: "A concept for a beautiful designed card/NFC payment page.\n Made with React and Tailwind",
    icons: ["react", "tailwind"],
    git: "https://github.com/MaywedaDev/acecoin_pay",
  },
  {
    name: "ArticleGPT",
    image: "",
    link: "coca-design.vercel.app",
    intro: "AI-powered article generation with style control",
    desc: "An Article Generator WebApp that can generate essays or write-ups using various different narration styles, from a set of keywords.\n Also can control the keyword density and generate new writing ideas.\n Made with Vue.js, Typescript and Gemini API",
    icons: ["vue", "typescript"],
    git: "https://github.com/MaywedaDev/coca_design",
  },
  {
    name: "Coca design",
    image: "",
    link: "coca-design.vercel.app",
    intro: "Pixel-perfect Figma design implementation",
    desc: "A Figma community template 'Coca Design' implemented exactly according to the design.\n Made with React, Tailwind and Swiper.js",
    icons: ["react", "tailwind"],
    git: "https://github.com/MaywedaDev/coca_design",
  },

  {
    name: "Ask a Question",
    image: "",
    link: "maywedadev.github.io/Ask-a-Question.repo/index.html",
    intro: "Fun decision-making and fortune-telling app",
    desc: "A fun, interactive decision making website that can help make a choice in a list of decisions, suggest a fun activity for you to do, or predict your own future!!!. \n Made with jQuery and Typed.js",
    icons: ["jQuery"],
    git: "https://github.com/MaywedaDev/Ask-a-Question.repo",
  },
  {
    name: "PodOfCast",
    image: "",
    link: "",
    intro: "Beautiful podcast platform with smooth animations",
    desc: "An implementation of a figma community template 'PodOfCast' by Flowbase.co.\n Made of beautifully designed and implemented pages, with animations, transforms and transitions and page transitions.\n Made with Vite, React, GSAP and Tailwind. Also made use of Swiper.js ",
    icons: ["react", "gsap", "tailwind"],
    git: "https://github.com/MaywedaDev/podOfCast",
  },
  {
    name: "Multi-step Form | FrontEndMentors",
    image: "",
    link: "",
    intro: "Animated product customization challenge",
    desc: "A fun FrontEndMentors challenge in which I built an animated product customization and purchase page. \n Made with jQuery",
    icons: ["jQuery"],
    git: "https://github.com/MaywedaDev/Multi-step-form-main",
  },
  {
    name: "Firebase Chat",
    image: "",
    link: "",
    intro: "Real-time messaging with Firebase backend",
    desc: "A Chat Application built with Firebase and React Native",
    icons: ["react-native", "firebase"],
    git: "https://github.com/MaywedaDev/firebase-chat",
  },
  {
    name: "WallyAI",
    image: "",
    link: "",
    intro: "AI wallpaper generation for any device",
    desc: "An upcoming wallpaper generation mobile app, editing and sharing app, that allows creation of wallpapers for any device, dimension, or art style. Currently in development",
    icons: ["react-native", "tailwind"],
    git: "https://github.com/MaywedaDev/WallyAI",
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

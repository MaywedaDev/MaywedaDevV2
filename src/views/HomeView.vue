<template>
  <div>
    <hero-section />
    <div class="">
      <projects-section />

      <section-wrapper title="about" ltr>
        <template #sub>
          <p>
            Full-stack developer passionate about crafting seamless digital
            experiences. I specialize in building scalable web applications with
            modern technologies and a focus on clean, maintainable code.
          </p>
          <p class="mt-10">
            When I'm not coding, you can find me exploring new frameworks, or
            sharing knowledge with the developer community.
          </p>
        </template>
        <template #content>
          <div
            class="w-full max-w-[600px] h-[500px] rounded-lg bg-grey-100"
          ></div>
        </template>
      </section-wrapper>

      <section-wrapper title="tools">
        <template #sub>
          <p>
            I leverage a modern tech stack to build robust and efficient
            applications. From frontend frameworks to backend technologies, I
            choose tools that best fit the project requirements and deliver
            exceptional results.
          </p>
          <p class="mt-10">
            Constantly expanding my toolkit with emerging technologies and
            industry best practices to stay at the forefront of web development
            innovation.
          </p>
        </template>
        <template #content>
          <div
            class="w-full max-w-[600px] h-[500px] rounded-lg bg-grey-100"
          ></div>
        </template>
      </section-wrapper>

      <!-- <gallery-section /> -->

      <marquee-name />

      <div
        class="w-[calc(100%-32px)] lg:w-full max-w-[1000px] rounded-lg bg-grey-100 lg:mx-auto my-10 mx-4 last-box"
      ></div>

      <marquee-name />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "../components/HeroSection.vue";

import SectionWrapper from "../components/SectionWrapper.vue";
import Footer from "../components/Footer.vue";
import ProjectsSection from "../components/ProjectsSection.vue";

import MarqueeName from "../components/MarqueeName.vue";
</script>

<style>
.last-box {
  aspect-ratio: 2 / 1;
}
</style>

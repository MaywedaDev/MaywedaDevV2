<template>
  <div>
    <hero-section />
    <div class="">
      <projects-section />
      <!-- <section-wrapper name="WORKS" position="left">
                <marquee-scroll title="Mayweda" direction="ltr" />
                <marquee-scroll title="QuizWiz" direction="rtl" />
                <marquee-scroll title="Nftocean" direction="ltr"/>
                <marquee-scroll title="Allfootball" direction="rtl" />
            </section-wrapper> -->

      <section-wrapper title="about" ltr>
        <template #sub>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor
            a sociis sed sodales donec. Sit lacus turpis id ornare aliquam ut
            tortor. Urna interdum lobortis in adipiscing. Facilisi nisl
            sollicitudin id elementum morbi mi.
          </p>
          <p class="mt-10">
            or sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed
            sodales donec. Sit lacus turpis id ornare aliquam ut tortor. Urna
            interdum lobortis in adipiscing. Facilisi nisl sollicitudin id
            elementum morbi mi.
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
            Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor
            a sociis sed sodales donec. Sit lacus turpis id ornare aliquam ut
            tortor. Urna interdum lobortis in adipiscing. Facilisi nisl
            sollicitudin id elementum morbi mi.
          </p>
          <p class="mt-10">
            Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor
            a sociis sed sodales donec. Sit lacus turpis id ornare aliquam ut
            tortor. Urna interdum lobortis in adipiscing. Facilisi nisl
            sollicitudin id elementum morbi mi.
          </p>
        </template>
        <template #content>
          <div
            class="w-full max-w-[600px] h-[500px] rounded-lg bg-grey-100"
          ></div>
        </template>
      </section-wrapper>

      <gallery-section />

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
import GallerySection from "../components/GallerySection.vue";

const aboutSub = `Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed sodales donec. Sit lacus turpis id ornare aliquam ut tortor. Urna interdum lobortis in adipiscing. Facilisi nisl sollicitudin id elementum morbi mi.`;
</script>

<style>
.last-box {
  aspect-ratio: 2 / 1;
}
</style>

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

      <section-wrapper title="Experience">
        <template #content>
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
        </template>
      </section-wrapper>

      <marquee-name />

      <div
        class="w-full max-w-[1200px] h-[500px] rounded-lg bg-grey-100 mx-auto my-10"
      ></div>

      <marquee-name />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "../components/HeroSection.vue";
import MarqueeScroll from "../components/MarqueeScroll.vue";
import SectionWrapper from "../components/SectionWrapper.vue";
import Footer from "../components/Footer.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ExpItem from "../components/ExpItem.vue";
import MarqueeName from "../components/MarqueeName.vue";

const aboutSub = `Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed sodales donec. Sit lacus turpis id ornare aliquam ut tortor. Urna interdum lobortis in adipiscing. Facilisi nisl sollicitudin id elementum morbi mi.`;

const desc = `Lorem ipsum dolor sit amet consectetur. Eu laoreet sit vitae auctor a sociis sed sodales donec. Sit lacus turpis id ornare`;
</script>

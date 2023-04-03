<template>
    <div>
        <hero-section />
        <div class="px-8 md:px-12">
        <section-wrapper name="WORKS" position="left">
            <marquee-scroll v-for="(el, i) in 4" :key="i"></marquee-scroll>
        </section-wrapper>

        <section-wrapper name="INTERESTS" position="left">
            <div class="mt-12 py-12 text-secondary flex justify-between items-center">
                <div>
                    <p class="text-2xl">Here is a few other technologies I'm also familiar with:</p>
                    <ul class="text-2xl list-disc px-8">
                        <li>Git and Github</li>
                        <li>Nest.js</li>
                        <li>Express</li>
                        <li>Redux</li>
                        <li>Firebase</li>
                        <li>SCSS</li>
                        <li>NextJS</li>
                    </ul>
                </div>
                <div class="bg-secondary h-[500px] w-[350px] rounded-2xl"></div>
            </div>
        </section-wrapper>
        </div>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from "./HeroSection.vue";
import MarqueeScroll from "./MarqueeScroll.vue";
import SectionWrapper from "./SectionWrapper.vue";

export default defineComponent({
    components:{
        HeroSection,
        MarqueeScroll,
        SectionWrapper
    }
})
</script>
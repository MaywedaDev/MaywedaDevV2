<template>
    <div>
        <hero-section />
        <div class="px-6 md:px-12">
            <section-wrapper name="WORKS" position="left">
                <marquee-scroll title="Mayweda" />
                <marquee-scroll title="QuizWiz" />
                <marquee-scroll title="Nftocean" />
                <marquee-scroll title="Allfootball" />
            </section-wrapper>

            <section-wrapper name="INTERESTS" position="left">
                <div class="mt-12 py-12 text-secondary flex flex-col md:flex-row justify-between items-center">
                    <div class="my-4">
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
                    <div class="bg-secondary h-[500px] w-[350px] rounded-2xl my-4"></div>
                </div>
            </section-wrapper>

            <div class="">
                <marquee-scroll title="React Markdown" />
                <marquee-scroll title="QR Code" />
                <marquee-scroll title="Ask a question" />
            </div>
            <Footer />
            
        </div>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from "./HeroSection.vue";
import MarqueeScroll from "./MarqueeScroll.vue";
import SectionWrapper from "./SectionWrapper.vue";
import Footer from './Footer.vue';

export default defineComponent({
    components:{
        HeroSection,
        MarqueeScroll,
        SectionWrapper,
        Footer
    }
})
</script>
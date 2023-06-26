<template>
    <div>
        <hero-section />
        <div class="px-6 md:px-12">
            <section-wrapper name="WORKS" position="left">
                <marquee-scroll title="Mayweda" direction="ltr" />
                <marquee-scroll title="QuizWiz" direction="rtl" />
                <marquee-scroll title="Nftocean" direction="ltr"/>
                <marquee-scroll title="Allfootball" direction="rtl" />
            </section-wrapper>

            <section-wrapper name="INTERESTS" position="left">
                <div class="mt-12 py-12 text-secondary flex flex-col md:flex-row justify-between items-center">
                    <div class="my-4 flex flex-wrap gap-y-4">
                        <!-- <p class="text-2xl">Here is a few other technologies I'm also familiar with:</p> -->
                        <ul class="text-md list-disc px-8">
                            <p class="uppercase font-bold mb-6 text-white">Languages</p>
                            <li class="ml-3">HTML</li>
                            <li class="ml-3">CSS</li>
                            <li class="ml-3">JavaScript</li>
                            <li class="ml-3">Java</li>
                            <li class="ml-3">SASS/SCSS</li>
                            <li class="ml-3">Typescript</li>
                        </ul>

                        <ul class="text-md list-disc px-8">
                            <p class="uppercase font-bold mb-6 text-white">Frameworks and Libraries</p>
                            <li class="ml-3">Vue.js</li>
                            <li class="ml-3">React</li>
                            <li class="ml-3">Angular</li>
                            <li class="ml-3">NextJS</li>
                            <li class="ml-3">Nuxt</li>
                            <li class="ml-3">Node(Express)</li>
                            <li class="ml-3">Gsap</li>
                        </ul>

                        <ul class="text-md list-disc px-8">
                            <p class="uppercase font-bold mb-6 text-white">Others</p>
                            <li class="ml-3">Git and Github</li>
                            <li class="ml-3">Firebase and Supabase</li>
                            <li class="ml-3">Three.js</li>
                            <li class="ml-3">Redux</li>
                            <li class="ml-3">Jest</li>
                            <li class="ml-3">Material UI</li>
                            <li class="ml-3">Bootstrap</li>
                            <li class="ml-3">Tailwind</li>
                        </ul>
                    </div>
                    <div class="bg-secondary h-[500px] w-[350px] rounded-2xl my-4"></div>
                </div>
            </section-wrapper>

            <Footer />
            
        </div>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from "../components/HeroSection.vue";
import MarqueeScroll from "../components/MarqueeScroll.vue";
import SectionWrapper from "../components/SectionWrapper.vue";
import Footer from '../components/Footer.vue';

export default defineComponent({
    components:{
        HeroSection,
        MarqueeScroll,
        SectionWrapper,
        Footer
    }
})
</script>
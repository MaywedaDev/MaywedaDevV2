<template>
    <nav class=" w-full px-10 py-3 after:absolute after:bg-grey-100 relative after:h-[2px] after:bottom-0 after:left-0">
        <div ref="navContent" class="flex w-full justify-between items-center">
            <p class="text-secondary text-2xl">mayweda <br /> Dev</p>
            <div class="flex  gap-x-6 before:h-full relative before:w-px before:left-[50%] before:bg-secondary before:absolute">
                <p class="text-accent before:duration-300 before:w-0 hover:before:w-full before:absolute before:h-px before:bg-secondary relative before:-bottom-1 hover:text-secondary duration-300 text-lg">about</p>
                <p class="text-accent before:duration-300 before:w-0 hover:before:w-full before:absolute before:h-px before:bg-secondary relative before:-bottom-1 hover:text-secondary duration-300 text-lg">works</p>
            </div>
            <p class="text-accent text-[14px] uppercase">Lagos, NG 5:19PM</p>
        </div>
    </nav>
    <div class="w-full h-[500px] flex  overflow-hidden">
        <div class="mx-auto my-auto w-[600px] relative z-10 ">
            <h6 class="text-secondary ml-10 name">Hello I'm</h6>
            <h1 class="text-secondary font-clash text-center text-7xl font-700 md:text-9xl uppercase font-bold inline-block name">Onuche Enyo</h1>
            <floating-bubble position="top-5 -left-10"></floating-bubble>
            <floating-bubble position="-bottom-7 -left-10"></floating-bubble>
            <floating-bubble position="bottom-24 -right-5"></floating-bubble>
            <floating-bubble position="bottom-0 -right-24"></floating-bubble>
        </div>
    </div>
    <marquee-name />
    <section-wrapper name="ABOUT" position="right">
        <div class="w-full flex flex-col py-16">
            <p class="px-8 mx-auto my-2 anim-text text-secondary w-full text-[18px] font-syne  max-w-[720px]">Hello!. My name is Enyo. I'm a dedicated Fullstack developer that works with current web technologies such as React, Vue and Node and so on.  
            </p>
            <p class="px-8 mx-auto my-2 anim-text text-secondary w-full text-[18px] font-syne  max-w-[720px]"> I first had interest in programming due to video games as I've always wanted to 
                understand how computer games and programs are made. Fast forward today and I'm a 
                Fullstack developer.
            </p>
            <p class="px-8 mx-auto my-2 anim-text text-secondary w-full text-[18px] font-syne max-w-[720px]">I have a solid understanding of Bootstrap, Jquery, React, Angular, 
                Vue and Typescript. My goal is to gain enough experience to be one of the best software engineers
                in my community. My main focus is letting my work standout while being different and I'm very committed to my work.
            </p>
        </div>
    </section-wrapper>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import FloatingBubble from './FloatingBubble.vue'
import MarqueeName from './MarqueeName.vue';
import SectionWrapper from './SectionWrapper.vue';
import SplitType from "split-type"
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
    components: {
        FloatingBubble,
        MarqueeName,
        SectionWrapper
    },
    setup(){
        const header = ref<HTMLElement>()
        const navContent = ref<HTMLDivElement>()
        const t1 = gsap.timeline()
        gsap.registerPlugin(ScrollTrigger)
        onMounted(() => {
            const headerText = new SplitType(".name", {types: "words, chars"})
            const animText = new SplitType('.anim-text', {types: "lines, words"})

            t1.from('.name .char', {yPercent: 130,
                opacity: 0,
                stagger: 0.08,
                ease: "back.out"
            }).from('.bubble', {
                y: 60,
                // x: 30,
                opacity: 0,
                duration: 0.6,
                ease: "back.out"
            })
            .from('#marquee', {
                yPercent: 100,
                opacity: 0 
            }, "<")
            //@ts-ignore
            .from([...navContent.value?.children], {
                yPercent: -100,
                stagger: 0.2,
                opacity: 0
            })
            .to('nav', {
                '--divider-width': '100%',
                duration: 0.8
            })
             

            gsap.from('.anim-text .word', { 
                duration: 1,
                yPercent: 110,
                stagger: {
                    amount: 2.5
                },
                ease: 'Power1.easeInOut',
                scrollTrigger: {
                    trigger: ".anim-text",
                    start: "top 75%",
                    end: "top 80%",
                }
            })
        })

        return{
            header,
            navContent
        }
    }
})
</script>

<style>

    nav{
        --divider-width: 0
    }
    nav::after{
        width: var(--divider-width);
    }

    .name .word, .anim-text .line{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        
    }

    

</style>
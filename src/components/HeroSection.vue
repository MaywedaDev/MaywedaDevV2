<template>
    <nav class=" w-full px-10 py-3 after:absolute after:bg-grey-100 relative after:w-full after:h-[2px] after:bottom-0 after:left-0">
        <ul class="flex w-full justify-between items-center">
            <li class="text-secondary text-[14px] uppercase" ><p>Mayweda <br /> Dev</p></li>
            <li class="text-accent text-[14px] uppercase">Fullstack Developer <br /> Portfolio 2021 - 2023</li>
            <li class="text-accent text-[14px] uppercase">Available for freelance <br />work from April 2023</li>
            <li class="text-accent text-[14px] uppercase">Lagos, NG 5:19PM</li>
        </ul>
    </nav>
    <div class="w-full h-[500px] flex  overflow-hidden">
        <div class="mx-auto my-auto w-[600px] relative z-10 ">
            <h6 class="text-secondary ml-10 name">Hello I'm</h6>
            <h1 class="text-secondary font-clash text-center text-8xl md:text-9xl uppercase font-bold inline-block name">Onuche Enyo</h1>
            <floating-bubble position="top-5 -left-10"></floating-bubble>
            <floating-bubble position="-bottom-7 -left-10"></floating-bubble>
            <floating-bubble position="bottom-24 -right-5"></floating-bubble>
            <floating-bubble position="bottom-0 -right-24"></floating-bubble>
        </div>
    </div>
    <marquee-name />
    <section-wrapper name="ABOUT" position="right">
        <div class="w-full flex py-16">
            <p class="text-center px-8 mx-auto text-secondary text-[18px] font-syne max-w-[720px]">Hello!. My name is Enyo. I'm a dedicated Fullstack developer that works with current web technologies such as React, Vue and Node and so on. <br>
                <br>I first had interest in <span>programming</span> due to video games as I've always wanted to 
                understand how computer games and programs are made. Fast forward today and I'm a <span>
                Fullstack developer</span>. I have a solid understanding of Bootstrap, Jquery, React, Angular, 
                Vue and Typescript.<br><br> My goal is to gain enough experience to be one of the best software engineers
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

export default defineComponent({
    components: {
        FloatingBubble,
        MarqueeName,
        SectionWrapper
    },
    setup(){
        const header = ref<HTMLElement>()
        const t1 = gsap.timeline()
        onMounted(() => {
            const headerText = new SplitType(".name", {types: "words, chars"})

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



        })

        return{
            header
        }
    }
})
</script>

<style>

    .name .word{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        
    }

    

</style>
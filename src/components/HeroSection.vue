<template>
    <nav class=" w-full px-10 py-3 after:absolute after:bg-grey-100 relative after:w-full after:h-[2px] after:bottom-0 after:left-0">
        <ul class="flex w-full justify-between items-center">
            <li class="text-secondary  text-[14px] uppercase" ><p>Mayweda <br /> Dev</p></li>
            <li class="text-accent text-[14px] uppercase">Fullstack Developer <br /> Portfolio 2021 - 2023</li>
            <li class="text-accent text-[14px] uppercase">Available for freelance <br />work from April 2023</li>
            <li class="text-accent text-[14px] uppercase">Lagos, NG 5:19PM</li>
        </ul>
    </nav>
    <div class="w-full h-[500px] flex">
        <div class="mx-auto my-auto max-w-fit relative z-10">
            <h6 class="text-secondary ml-10">Hello I'm</h6>
            <h1 class="text-secondary text-center text-9xl uppercase font-bold inline-block">Onuche <br/> Enyo</h1>
            <floating-bubble position="top-5 -left-10"></floating-bubble>
            <floating-bubble position="-bottom-7 -left-10"></floating-bubble>
            <floating-bubble position="bottom-24 -right-5"></floating-bubble>
            <floating-bubble position="bottom-0 -right-24"></floating-bubble>
        </div>
    </div>
    <marquee-name />
    <div class="w-full flex">
        <div class="max-w-[720px] mx-auto py-20 relative before:absolute before:content-['ABOUT'] before:text-secondary 
    before:right-0 before:top-0 before:text-[14px]">
            <p class="text-center text-secondary text-[18px] font-syne">Hello!. My name is Enyo. I'm a dedicated Fullstack developer that works with current web technologies such as React, Vue and Node and so on. <br>
                <br>I first had interest in <span>programming</span> due to video games as I've always wanted to 
                understand how computer games and programs are made. Fast forward today and I'm a <span>
                Fullstack developer</span>. I have a solid understanding of Bootstrap, Jquery, React, Angular, 
                Vue and Typescript.<br><br> My goal is to gain enough experience to be one of the best software engineers
                in my community. My main focus is letting my work standout while being different and I'm very committed to my work. 
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FloatingBubble from './FloatingBubble.vue'
import MarqueeName from './MarqueeName.vue';

export default defineComponent({
    components: {
        FloatingBubble,
        MarqueeName
    }
})
</script>
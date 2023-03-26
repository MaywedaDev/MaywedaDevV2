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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FloatingBubble from './FloatingBubble.vue'

export default defineComponent({
    components: {
        FloatingBubble
    }
})
</script>
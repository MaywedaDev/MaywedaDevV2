<template>
    <div class="w-full py-4">
        <div class="flex mt-8">
            <curved-text class="ml-auto"/>
        </div>
        <div class="flex w-full my-6">
            <p class="max-w-[450px] text-xl text-white mx-auto text-center">Got a question, proposal or want to work together on something? Feel free to reach out.</p>
        </div>
        <div class="flex flex-col">
            <h1 class="text-5xl md:text-7xl lg:text-8xl text-white uppercase text-center font-bold my-4">Have a project in mind?</h1>
            <ul class="w-[250px] flex justify-between uppercase text-white my-4 mx-auto text-xl">
                <li>EM</li>
                <li>TW</li>
                <li>LN</li>
                <li>GH</li>
                <li>CD</li>
            </ul>
        </div>
        <div class="flex w-full justify-between mt-10">
            <p class="text-white">Designed by <span class="text-accent">Gideon</span></p>
            <p class="text-white">Back to Top</p>
            <p class="text-white">MWD2023</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CurvedText from './CurvedText.vue';


export default defineComponent({
    components: {
        CurvedText
    },
    setup(){

    }
}) 
</script>
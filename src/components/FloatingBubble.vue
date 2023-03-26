<template>
    <div class="absolute w-[72px] h-[72px] bg-gradient-to-r from-grad-white to-grad-purple rounded-3xl -z-10 rotate-[-22deg]" :class="position"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            position: {
                type: String,
                required: true 
            }
        }
    })
</script>
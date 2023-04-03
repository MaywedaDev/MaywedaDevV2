<template>
    <div class="relative before:absolute before:top-0 before:text-secondary before:text-2xl  before:z-10 before:bg-body 
    after:absolute after:w-full after:top-3 after:left-0 after:h-px after:bg-secondary after:z-0 mqscroll" 
    :class="` ${ position === 'right' ? 'before:right-40' : 'before:left-40' }`" ref="mqScroll">
        <slot ></slot>
    </div>
</template>

<!--  -->

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import gsap from "gsap"

export default defineComponent({
    props: {
        name: {
            type: String,
            default: 'Unknown'
        },
        position: {
            type: String,
            default: "left"
        }
    },
    setup(props){

        const mqScroll = ref()
        onMounted(() => {
            gsap.set(mqScroll.value, {
                "--section-name": `'${props.name}'`
            })
        })

        return {
            mqScroll
        }
    }
})
</script>

<style>
    .mqscroll{
        --section-name: '';
    }
    .mqscroll::before{
        content: var(--section-name);
        position: absolute;
    }
</style>
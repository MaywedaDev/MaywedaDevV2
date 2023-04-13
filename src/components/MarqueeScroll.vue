<template>
    <div class="border-b border-secondary w-full py-10 " >
        <div class="overflow-hidden">
            <p ref="name" class="text-7xl text-secondary uppercase">{{ title }}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


    export default defineComponent({
        props:{
            title: {
                type: String,
                required: true
            }
        }, 
        setup(){
            const name = ref()

            

            gsap.registerPlugin(ScrollTrigger)
            onMounted(() => {

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: name.value,
                        start: "top 95%",
                        end: "top 5%",
                        scrub: 4,
                    }
                })

                gsap.set(name.value, {
                   xPercent: -10 
                })

                tl.to(name.value, {
                    xPercent: 60,
                    ease: "Power1.easeOut"
                })

                
            })

            return{
                name
            }
        }
    })
</script>
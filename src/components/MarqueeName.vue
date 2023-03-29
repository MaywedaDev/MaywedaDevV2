<template>
    <div class="border border-white py-3 h-[62px] w-full overflow-hidden">
        <div ref="marquee" class="flex justify-between relative">
            <p v-for="el in 7" class="w-[250px] uppercase text-3xl text-secondary absolute -left-[250px]">Mayweda Dev</p>
        </div>
    </div>
</template>

<script lang="ts">
import gsap from 'gsap'
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    setup(){
        const marquee = ref<HTMLElement>()

        const totalWidth = 250 * 7

        const mod = gsap.utils.wrap(0, totalWidth)

        onMounted(() => {

            const boxes = marquee.value?.querySelectorAll('p')

            // gsap.set(marquee.value, {
            //     xPercent: 25
            // })

            gsap.set(boxes, {
            x: function(i){
                return i * 250
            }
        })

        gsap.to(boxes, {
            x: '+=' + totalWidth,
            modifiers: {
                x: x => mod(parseFloat(x)) + "px"
            },
            duration: 8,
            ease: "none",
            repeat: -1
            })
        })

        return {
            marquee
        }
    }
})
</script>
<template>
  <div class="py-3 h-[98px] w-full overflow-hidden" id="marquee">
    <div ref="marquee" class="flex justify-between relative">
      <div
        v-for="el in 5"
        class="w-[700px] absolute -left-[700px] flex items-center"
      >
        <p class="uppercase text-7xl text-body font-semibold font-clash">
          Mayweda Dev
        </p>
        <star-icon class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from "gsap";
import { defineComponent, onMounted, ref } from "vue";
import StarIcon from "./StarIcon.vue";

export default defineComponent({
  components: {
    StarIcon,
  },
  setup() {
    const marquee = ref<HTMLElement>();

    const totalWidth = 700 * 5;

    const mod = gsap.utils.wrap(0, totalWidth);

    onMounted(() => {
      const boxes = marquee.value?.querySelectorAll("div");

      // gsap.set(marquee.value, {
      //     xPercent: 25
      // })
      // @ts-ignore
      gsap.set(boxes, {
        x: function (i) {
          return i * 700;
        },
      });
      // @ts-ignore
      gsap.to(boxes, {
        x: "+=" + totalWidth,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    });

    return {
      marquee,
    };
  },
});
</script>

<style scoped>
p {
  text-shadow: 1px 1px rgb(217, 217, 217), -1px -1px rgb(217, 217, 217);
}
</style>

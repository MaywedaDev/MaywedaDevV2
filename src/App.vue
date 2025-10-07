<template>
  <div class="min-h-screen bg-body overflow-hidden text-white">
    <router-view />
    <div class="custom-cursor">
      <div ref="cursorDot" class="cursor-dot"></div>
      <div ref="cursorOutline" class="cursor-outline"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

const cursorDot = ref<HTMLDivElement>();
const cursorOutline = ref<HTMLDivElement>();

onMounted(() => {
  window.scrollTo(0, 0);

  document.addEventListener("mousemove", (e) => {
    if (cursorDot.value && cursorOutline.value) {
      cursorDot.value.style.left = e.clientX + "px";
      cursorDot.value.style.top = e.clientY + "px";

      gsap.to(cursorOutline.value, {
        duration: 0.5,
        left: e.clientX + "px",
        top: e.clientY + "px",
      });
    }
  });
});
</script>

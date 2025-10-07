<template>
  <div ref="root"><slot /></div>
</template>
<script setup lang="ts">
import Lenis from "lenis";
import { onMounted, onUnmounted, ref } from "vue";
const root = ref<HTMLElement | null>(null);
let lenis: Lenis | null = null;
const initLenis = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 2,
  });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
};
const cleanupLenis = () => {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
};
onMounted(() => {
  initLenis();
});
onUnmounted(() => {
  cleanupLenis();
});
</script>

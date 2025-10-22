<template>
  <LenisWrapper>
    <div class="min-h-screen bg-body overflow-hidden text-white">
      <router-view />
      <div class="custom-cursor">
        <div ref="cursorDot" class="cursor-dot"></div>
        <div ref="cursorOutline" class="cursor-outline"></div>
      </div>
    </div>
  </LenisWrapper>
</template>

<script setup lang="ts">
import LenisWrapper from "./components/LenisWrapper.vue";
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";

const cursorDot = ref<HTMLDivElement>();
const cursorOutline = ref<HTMLDivElement>();

document.documentElement.scrollTop = 0;

const onWindowLoad = () => {
  window.scrollTo(0, 0);
};

const onMouseMove = (e: MouseEvent) => {
  if (cursorDot.value && cursorOutline.value) {
    const x = e.clientX + "px";
    const y = e.clientY + "px";
    cursorDot.value.style.left = x;
    cursorDot.value.style.top = y;

    gsap.to(cursorOutline.value, {
      duration: 0.5,
      left: x,
      top: y,
    });
  }
};

onMounted(() => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.addEventListener("load", onWindowLoad);
  document.addEventListener("mousemove", onMouseMove);
});

onUnmounted(() => {
  // restore default browser behavior and remove event listeners
  if ("scrollRestoration" in history) {
    try {
      history.scrollRestoration = "auto";
    } catch (e) {
      // some browsers may throw in certain contexts; ignore
    }
  }

  window.removeEventListener("load", onWindowLoad);
  document.removeEventListener("mousemove", onMouseMove);
});
</script>

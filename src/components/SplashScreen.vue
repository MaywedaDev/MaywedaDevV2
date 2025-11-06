<template>
  <div
    v-if="visible"
    ref="root"
    class="splash"
    role="status"
    aria-label="Splash screen"
  >
    <div ref="nameRef" class="authorName">{{ name }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import useSplashScreenStatus from "../composables/useSplashScreenStatus";

const { setSplashScreenFinished } = useSplashScreenStatus();

const name = "Mayweda Dev"; // change to your preferred display name
const root = ref(null);
const nameRef = ref(null);
const visible = ref(true);

let onWindowLoad;

onMounted(() => {
  // Intro animation (plays immediately on mount)
  gsap.from(nameRef.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });

  // When the window is fully loaded, animate the name sliding up and remove the splash
  onWindowLoad = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        visible.value = false;
        // console.log("splash animation complete");
        setSplashScreenFinished();
      },
    });

    // slide the name up out of the viewport
    tl.to(nameRef.value, { y: "-120vh", duration: 1.1 });
    // fade and slightly scale the background for smoother transition
    tl.to(root.value, { opacity: 0, duration: 0.6 }, 0.7);
  };

  // If the load already fired before this component mounted, window.onload may not fire.
  // Use readyState check to handle that case.
  if (document.readyState === "complete") {
    // give a tiny delay so the intro is visible briefly
    // console.log("window already loaded");
    setTimeout(() => onWindowLoad(), 200);
  } else {
    console.log("adding window load listener");
    window.addEventListener("load", onWindowLoad);
  }

  return () => {
    // console.log("cleaning up splash screen listeners --");
    if (onWindowLoad) window.removeEventListener("load", onWindowLoad);
  };
});
</script>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 9999;
  background: #0a0a0a;
  color: white;
  will-change: transform, opacity;
  overflow: hidden;
}

.authorName {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  line-height: 1;
  font-size: clamp(2.2rem, 6vw, 6rem);
  transform-origin: center;
  will-change: transform, opacity;
  padding: 0.25rem 0.5rem;
  user-select: none;
  pointer-events: none;
}
</style>

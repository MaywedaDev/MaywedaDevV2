<template>
  <LenisWrapper>
    <div style="min-height: 100vh" class="bg-body text-white">
      <router-view />
      <div class="custom-cursor">
        <div ref="cursorDot" class="cursor-dot"></div>
        <div ref="cursorOutline" class="cursor-outline"></div>
      </div>

      <StaggeredMenu
        position="right"
        class="fixed sm:hidden top-0 left-0 right-0 bottom-0 z-[9999]"
        :items="menuItems"
        :social-items="socialItems"
        :display-socials="true"
        :display-item-numbering="true"
        menu-button-color="#E11717"
        open-menu-button-color="#E11717"
        :change-menu-color-on-open="true"
        :colors="['#0A0A0A', '#E11717']"
        logo-url="/src/assets/vue.svg"
        accent-color="#E11717"
      />
    </div>
  </LenisWrapper>
</template>

<script setup lang="ts">
import StaggeredMenu from "./components/vuebits/StaggeredMenu.vue";
import LenisWrapper from "./components/LenisWrapper.vue";
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";

const cursorDot = ref<HTMLDivElement>();
const cursorOutline = ref<HTMLDivElement>();

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

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Services", ariaLabel: "View our services", link: "#projects" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

// const handleMenuOpen = () => console.log("Menu opened");
// const handleMenuClose = () => console.log("Menu closed");

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

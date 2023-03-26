
<template>
  <div class="min-h-screen bg-body">
    <hero-section />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
import HeroSection from "./components/HeroSection.vue";

  export default defineComponent({
    components: {
      HeroSection
    }
  })
</script>



<template>
  <div class="min-h-screen bg-body">
    <home-page />
    
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

import HomePage from "./components/HomePage.vue";

  export default defineComponent({
    components: {
      HomePage
    }
  })
</script>


<template>
  <div class="min-h-screen bg-body overflow-hidden text-white">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

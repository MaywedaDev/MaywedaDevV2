<template>
  <div class="w-100 py-10 px-[112px] flex flex-col">
    <h2 class="text-red text-[64px] tBebas">Selected Works</h2>
    <p class="max-w-[420px]">
      Lorem ipsum dolor sit amet consectetur. Risus tortor dignissim viverra
      vulputate. Aliquet est dignissim malesuada sed vestibulum quisque.
    </p>

    <div
      class="w-100 my-10 grid grid-cols-[repeat(2,_minmax(360px,_600px))] mx-auto gap-8"
    >
      <project-card v-for="(item, i) in 6" :key="i" />
    </div>

    <button
      class="border-2 border-red py-2 px-4 bg-transparent uppercase rounded-3xl mx-auto"
    >
      SHOW MORE
    </button>
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
</script>

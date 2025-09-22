<template>
  <div
    class="w-100 max-w-[600px] p-5 bg-cardBg rounded-lg flex flex-col gap-y-4 project-card cursor-pointer"
  >
    <div class="w-100 rounded-md bg-contentBg h-[395px]">
      <img
        v-if="project?.image"
        :src="project.image"
        class="w-full h-full object-cover"
        :alt="project.name + '`s image '"
      />
    </div>
    <div class="flex justify-between items-end">
      <div>
        <h4 class="tBebas text-[32px]">
          {{ project?.name || "Title of website" }}
        </h4>
        <span>{{
          project?.desc || "Lorem ipsum dolor sit amet consectetur."
        }}</span>
      </div>
      <a
        class="text-red hover:text-[#ff4949] uppercase underline"
        :href="project?.link || ''"
        >Open project</a
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object,
  },
});
</script>

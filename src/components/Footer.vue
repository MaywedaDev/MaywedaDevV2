<template>
  <div class="w-full">
    <div class="h-[500px] grid place-content-center">
      <FuzzyText
        :text="fuzzyText"
        :font-size="80"
        font-weight="900"
        color="#E11717"
        :enable-hover="true"
        :base-intensity="0.18"
        :hover-intensity="0.5"
      />
    </div>

    <div class="w-full py-4 px-[112px]">
      <div class="flex w-full justify-between mt-10">
        <p class="text-white">
          Designed by <span class="text-accent text-red">Gideon</span>
        </p>
        <p class="text-white">Back to Top</p>
        <p class="text-white">MWD2025</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FuzzyText from "./FuzzyText.vue";

// Got a question, proposal or want to work together on something? Feel
//           free to reach out.

const fuzzyText = "PROJECT IN MIND?";
</script>

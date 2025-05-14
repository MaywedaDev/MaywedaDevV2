<template>
  <section-wrapper title="HAVE A PROJECT IN MIND? LET’S TALK." class="bg-body">
    <template #content>
      <div class="flex flex-col justify-end">
        <p class="max-w-[450px] text-xl text-white mx-auto text-center">
          Got a question, proposal or want to work together on something? Feel
          free to reach out.
        </p>
        <ul
          class="w-[250px] flex justify-between uppercase text-white my-4 mx-auto text-xl underline"
        >
          <li>EM</li>
          <li>TW</li>
          <li>LN</li>
          <li>GH</li>
          <li>CD</li>
        </ul>
      </div>
    </template>
  </section-wrapper>

  <div class="w-full py-4 px-[112px]">
    <div class="flex w-full justify-between mt-10">
      <p class="text-white">
        Designed by <span class="text-accent text-red">Gideon</span>
      </p>
      <p class="text-white">Back to Top</p>
      <p class="text-white">MWD2025</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CurvedText from "./CurvedText.vue";
import SectionWrapper from "./SectionWrapper.vue";
</script>

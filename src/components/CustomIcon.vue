<template>
  <div @click="toLink" class="relative group inline-flex">
    <Icon
      :icon="name"
      :class="[
        'duration-500',
        className || 'text-[28px] text-red hover:text-white',
      ]"
    />
    <span
      v-if="alt"
      class="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
    >
      {{ alt }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});

const toLink = () => {
  if (props.href) {
    window.open(props.href, "_blank");
  }
};
</script>

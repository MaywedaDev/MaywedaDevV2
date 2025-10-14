<template>
  <div
    class="w-100 max-w-[600px] px-4 py-8 bg-[rgba(225_,23_,23_,0.02)] border border-borderRed rounded-lg flex flex-col project-card cursor-pointer"
  >
    <div class="flex gap-3 text-[12px] mb-2">
      <CustomIcon
        name="streamline-freehand:worldwide-web-browser"
        alt="Frontend"
        className="text-[20px] text-red"
      />
      <CustomIcon
        name="streamline-freehand:server-2"
        alt="Backend"
        className="text-[20px] text-red"
      />
      <CustomIcon
        name="iconoir:database-solid"
        alt="Database"
        className="text-[20px] text-red"
      />
      <CustomIcon
        name="duo-icons:android"
        alt="Android"
        className="text-[20px] text-red"
      />
      <CustomIcon
        name="fa6-brands:apple"
        alt="iOS"
        className="text-[20px] text-red"
      />
    </div>

    <div class="space-y-1 mb-4">
      <h3 class="text-white text-xl font-semibold">
        {{ project?.name || "Your Project Name" }}
      </h3>
      <p class="text-[14px] text-red">
        {{
          project?.intro ||
          "A brief description of your project goes here. Highlight key features and technologies used."
        }}
      </p>
    </div>

    <p class="text-[14px] text-zinc-500 flex-grow mb-2">
      {{
        project?.desc ||
        "This is a placeholder for the project description. You can provide more details about the project, its purpose, and any challenges you overcame during development."
      }}
    </p>
    <div class="flex gap-x-2 mb-3">
      <CustomIcon
        v-for="(icon, i) in icons"
        :key="i"
        :name="icon.name"
        :alt="icon.alt"
      />
    </div>
    <!-- <div class="flex mb-2">
      <div class="flex space-x-1 w-full">
        <icon
          icon="iwwa:year"
          class="text-red text-[28px] hover:text-white duration-500"
        />
        <span class="text-lg">2024</span>
      </div>
      <div class="flex space-x-1 w-full">
        <icon
          icon="ri:progress-3-line"
          class="text-red text-[28px] hover:text-white duration-500"
        />
        <span class="text-lg">In Progress</span>
      </div>
    </div> -->
    <div class="flex gap-3 justify-end">
      <a :href="project?.link || '#'" target="_blank" class="">
        <CustomIcon
          name="streamline-freehand:website-development-browser-source-code"
          alt="Project Website"
          className="text-[40px] text-red hover:text-white"
        />
      </a>
      <a href="#" class="">
        <CustomIcon
          name="line-md:github-loop"
          alt="GitHub Repository"
          className="text-[40px] text-red hover:text-white"
        />
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CustomIcon from "./CustomIcon.vue";

type Project = {
  name: string;
  image: string;
  link: string;
  desc?: string;
  intro?: string;
};

const props = defineProps({
  project: {
    type: Object as () => Project,
  },
});

const icons = [
  {
    name: "mdi:react",
    alt: "React.js",
  },
  {
    name: "mdi:vuejs",
    alt: "Vue.js",
  },
  {
    name: "fa6-brands:node",
    alt: "Node.js",
  },
  {
    name: "mdi:tailwind",
    alt: "Tailwind CSS",
  },
];
</script>

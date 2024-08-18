<script setup lang="ts">
import { withBase } from 'vitepress';

const props = defineProps(['title', 'description', 'href', 'image'])

const { title, description, href, image } = props

</script>

<!-- https://tailwindflex.com/@conan-hilton/tailwind-card -->
<template>
  <div class="bg-white rounded-lg overflow-hidden w-full relative shadow hover:shadow-lg hover:shadow-gray-400">
    <a :href="href" target="_blank" style="text-decoration: none; color: inherit;">
      <img :src="withBase(image)" alt="Description" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p class="leading-tight">{{ description }}</p>
      </div>
    </a>
  </div>

</template>

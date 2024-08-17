<script setup lang="ts">
import { withBase } from 'vitepress';

const props = defineProps(['title', 'description', 'href', 'image'])

const { title, description, href, image } = props

</script>

<!-- https://tailwindflex.com/@conan-hilton/tailwind-card -->
<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full relative">
    <a :href="href" target="_blank" style="text-decoration: none; color: inherit;">
      <img :src="withBase(image)" alt="Description" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p class="leading-tight">{{ description }}</p>
      </div>
    </a>
  </div>

</template>

<style lang="css" scoped>
.card {
  display: flex;
  /* border-radius: 5px; */
  /* padding: 15px; */
  /* margin-bottom: 20px; */
  align-items: center;
  justify-content: center;
  /* object-fit: cover; */
  position: relative;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 2px 5px rgb(128, 128, 128);
}

.card-image {
  object-fit: fill;
}

/* .card-image:hover {
  box-shadow: 0px 2px 5px rgb(128, 128, 128);
} */

.card-content {
  /* position: absolute; */
  /* Position the content absolutely within the card */
  /* bottom: 8px;
  left: 15px;
  right: 15px;
  padding: 10px;
  margin-top: 10px; */
  text-align: center;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0.63);
  /*Add a semi-transparent background*/
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 20px 20px 20px 20px;
  color: #333;
}

.card-text {
  font-size: 0.9em;
  line-height: 1.5;
  margin: 20px 20px 20px 20px;
  color: #333;
}
</style>

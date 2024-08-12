<script setup lang="ts">
import { defineProps } from 'vue'
import { withBase } from 'vitepress';

const props = defineProps(['title', 'description', 'href', 'image'])

const { title, description, href, image } = props

</script>

<template>
  <a :href="href" target="_blank" style="text-decoration: none; color: inherit;">
    <div class="card">  
      <button type="button" class="button-card-image" :href="href"><img :src="withBase(image)" alt="Image description" class="card-image"/></button>
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>//
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
    
  </a>
</template>

<style lang="css" scoped>
.card {
  display: flex;
  flex-direction: column;
  /* border: 3px solid #ccc; */
  border: 0px 2px 5px solid gray;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  max-width: 200px;
  max-height: ;
  
}

.card:hover{
  box-shadow: 0px 2px 5px gray;
}
.card-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card-content {
  margin-top: 10px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
}

.card-text {
  font-size: 0.9em;
  line-height: 1.5;
}

.button-card-image{
  align-items: center;
  
}
</style>
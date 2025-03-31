<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme, { VPImage } from 'vitepress/theme'

const { Layout } = DefaultTheme
const { frontmatter: fm } = useData()

</script>

<template>
  <Layout>
    <template #home-hero-image class="relative">
      <VPImage :image="fm.hero.image"
        class="grid grid-cols-2 gap-0 z-0 object-fit-cover content-center absolute md:max-sm top-0 left-8 w-11/12 animate-float" />
    </template>
    
  </Layout>
</template>
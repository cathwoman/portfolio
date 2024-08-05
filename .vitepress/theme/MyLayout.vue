<script setup>
import DefaultTheme, { VPImage } from 'vitepress/theme'
import { withBase } from 'vitepress';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <img :src="withBase($frontmatter.hero.image1.src)" :alt="$frontmatter.hero.image1.alt" class="VPImage1"/>
      <img :src="withBase($frontmatter.hero.image2.src)" :alt="$frontmatter.hero.image2.alt" class= "VPImage2"/>
    </template>
    
    
    
  </Layout>
</template>

<style lang="css">
.VPNavBarTitle .title {
  margin-left: 30%;
}
</style>
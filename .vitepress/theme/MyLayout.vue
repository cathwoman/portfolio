<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme, { VPImage } from 'vitepress/theme'

const { Layout } = DefaultTheme
const { frontmatter: fm } = useData()

</script>

<template>
  <Layout>
    <template #home-hero-image>
      <VPImage :image="fm.hero.image1" class="VPImage1" />
      <VPImage :image="fm.hero.image2" class="VPImage2" />
    </template>
  </Layout>
</template>

<style lang="css">
.VPNavBarTitle .title {
  margin-left: 30%;
}
</style>
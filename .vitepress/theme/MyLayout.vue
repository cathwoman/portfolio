<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme, { VPImage } from 'vitepress/theme'

const { Layout } = DefaultTheme
const { frontmatter: fm } = useData()

</script>

<template>
  <Layout>
    <template #home-hero-image class="relative bottom: 0px">
      <VPImage :image="fm.hero.image1" class="grid grid-cols-2 gap-0 z-0 object-fit-cover content-center absolute md:max-sm top-0 left-8 w-11/12" />
      <VPImage :image="fm.hero.image2" class="grid grid-cols-2 gap-0 z-10 object-fit-cover content-center absolute md: max-sm top-20 left-40 w-9/12 " />
    </template>
  </Layout>
</template>

<style lang="css">
.VPNavBarTitle .title {
  margin-left: 30%;
}
</style>
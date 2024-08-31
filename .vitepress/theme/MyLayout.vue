<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme, { VPImage } from 'vitepress/theme'

import RotatingText from '../../components/RotatingText.vue';

const { Layout } = DefaultTheme
const { frontmatter: fm } = useData()

</script>

<template>
  <Layout>
    <template #home-hero-info>
      <p>Coucou</p>
      <RotatingText :words="fm.hero.words" />
    </template>
    <template #home-hero-image class="relative bottom: 0px">
      <VPImage :image="fm.hero.image1"
        class="grid grid-cols-2 gap-0 z-0 object-fit-cover content-center absolute md:max-sm top-0 left-8 w-11/12 animate-float" />
      <VPImage :image="fm.hero.image2"
        class="grid grid-cols-2 gap-0 z-10 object-fit-cover content-center absolute md: max-sm top-40 left-44 w-9/12 animate-float animate-delay-1000" />
    </template>

  </Layout>
</template>
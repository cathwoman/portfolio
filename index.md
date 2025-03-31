---
layout: page
sidebar: false

---

<div class="px-6 md:px-12">
  <div class="py-6 md:py-12 h-[calc(100vh-64px)] overflow-auto relative">
    <div class="flex h-full flex-col md:flex-row gap-12 md:gap-20 justify-center">
      <div class="flex justify-center items-center">
        <div class="flex flex-col max-w-xl items-center justify-center">
          <h1 class="text-4xl font-bold mb-4">Designer UX/UI</h1>
          <p class="text-4xl font-bold mb-4 text-secondary text-center">Des experiences uniques, comme votre business</p>
          <p class="text-lg text-gray-700 mb-8 text-center">Des experiences uniques, comme votre business</p>
          <div class="flex flex-row gap-4 lg:gap-5">
            <VPButton theme="brand" text="Explorer mes realisations" href="#Mes Realisations"/>
            <VPButton theme="alt" text="Me contacter" href="https://www.linkedin.com/in/catherinevu436-78/"/>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center relative">
        <VPImage image="/ui_ux_designer.png" alt="UI UX Designer" class="z-1 w-96 h-96"/>
        <VPImage image="/hero_image_background.png" alt="background_shape" class="-z-10 w-96 h-96 absolute"/>
      </div>
    </div>
    <div class="absolute bottom-4 md:bottom-20 left-1/2 -translate-x-1/2">
      <a href="#Mes Realisations">
        <VPImage image="/down_arrow.png" class="hidden md:flex w-14 h-14"/>
      </a>
    </div>
  </div>
  <div>
    <h2 id="Mes Realisations" class="text-3xl text-center font-bold mb-4">Mes realisations</h2>
  </div>
</div>



<script setup lang="ts">
    import { VPButton } from 'vitepress/theme'
    import { VPImage } from 'vitepress/theme'
</script>
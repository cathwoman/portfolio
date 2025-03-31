---
layout: page
sidebar: false

---

<div class="px-6 pb-12 md:px-12">
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
  <div class="w-full h-full flex flex-col items-center justify-center">
    <h2 id="Mes Realisations" class="text-3xl text-center font-bold mb-4">Mes realisations</h2>
    <Carousel class="w-full" :opts="{ loop: true }" :plugins="[Autoplay({delay: 4000})]">
      <CarouselContent>
        <CarouselItem v-for="item in carousel_items" :key="item.href" class="basis-3/5">
          <div class="p-1">
            <AspectRatio :ratio="16 / 9">
              <VPImage :image="item.img"/>
            </AspectRatio>
            <!-- <Card>
              <CardContent class="flex items-center justify-center p-6 h-[720px]">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card> -->
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</div>



<script setup lang="ts">
  import { VPButton } from 'vitepress/theme'
  import { VPImage } from 'vitepress/theme'
  import { Card, CardContent } from '@/components/ui/card'
  import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
  import { AspectRatio } from '@/components/ui/aspect-ratio'
  import Autoplay from 'embla-carousel-autoplay'

  const carousel_items = [
    {
      img: "/Accueil_sizodor.png",
      href: "",
    },
    {
      img: "/Accueil_the.png",
      href: "",
    },
    {
      img: "/Accueil_mariee_sauvage_coupe.webp",
      href: "",
    }
  ]
</script>
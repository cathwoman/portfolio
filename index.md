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
    <Carousel class="w-full" :opts="{ loop: true }" :plugins="[Autoplay({delay: 4000})]" @init-api="setApi">
      <CarouselContent>
        <CarouselItem v-for="item in carousel_items" :key="item.href" class="embla__slide__number basis-4/5 md:basis-3/5">
            <Card>
              <CardContent class="flex items-center justify-center">
                  <AspectRatio :ratio="16 / 9">
                  <a :href="item.href">
                    <VPImage :image="item.img" class="object-fill"/>
                  </a>
                  </AspectRatio>
              </CardContent>
            </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</div>



<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ref, onUnmounted, watch } from 'vue'
import { VPButton, VPImage } from 'vitepress/theme'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { watchOnce } from '@vueuse/core'

const api = ref<CarouselApi>()

function setApi(val: CarouselApi) {
  api.value = val
}

const TWEEN_FACTOR_BASE = 0.52
let tweenFactor = 0
let tweenNodes: HTMLElement[] = []

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const setTweenNodes = (emblaApi: EmblaCarouselType): void => {
  tweenNodes = emblaApi.slideNodes()
}

const setTweenFactor = (emblaApi: EmblaCarouselType): void => {
  tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
}

const tweenScale = (
  emblaApi: EmblaCarouselType,
  eventName?: EmblaEventType
): void => {
  const engine = emblaApi.internalEngine()
  const scrollProgress = emblaApi.scrollProgress()
  const slidesInView = emblaApi.slidesInView()
  const isScrollEvent = eventName === 'scroll'

  emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
    let diffToTarget = scrollSnap - scrollProgress
    const slidesInSnap = engine.slideRegistry[snapIndex]

    slidesInSnap.forEach((slideIndex) => {
      if (isScrollEvent && !slidesInView.includes(slideIndex)) return

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()

          if (slideIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target)

            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress)
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress)
            }
          }
        })
      }

      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor)
      const scale = numberWithinRange(tweenValue, 0, 1).toString()
      const tweenNode = tweenNodes[slideIndex]
      console.log('tweenNode', tweenNode)
      tweenNode.style.transform = `scale(${scale})`
    })
  })
}

watchOnce(api, (api) => {
  if (!api)
    return

  setTweenNodes(api)
  setTweenFactor(api)
  tweenScale(api)

  api
    .on('reInit', setTweenNodes)
    .on('reInit', setTweenFactor)
    .on('reInit', tweenScale)
    .on('scroll', tweenScale)
    .on('slideFocus', tweenScale)

  return (): void => {
    tweenNodes.forEach((slide) => slide.removeAttribute('style'))
  }
})

const carousel_items = [
  {
    img: "/Accueil_sizodor.png",
    href: "https://www.figma.com/proto/nMsZgDg1NYrGEVm3zODKfm/Sizodor?page-id=69%3A1261&node-id=67-443&viewport=1848%2C878%2C0.06&t=rGdaUooJefCVKPsx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A443",
  },
  {
    img: "/Accueil_the.png",
    href: "https://www.behance.net/gallery/153322811/Maquette-site-vitrine-fictifs-Ths-du-Monde",
  },
  {
    img: "/mockup_mariee_sauvage.png",
    href: "https://www.figma.com/proto/VNwXG9a8Bi28nGVvRSekyA/Mari%C3%A9e-Sauvage?page-id=60%3A38&node-id=337-228&viewport=231%2C171%2C0.03&t=G3Cc01n2qlgEXg0R-1&scaling=scale-down&content-scaling=z",
    backgroundColor: "bg-[#C5DADE]",
  },
  {
    img: "/instagram_mockup.png",
    href: "https://www.figma.com/proto/VNwXG9a8Bi28nGVvRSekyA/Mari%C3%A9e-Sauvage?page-id=60%3A38&node-id=337-228&viewport=231%2C171%2C0.03&t=G3Cc01n2qlgEXg0R-1&scaling=scale-down&content-scaling=z",
    backgroundColor: "bg-[#D29ABF]",
  }
]
</script>

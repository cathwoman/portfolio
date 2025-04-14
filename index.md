---
layout: page
sidebar: false

---

<div class="px-6 md:px-12 mb-64">
  <section
    id="hero"
    aria-labelledby="hero-heading"
    class="h-[calc(100vh-64px)] relative flex flex-col justify-center"
  >
    <div class="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
        <div class="flex-1 flex justify-center items-center text-center md:text-left">
          <div class="max-w-xl">
            <h1 id="hero-heading" class="text-4xl font-bold mb-4 text-secondary">Catherine VU - Designer UX/UI</h1>
            <h2 class="text-4xl font-bold mb-4">Un design unique, comme votre business</h2>
            <p class="text-lg text-gray-600 mb-8 font-medium">Votre site internet est le visage de votre entreprise. Je transforme votre vision en interfaces web intuitives pour des utilisateurs satisfaits.</p>
            <div class="flex flex-row gap-4 lg:gap-5 justify-center md:justify-start">
              <VPButton theme="brand" text="Explorer mes créations" href="#mes-realisations"/>
              <VPButton theme="alt" text="Me contacter" href="https://www.linkedin.com/in/catherinevu436-78/"/>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
          <VPImage image="/ui_ux_designer.png" alt="UI UX Designer" class="z-10 w-80 h-80 md:w-96 md:h-96 object-contain"/>
          <VPImage image="/hero_image_background.png" alt="background_shape" class="-z-10 w-80 h-80 md:w-96 md:h-96 absolute object-contain"/>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
       <a href="#mes-realisations">
        <VPImage image="/down_arrow.png" class="hidden md:flex w-16 h-16 hover:opacity-80 transition-opacity"/>
      </a>
    </div>
  </section>
  <section
    id="mes-realisations"
    aria-labelledby="realisations-heading"
    class="py-10"
  >
    <div class="w-full py-24 md:py-0 md:h-screen mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 id="realisations-heading" class="text-3xl text-center font-bold mb-16 md:mb-24 lg:mb-36">Mes créations</h2>
      <Carousel
        class="w-full"
        :opts="{ loop: true }"
        :plugins="[Autoplay({ delay: 4000, stopOnInteraction: false })]"
        @init-api="setApi"
      >
        <CarouselContent >
          <CarouselItem
            v-for="(item, index) in carousel_items"
            :key="index"
            class="pl-4 basis-4/5 md:basis-1/2 lg:basis-3/5"
          >
              <Card class="overflow-hidden">
                <CardContent class="flex items-center justify-center p-0">
                  <AspectRatio :ratio="16 / 9">
                    <a :href="item.href" target="_blank" rel="noopener noreferrer" class="block hover:opacity-90 transition-opacity">
                      <VPImage :image="item.img" alt="Project image" class="object-cover w-full h-full"/>
                    </a>
                  </AspectRatio>
                </CardContent>
                </Card>
          </CarouselItem>
        </CarouselContent>
        </Carousel>
    </div>
  </section>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="bg-gray-50 md:h-1/2"
  >
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 id="services-heading" class="text-3xl text-center font-bold mb-12">Mes services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <Card v-for="(item, index) in card_items" :key="index" class="flex flex-col">
          <CardHeader>
            <VPImage :image="item.img" alt="" class="w-full h-48 object-cover mb-4 rounded-t-lg"/>
            <CardTitle class="text-xl">{{ item.title }}</CardTitle>
            <CardDescription>{{ item.description }}</CardDescription>
          </CardHeader>
          </Card>
      </div>
      <div class="mt-12">
        <VPButton theme="brand" text="Discutons de votre projet" href="https://www.linkedin.com/in/catherinevu436-78/"/>
      </div>
    </div>
  </section>
  <section
    id="formations"
    aria-labelledby="formations-heading"
    class="md:h-1/2 pt-16 md:pt-24"
  >
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 id="formations-heading" class="text-3xl text-center font-bold mb-12">Mes formations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
         <Card v-for="(item, index) in formations" :key="index" class="w-full flex flex-col">
          <CardHeader class="flex-grow">
            <CardTitle class="text-xl">{{ item.title }}</CardTitle>
            <CardDescription>{{ item.description }}</CardDescription>
          </CardHeader>
          <CardContent> <div class="flex flex-row items-center pt-4 border-t border-gray-200 mt-4"> <VPImage :image="item.image" alt="Formation image" class="max-w-12 max-h-12 object-cover"/> <span class="ml-4 text-sm text-gray-600">{{ item.date }}</span> </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  <section
    id="a-propos"
    aria-labelledby="about-heading"
    class="flex justify-center items-center md:h-1/2 pt-16 md:pt-32"
  >
    <div class="mx-auto max-w-[75vw] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Card class="overflow-hidden">
        <div class="flex flex-col md:flex-row items-center">
          <div class="flex flex-col px-5">
            <CardHeader>
              <h2 id="about-heading" class="text-3xl text-center font-bold">À propos de moi</h2>
            </CardHeader>
            <CardContent class="p-4">
              <CardDescription class="text-lg"> Je suis Catherine, une designer UX/UI passionnée par la création d'expériences digitales uniques. Je suis convaincue que chaque projet est unique, et c'est pourquoi je m'investis pleinement dans chaque collaboration.<br><br>
              En plus du design, je suis passionnée par la patisserie, le crochet et tout ce qui ressemble à une licorne.
              </CardDescription>
              <div class="flex items-center justify-center my-6">
                <VPButton theme="brand" text="Me contacter" href="https://www.linkedin.com/in/catherinevu436-78/"/>
              </div>
            </CardContent>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/2 flex-shrink-0">
            <AspectRatio :ratio="1/1" class="bg-gray-100">
              <VPImage image="/photo_identite.jpeg" alt="Portrait de Catherine Vu" class="object-cover w-full h-full"/>
            </AspectRatio>
          </div>
        </div>
      </Card>
    </div>
  </section>
</div>



<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ref, watch } from 'vue'
import { VPButton, VPImage } from 'vitepress/theme'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi, type EmblaCarouselType, type EmblaEventType } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { watchOnce } from '@vueuse/core'

const api = ref<CarouselApi>()
let cleanupTween: (() => void) | null = null; // Store cleanup function

function setApi(val: CarouselApi) {
  api.value = val
}

// --- Embla Scale Tween Logic ---
const TWEEN_FACTOR_BASE = 0.52 // Adjust this to control scale difference (lower = less difference)
let tweenFactor = 0
let tweenNodes: HTMLElement[] = []

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const setupTweenScale = (emblaApi: EmblaCarouselType): { cleanup: () => void } => {
  tweenNodes = emblaApi.slideNodes() // Get slide nodes

  const setTweenFactor = (): void => {
      // Base tween factor multiplied by the number of snaps
      tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }

  const tweenScale = (
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
        // tweenNode.style.flexBasis = `scale(${scale})`
      })
    })
  }

  // Initial setup
  setTweenFactor()
  tweenScale()

  // Add listeners
  emblaApi
    .on('reInit', setTweenFactor)
    .on('reInit', tweenScale)
    .on('scroll', tweenScale)
    .on('slideFocus', tweenScale) // Use slideFocus for better active state handling

  // Return cleanup function
  return {
      cleanup: (): void => {
          tweenNodes.forEach((slide) => slide.removeAttribute('style')) // Remove styles on cleanup
          // Important: Remove listeners to prevent memory leaks
          emblaApi
            .off('reInit', setTweenFactor)
            .off('reInit', tweenScale)
            .off('scroll', tweenScale)
            .off('slideFocus', tweenScale)
      }
  }
}

// Watch for API initialization
watchOnce(api, (emblaApi) => {
  if (!emblaApi) return;
  const { cleanup } = setupTweenScale(emblaApi);
  cleanupTween = cleanup; // Store cleanup function
});

// Ensure cleanup happens when the component unmounts or api changes
watch(api, (newApi, oldApi, onInvalidate) => {
    // if (cleanupTween) {
    //     cleanupTween(); // Clean up previous instance listeners/styles
    //     cleanupTween = null;
    // }
    if (newApi) {
        const { cleanup } = setupTweenScale(newApi);
        cleanupTween = cleanup; // Store new cleanup function
    }
    // Vue's watch cleanup registration
    onInvalidate(() => {
        if (cleanupTween) {
            cleanupTween();
        }
    });
});

// --- Carousel Items Data ---
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
    href: "/portfolio/cathcookiz",
    backgroundColor: "bg-[#D29ABF]",
  }
]

const card_items = [
  // https://uxcam.com/blog/ux-statistics/
  {
    title: "UX Design",
    description: "Une UX optimisée booste les conversions jusqu’à 400%. Atteignez le plein potentiel de votre site avec une expérience utilisateur fluide et intuitive.",
    img: "/ux_design.png",
  },
  {
    title: "UI Design",
    description: "75% des utilisateurs jugent la crédibilité d’un site web sur son design. Je rend votre business plus crédible à l'aide d’un design moderne et optimisé.",
    img: "/ui_design.png",
  },
  // https://www.figma.com/blog/measuring-the-value-of-design-systems/
  {
    title: "Design system",
    description: "Réduisez votre temps de développement de 34% avec un design system efficace et adapté à votre projet.",
    img: "/design_system.png",
  }
]

const formations = [
  {
    date: "Janvier 2025 - aujourd'hui",
    title: "Certification Google designer ux",
    description: "Fondamentaux du design ux",
    image: "/google.png",
  },
  {
    date: "Janvier - Décembre 2022",
    title: "Titre professionnel Concepteur Designer UI",
    description: "Fondamentaux du design graphique, typographie, identité visuelle et introduction au design d'interface.",
    image: "/online_forma_pro.png",
  },
  {
    date: "Septembre 2019 - Juillet 2021",
    title: "BTS SNIR",
    description: "application et apprentissage de l'informatique",
    image: "/logo-dhuoda.png",
  }
]
</script>

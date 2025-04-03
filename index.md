---
layout: page
sidebar: false

---

<div class="px-6 md:px-12">
  <section
    id="hero"
    aria-labelledby="hero-heading"
    class="h-[calc(100vh-64px)] relative flex flex-col justify-center"
  >
    <div class="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
        <div class="flex-1 flex justify-center items-center text-center md:text-left">
          <div class="max-w-xl">
             <h1 id="hero-heading" class="text-4xl font-bold mb-4">Designer UX/UI</h1>
            <p class="text-4xl font-bold mb-4 text-secondary">Des experiences uniques, comme votre business</p>
            <p class="text-lg text-gray-700 mb-8">Je conçois des interfaces digitales intuitives et esthétiques pour créer des expériences mémorables.</p>
            <div class="flex flex-row gap-4 lg:gap-5 justify-center md:justify-start">
              <VPButton theme="brand" text="Explorer mes realisations" href="#mes-realisations"/>
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
        <VPImage image="/down_arrow.png" class="hidden md:flex w-12 h-12 hover:opacity-80 transition-opacity"/>
      </a>
    </div>
  </section>
  <section
    id="mes-realisations"
    aria-labelledby="realisations-heading"
    class="py-16 md:py-20"
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 id="realisations-heading" class="text-3xl text-center font-bold mb-12">Mes realisations</h2>
      <Carousel
        class="w-full max-w-5xl"
        :opts="{ loop: true, align: 'center' }"
        :plugins="[Autoplay({ delay: 4000, stopOnInteraction: false })]"
        @init-api="setApi"
      >
        <CarouselContent class="-ml-4"> <CarouselItem
            v-for="(item, index) in carousel_items"
            :key="index"
            class="pl-4 md:basis-1/2 lg:basis-1/3"
          >
              <Card class="overflow-hidden"> <CardContent class="flex items-center justify-center p-0">
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
    class="py-16 md:py-20 bg-gray-50"
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 id="services-heading" class="text-3xl text-center font-bold mb-12">Mes services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <Card v-for="(item, index) in card_items" :key="index" class="flex flex-col">
          <CardHeader>
            <VPImage :image="item.img" alt="" class="w-full h-48 object-cover mb-4 rounded-t-lg"/>
            <CardTitle>{{ item.title }}</CardTitle>
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
    class="py-16 md:py-20"
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 id="formations-heading" class="text-3xl text-center font-bold mb-12">Mes formations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
         <Card v-for="(item, index) in formations" :key="index" class="w-full flex flex-col">
          <CardHeader class="flex-grow"> <CardTitle>{{ item.title }}</CardTitle>
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
    class="py-16 md:py-20 bg-gray-50"
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 id="about-heading" class="text-3xl text-center font-bold mb-12">À propos de moi</h2>
      <Card class="w-full max-w-4xl overflow-hidden"> <div class="flex flex-col md:flex-row items-center">
          <div class="flex-1 p-6 md:p-8"> <CardDescription class="text-lg mb-6"> Je suis une designer UX/UI passionnée par la conception d'interfaces digitales intuitives et esthétiques. Je mets mes compétences au service de votre projet pour créer des expériences uniques et mémorables.
            </CardDescription>
            <VPButton theme="brand" text="Me contacter" href="https://www.linkedin.com/in/catherinevu436-78/"/>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/2 flex-shrink-0">
             <AspectRatio :ratio="1 / 1" class="bg-gray-100">
               <VPImage image="/ui_ux_designer.png" alt="Portrait de Catherine Vu" class="object-cover w-full h-full"/>
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
        tweenNode.style.flexBasis = `scale(${scale})`
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
    if (cleanupTween) {
        cleanupTween(); // Clean up previous instance listeners/styles
        cleanupTween = null;
    }
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
    img: "/Accueil_mariee_sauvage_coupe.webp",
    href: "https://www.figma.com/proto/VNwXG9a8Bi28nGVvRSekyA/Mari%C3%A9e-Sauvage?page-id=60%3A38&node-id=337-228&viewport=231%2C171%2C0.03&t=G3Cc01n2qlgEXg0R-1&scaling=scale-down&content-scaling=z",
  }
]

const card_items = [
  {
    title: "UX Design",
    description: "Je conçois des parcours intuitifs et fluides grâce à une approche centrée sur l'utilisateur.",
    img: "/ui_ux_designer.png",
  },
  {
    title: "UI Design",
    description: "Je transforme vos idées en interfaces modernes qui séduisent vos clients et boostent votre image de marque",
    img: "/ui_ux_designer.png",
  },
  {
    title: "Design system",
    description: "Je développe des composants évolutifs qui unifient l’expérience digitale et renforcent l’identité de marque.",
    img: "/ui_ux_designer.png",
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
    image: "/bts_snir.png",
  }
]
</script>

import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'

const TWEEN_FACTOR_BASE = 0.52 // Adjust this value to control the scale difference (lower = less difference)
let tweenFactor = 0
let tweenNodes: HTMLElement[] = []

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

// --- MODIFIED PART ---
const setTweenNodes = (emblaApi: EmblaCarouselType): void => {
  // Target the main slide nodes provided by Embla directly
  tweenNodes = emblaApi.slideNodes()
}
// --- END MODIFIED PART ---

const setTweenFactor = (emblaApi: EmblaCarouselType): void => {
  // Calculate tween factor based on the number of visible slides
  // If using basis-X/Y, the number of scrollSnaps might be different than slides.
  // Let's base it on the number of scroll snaps for potentially better results with partial views
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
      // Performance: Only apply styles to visible slides during scroll events
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

      // Calculate scale: 1 for active, < 1 for others
      // The further away, the smaller the scale (down to a minimum)
      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor)
      const scale = numberWithinRange(tweenValue, 0.85, 1).toString() // Set min scale (e.g., 0.85)

      // Apply scale via transform
      const tweenNode = tweenNodes[slideIndex]
      if (tweenNode) { // Add safety check
          tweenNode.style.transform = `scale(${scale})`
          // Optional: Add opacity tweening too
          // tweenNode.style.opacity = numberWithinRange(tweenValue, 0.5, 1).toString();
      }
    })
  })
}

// Main setup function remains largely the same
export const setupTweenScale = (emblaApi: EmblaCarouselType): (() => void) => {
  setTweenNodes(emblaApi)
  setTweenFactor(emblaApi)
  tweenScale(emblaApi) // Initial scale calculation

  emblaApi
    .on('reInit', () => {
      console.log('Reinitialized!')
      // Re-setup on reinitialization
      setTweenNodes(emblaApi)
      setTweenFactor(emblaApi)
      tweenScale(emblaApi)
    })
    .on('scroll', tweenScale) // Update scale on scroll
    .on('select', tweenScale) // Update scale when a slide is selected (snapped to)

  // Return the cleanup function
  return (): void => {
    tweenNodes.forEach((slide) => {
      if (slide) slide.removeAttribute('style')
    })
    // Optionally remove listeners if Embla doesn't do it automatically on destroy
    emblaApi.off('scroll', tweenScale)
    emblaApi.off('select', tweenScale)
  }
}
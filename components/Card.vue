<script setup lang="ts">
const { $gsap } = useNuxtApp()

const props = defineProps<{
  image: string
  title?: string
  detail?: string
  photos?: string[]
}>()

const cardRef = ref<HTMLElement | null>(null)
const imagesRef = ref<HTMLElement | null>(null)

const initSlider = () => {
  if (!props.photos || props.photos.length <= 1) return

  const images = imagesRef.value?.querySelectorAll('img')
  if (!images) return

  // Set initial state (show the first image only)
  $gsap.set(images, { opacity: 0 })
  $gsap.set(images[0], { opacity: 1 })

  const tl = $gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: false,
  })

  // Animate each image in sequence
  images.forEach((image, index) => {
    tl.to(
      image,
      {
        opacity: 1,
        duration: 0.75,
      },
      '-=1',
    ).to(image, {
      opacity: 0,
      duration: 0.75,
      delay: 1.5,
    })
  })

  return tl
}

function fadeInText() {
  const cardContent = cardRef.value?.querySelector('.card-content')
  const cardTexts = cardRef.value?.querySelectorAll('.card-texts')

  if (!cardContent || !cardTexts) return

  $gsap.set(cardTexts, { opacity: 0, y: 8 })

  const tl = $gsap.timeline({
    paused: true,
  })

  tl.to(cardContent, {
    opacity: 1,
    duration: 0.5,
    ease: 'none',
  }).to(
    cardTexts,
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
    },
    '-=0.5',
  )

  return tl
}

const timeline = ref<GSAPTimeline | null>(null)
const timelineText = ref<GSAPTimeline | null>(null)

function play() {
  timeline.value?.play()
  timelineText.value?.play()
}

function pause() {
  timeline.value?.pause()
  timelineText.value?.reverse()
}

onMounted(() => {
  nextTick(() => {
    const tl = initSlider()
    if (tl) timeline.value = tl

    const tlText = fadeInText()
    if (tlText) timelineText.value = tlText
  })
})
</script>

<template>
  <div
    ref="cardRef"
    class="card relative flex w-full flex-col justify-end bg-cover bg-center bg-no-repeat"
    @mouseenter="play()"
    @mouseleave="pause()"
  >
    <div
      ref="imagesRef"
      class="card-images absolute left-0 top-0 h-full w-full"
    >
      <img
        :src="image"
        :alt="image"
        class="absolute left-0 top-0 h-full w-full object-cover"
      />
      <img
        v-for="(photo, index) in photos"
        :key="photo"
        :src="photo"
        :alt="photo"
        class="absolute left-0 top-0 h-full w-full object-cover"
      />
    </div>
    <div class="card-content h-full w-full p-12">
      <div class="relative z-10 flex h-full w-full flex-col justify-end">
        <div class="card-texts mb-2 flex items-center justify-between">
          <h3 class="text-base">
            {{ title }}
          </h3>
          <!-- <Icon name="uil:angle-right-b" class="text-white" /> -->
        </div>
        <p class="card-texts text-sm">
          {{ detail }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
}

.card-images img {
  opacity: 0;
}

.card-content {
  @apply opacity-0;
  position: relative;
  z-index: 10;

  &:before {
    content: '';
    @apply absolute left-0 top-0 h-full w-full bg-[#1e1e1e] bg-opacity-80;
  }
}

/* .card:hover .card-content {
  @apply opacity-100;
} */
</style>

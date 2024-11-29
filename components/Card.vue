<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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

  // Set initial state
  gsap.set(images, { opacity: 0 })
  gsap.set(images[0], { opacity: 1 })

  const tl = gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: false,
  })

  // Slide animation with opacity
  images.forEach((image, index) => {
    tl.to(
      image,
      {
        opacity: 1,
        duration: 0.5,
      },
      '-=1',
    ).to(image, {
      opacity: 0,
      duration: 0.5,
      delay: 1,
    })
  })

  // Hover interaction
  cardRef.value?.addEventListener('mouseenter', () => {
    tl.play()
  })

  cardRef.value?.addEventListener('mouseleave', () => {
    tl.pause()
  })
}

onMounted(initSlider)
</script>

<template>
  <div
    ref="cardRef"
    class="card relative flex w-full flex-col justify-end bg-cover bg-center bg-no-repeat"
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
        :key="index"
        :src="photo"
        :alt="photo"
        class="absolute left-0 top-0 h-full w-full object-cover"
      />
    </div>
    <div class="card-content h-full w-full p-12">
      <div class="relative z-10 flex h-full w-full flex-col justify-end">
        <div class="mb-2 flex items-center justify-between">
          <h4 class="text-base">
            {{ title }}
          </h4>
          <Icon name="uil:angle-right-b" class="text-white" />
        </div>
        <p class="text-sm">
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
  @apply opacity-0 transition-opacity duration-300;
  position: relative;
  z-index: 10;

  &:before {
    content: '';
    @apply absolute left-0 top-0 h-full w-full bg-[#1e1e1e] bg-opacity-80;
  }
}

.card:hover .card-content {
  @apply opacity-100;
}
</style>

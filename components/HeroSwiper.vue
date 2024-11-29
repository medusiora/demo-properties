<script setup lang="ts">
import Hero1 from '~/assets/images/hero-1.webp'
import Hero2 from '~/assets/images/hero-2.webp'
import Hero3 from '~/assets/images/hero-3.webp'
import Hero4 from '~/assets/images/hero-4.webp'

const containerRef = ref(null)
const slides = ref([Hero1, Hero2, Hero3, Hero4])
const swiper = useSwiper(containerRef, {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`
    },
  },
})

function isImage(src: string) {
  return src.match(/\.(jpeg|jpg|gif|png|webp)$/)
}
</script>

<template>
  <ClientOnly>
    <swiper-container
      ref="containerRef"
      :init="false"
      class="absolute left-0 top-0 h-full w-full"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper-slide"
      >
        <img
          v-if="isImage(slide)"
          :src="slide"
          :alt="slide"
          class="h-full w-full object-cover"
        />
        <video
          v-else
          class="h-full w-full object-cover"
          :src="slide"
          autoplay
          loop
          muted
        ></video>
      </swiper-slide>
      <span class="swiper-pagination"></span>
    </swiper-container>

    <!-- // swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main -->
  </ClientOnly>
</template>

<style>
.swiper-slide {
  video {
    filter: contrast(75%);
  }
}

.swiper-pagination {
  @apply absolute bottom-4 right-4 z-10 flex transform gap-2;

  .swiper-pagination-bullet {
    @apply relative inline-block h-[1px] w-10 bg-white/30;

    &:after {
      content: '';
      @apply absolute left-0 top-0 h-full w-0 bg-white/90;
    }

    &.swiper-pagination-bullet-active {
      &:after {
        animation: fillAnimation 5s linear forwards;
      }
    }
  }
}

@keyframes fillAnimation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>

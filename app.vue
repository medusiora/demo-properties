<script lang="ts" setup>
import DiscoverA1 from '~/assets/images/discover-a1.webp'
import DiscoverA2 from '~/assets/images/discover-a2.webp'
import DiscoverB1 from '~/assets/images/discover-b1.webp'
import DiscoverB2 from '~/assets/images/discover-b2.webp'
import DiscoverC1 from '~/assets/images/discover-c1.webp'
import DiscoverC2 from '~/assets/images/discover-c2.webp'
import ExploreA1 from '~/assets/images/explore-a1.webp'
import ExploreA2 from '~/assets/images/explore-a2.webp'
import ExploreA3 from '~/assets/images/explore-a3.webp'
import ExploreB1 from '~/assets/images/explore-b1.webp'
import ExploreB2 from '~/assets/images/explore-b2.webp'
import ExploreB3 from '~/assets/images/explore-b3.webp'
import ExploreC1 from '~/assets/images/explore-c1.webp'
import ExploreC2 from '~/assets/images/explore-c2.webp'
import ExploreC3 from '~/assets/images/explore-c3.webp'
import ContactImage from '~/assets/images/contact.png'
import { ScrollTrigger } from 'gsap/all'

const { $gsap } = useNuxtApp()

const stickyRef = ref<HTMLElement | null>(null)

const cards = reactive([
  {
    image: ExploreA1,
    title: 'Serene Nature Walkway',
    detail:
      'Experience tranquility in private spaces surrounded by lush greenery, perfect for relaxation or exercise.',
    photos: [ExploreA2, ExploreA3],
  },
  {
    image: ExploreB1,
    title: 'Infinity Pool with Cityscape',
    detail:
      'Enjoy a luxurious infinity pool experience with breathtaking city views in an elevated atmosphere.',
    photos: [ExploreB2, ExploreB3],
  },
  {
    image: ExploreC1,
    title: 'Modern Kitchen Design',
    detail:
      'A modern kitchen fully equipped with premium amenities, creating the perfect ambiance for stylish living.',
    photos: [ExploreC2, ExploreC3],
  },
])

onMounted(() => {
  nextTick(() => {
    // Pin the sticky section
    ScrollTrigger.create({
      trigger: stickyRef.value as Element,
      start: 'top top',
      end: `${window.innerHeight * 2}px top`,
      pin: true,
    })

    // Image box fade in on scroll
    animationImageBox()

    // All text and button fade in on scroll
    animationTexts()
  })
})

function fadeIn(
  item: Element | NodeListOf<Element>,
  opacity: number,
  y: number,
  options = {},
) {
  $gsap.to(item, {
    opacity,
    y,
    duration: 1,
    ...options,
  })
}

function animationTexts() {
  const texts = document.querySelectorAll('.fade-in')
  const stickyTexts = stickyRef.value?.querySelectorAll('h2, p, button')

  if (texts) {
    texts.forEach((item) => {
      $gsap.set(item, { opacity: 0, y: 8 })
      $gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          // end: 'top 20%',
          toggleActions: 'play reverse play reverse',
        },
      })
    })
  }

  if (stickyTexts) {
    stickyTexts.forEach((item) => {
      $gsap.set(item, { opacity: 0, y: 8 })
      $gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          // end: 'top 20%',
          // toggleActions: 'play reverse play reverse',
        },
      })
    })
  }
}

function animationImageBox() {
  const images = document.querySelectorAll('.image-shadow img')
  const yTransform = 70

  if (!images) return

  images.forEach((item) => {
    $gsap.set(item, { opacity: 0, y: yTransform })

    ScrollTrigger.create({
      trigger: item,
      start: 'top 80%',
      end: 'bottom 20%',
      // toggleActions: 'play reverse play reverse',
      scrub: true,
      onEnter: () => {
        fadeIn(item, 1, 0)
      },
      onLeave: () => {
        fadeIn(item, 0, -yTransform)
      },
      onEnterBack: () => {
        fadeIn(item, 1, 0)
      },
      onLeaveBack: () => {
        fadeIn(item, 0, yTransform)
      },
    })
  })
}
</script>

<template>
  <div>
    <section class="relative h-screen" id="hero">
      <div class="caption">
        <div class="container">
          <div class="grid grid-cols-12 gap-4">
            <div
              class="relative col-span-5 flex h-screen flex-col justify-center py-[150px]"
            >
              <h1
                class="fade-in font-amiri text-8xl uppercase leading-[6.25rem]"
              >
                MYSITE
              </h1>
              <h2 class="fade-in text-base">
                Discover luxurious condominiums in prime locations with modern
                designs and amenities tailored to your lifestyle.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <HeroSwiper />
    </section>

    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none left-0 top-0 flex h-auto w-full flex-row flex-nowrap"
      >
        <div
          class="z-10 flex-1"
          style="box-shadow: 20px 0px 30px -10px #00000066"
        ></div>
        <div class="relative w-[36%]">
          <div class="relative h-screen">
            <img
              :src="DiscoverA2"
              :alt="DiscoverA2"
              class="h-full w-full object-cover"
            />

            <div
              class="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <div class="image-shadow aspect-square w-full max-w-[31.25rem]">
                <img
                  :src="DiscoverA1"
                  :alt="DiscoverA1"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div class="relative h-screen">
            <img
              :src="DiscoverB2"
              :alt="DiscoverB2"
              class="h-full w-full object-cover"
            />

            <div
              class="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <div class="image-shadow aspect-square w-full max-w-[31.25rem]">
                <img
                  :src="DiscoverB1"
                  :alt="DiscoverB1"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div class="relative h-screen">
            <img
              :src="DiscoverC2"
              :alt="DiscoverC2"
              class="h-full w-full object-cover"
            />

            <div
              class="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <div class="image-shadow aspect-square w-full max-w-[31.25rem]">
                <img
                  :src="DiscoverC1"
                  :alt="DiscoverC1"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute left-0 top-0 h-screen w-full" ref="stickyRef">
        <div class="container">
          <div class="sticky grid grid-cols-12 gap-4">
            <div
              class="col-span-5 flex h-screen flex-col justify-between py-[150px]"
            >
              <div>
                <h2 class="font-amiri text-5xl uppercase leading-[5rem]">
                  Discover Our <br />
                  Exclusive Properties
                </h2>
                <p class="text-base">
                  We've handpicked condominium projects in high-potential
                  locations that are perfect for both living and investment.
                  Each property offers modern design and premium amenities for
                  your ideal lifestyle.
                </p>
              </div>
              <Button label="Browse Condos" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-auto">
      <div class="container h-full py-[150px]">
        <div class="text-center">
          <h2 class="fade-in font-amiri text-5xl uppercase leading-[5rem]">
            Explore Our Featured Properties
          </h2>
          <p class="fade-in text-base">
            Experience a new perspective of condo living through images that
            showcase exceptional design and premium facilities.
          </p>
          <p class="fade-in text-base">
            From infinity pools and fitness centers to peaceful green spaces,
            these properties have it all.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-3 gap-1">
          <Card
            v-for="card in cards"
            :key="card.title"
            :image="card.image"
            :title="card.title"
            :detail="card.detail"
            :photos="card.photos"
            class="fade-in col-span-1 h-[44rem]"
          />
        </div>
      </div>
    </section>

    <section
      class="relative h-screen bg-cover bg-center bg-no-repeat"
      id="contact"
      :style="{ backgroundImage: `url(${ContactImage})` }"
    >
      <div class="caption-r">
        <div class="container">
          <div class="grid grid-cols-12 gap-4">
            <div
              class="relative col-span-6 col-start-7 mx-auto flex h-screen max-w-[720px] flex-col justify-center px-[100px] py-[150px]"
            >
              <h2
                class="fade-in mb-3 text-center font-amiri text-5xl uppercase leading-[5rem]"
              >
                Contact Us to Find Your Ideal Condo
              </h2>

              <div class="flex flex-col gap-5">
                <Input label="Name" class="fade-in" />
                <Input label="Email" class="fade-in" />
                <Input label="Phone" class="fade-in" />
                <Input label="Preferences" class="fade-in" />

                <Button label="Submit Inquiry" class="fade-in mx-auto mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
html {
  @apply bg-[#1e1e1e];
}

#hero,
#contact {
  .caption {
    @apply pointer-events-none absolute left-0 top-0 z-10 h-full w-full;

    &:before {
      content: '';
      @apply absolute left-0 top-0 h-full w-1/2 bg-[#1e1e1e] bg-opacity-80;
    }
  }

  .caption-r {
    &:before {
      content: '';
      @apply absolute right-0 top-0 h-full w-1/2 bg-[#1e1e1e] bg-opacity-80;
    }
  }
}

.box-shadow {
  box-shadow: 4px 4px 50px 0px #00000040;
}
</style>

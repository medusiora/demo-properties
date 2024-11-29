<script lang="ts" setup>
defineProps<{
  image: string
  title?: string
  detail?: string
  photos?: string[]
}>()
</script>

<template>
  <div
    class="card relative flex w-full flex-col justify-end bg-cover bg-center bg-no-repeat"
  >
    <div class="card-images absolute left-0 top-0 h-full w-full">
      <img :src="image" :alt="image" class="h-full w-full object-cover" />
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo"
        :alt="photo"
        class="hidden h-full w-full object-cover"
      />
    </div>
    <div class="card-content p-12">
      <div class="relative z-10">
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

<style>
.card {
  .card-content {
    @apply opacity-0 transition-opacity duration-300;

    &:before {
      content: '';
      @apply absolute left-0 top-0 h-full w-full bg-[#1e1e1e] bg-opacity-80;
    }
  }

  &:hover {
    .card-content {
      @apply opacity-100;
    }
  }
}
</style>

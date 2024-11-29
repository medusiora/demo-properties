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
    class="card relative flex w-full flex-col justify-end bg-cover bg-center bg-no-repeat p-12"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="card-content">
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

<script lang="ts" setup>
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="relative z-0">
    <input
      type="text"
      id="floating_standard"
      class="focus:border-white-600 peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm focus:outline-none focus:ring-0"
      placeholder=" "
    />
    <label
      for="floating_standard"
      class="peer-focus:text-white-600 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
    >
      {{ label }}
    </label>
  </div>
</template>

<style></style>

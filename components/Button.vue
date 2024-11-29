<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <button class="btn btn-1 text-sm" :aria-label="label">
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" />
    </svg>
    <span>
      {{ label }}
    </span>
  </button>
</template>

<style>
.btn {
  cursor: pointer;
  line-height: 48px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  max-width: 190px;

  span {
    opacity: 0.8;
    transition: opacity 0.35s;
  }

  &:hover {
    text-decoration: none;

    span {
      opacity: 1;
    }
  }
}

.btn-1 {
  font-weight: 100;

  svg {
    height: 48px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
}

.btn-1:hover {
  rect {
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
</style>

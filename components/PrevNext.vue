<template>
  <div class="prevNext-Container">
    <div class="prevNext prevNext-Prev">
      <IconArrow class="prevNext-Icon" alt="prev" />
    </div>
    <div class="prevNext prevNext-Next">
      <IconArrow class="prevNext-Icon" alt="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrow from '~/assets/icons/arrow.svg';
</script>

<style lang="sass">
$transition-arrow: .165s ease-in-out

.prevNext
  cursor: pointer
  color: $color
  width: 2.5rem
  height: 2.5rem
  transition: transform $transition-arrow, scale $transition-arrow
  svg
    width: 100%
    height: 100%
    object-fit: contain
    fill: transparent
    transition: all $transition-arrow

  &:hover
    transform: translateX(4%)
    scale: 1.04
    svg
      fill: $color-red
      transition: all $transition-arrow

  &-Prev
    transform: rotate(180deg)
    &:hover
      transform: translateX(-4%) rotate(180deg)

  &-Container
    width: 100%
    display: flex
    justify-content: space-around
    align-items: center
</style>

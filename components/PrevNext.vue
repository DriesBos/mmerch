<template>
  <div class="prevNext-Container">
    <div class="prevNext prevNext-Prev">
      <IconArrow class="prevNext-Icon" alt="prev" />
    </div>

    <span>
      <slot />
    </span>

    <div class="prevNext prevNext-Next">
      <IconArrow class="prevNext-Icon" alt="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrow from '~/assets/icons/arrow.svg';
</script>

<style lang="sass">
$trans-arrow: $trans-hover

.prevNext
  cursor: pointer
  color: $color
  width: 2.5rem
  height: 2.5rem
  svg
    width: 100%
    height: 100%
    object-fit: contain
    fill: transparent

  &:hover
    svg
      fill: $color-red

  &-Prev
    transform: rotate(180deg)

  &-Container
    width: 100%
    display: flex
    justify-content: space-around
    align-items: center

    span
      font-family: Space Medium
      font-size: 1.33rem
      line-height: 1

    &.smooth
      .prevNext
        svg
          transition: all $trans-arrow
        &:hover
          svg
            fill: $color-red
            transition: all $trans-arrow

    &.zoom
      .prevNext
        transition: transform $trans-arrow, scale $trans-arrow
        scale: 1
        svg
          transition: all $trans-arrow

        &:hover
          scale: 1.04
          svg
            transition: all $trans-arrow

        &_Next
          &:hover
            transform: translateX(4%)

        &_Prev
          &:hover
            transform: translateX(-4%) rotate(180deg)
</style>

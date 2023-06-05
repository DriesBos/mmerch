<template>
  <div class="btn">
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
import hoverAnimations from '@/mixins/hoverAnimations';

export default {
  mixins: [hoverAnimations],
};
</script>

<style lang="sass">
$transition-btn: .165s

.btn
  color: black
  border: $border-width solid currentColor
  padding: 1rem 4rem
  border-radius: $border-radius
  cursor: pointer
  white-space: nowrap
  span
    color: black
    text-transform: none
    font-family: Space Medium
    font-size: 1.33rem
    line-height: 1
  &:hover
    border: $border-width solid black
    background: currentColor
    @media (pointer: fine)
      background: currentColor

.smooth
  transition: border $transition-btn ease-in-out, background $transition-btn ease-in-out
  span
    transition: color $transition-btn ease-in-out

.interactEnlarge
  transition: border .33s ease-in-out, background .33s ease-in-out
  span
    transition: color .33s ease-in-out

// Colors
.black
  &:hover
    background: $color-red
  span
    color: $color
    &:hover
      background: transparent

.green
  color: $color-green

.blue
  color: $color-blue
  &:hover > span
      color: white
</style>

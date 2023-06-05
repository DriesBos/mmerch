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
$trans-btn: $trans-hover

.btn
  color: black
  border: $border-width solid currentColor
  padding: 1rem 4rem
  border-radius: $border-radius
  cursor: pointer
  white-space: nowrap
  scale: 1
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

  // Colors
  &.black
    &:hover
      background: $color-red
    span
      color: $color
      &:hover
        background: transparent


  &.green
    color: $color-green

  &.blue
    color: $color-blue
    &:hover > span
        color: white

  &.smooth
    transition: border $trans-btn, background $trans-btn
    span
      transition: color $trans-btn

  &.zoom
    transition: border $trans-btn, background $trans-btn, scale $trans-btn
    span
      transition: color $trans-btn
    &:hover
      scale: 1.02

  &.zoomTwo
    transition: border $trans-btn, background $trans-btn, scale $trans-btn
    span
      transition: color $trans-btn
    &:hover
      scale: 1.04

  &.zoomThree
    transition: border $trans-btn, background $trans-btn, scale $trans-btn
    span
      transition: color $trans-btn
    &:hover
      scale: 1.01

  &.interactBtn
    transition: border $trans-btn, background $trans-btn
    span
      transition: color $trans-btn
</style>

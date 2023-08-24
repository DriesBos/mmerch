<template>
  <div class="btn">
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
// import hoverAnimations from '@/mixins/hoverAnimations';

export default {
  // mixins: [hoverAnimations],
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

  // &.up
  //   transform: translateY(0)
  //   transition: transform .4s ease
  //   &:hover
  //     transform: translateY(-0.1em)
  //     transition: transform .2s ease

  &.zoom
    scale: 1
    transition: .2s ease-out
    span
      transition: .2s ease-out
    &:hover
      scale: 1.02
      transition: .2s ease-in
      span
        transition: .2s ease-in
</style>

<template>
  <div class="btn">
    <span>
      <slot />
    </span>
  </div>
</template>

<style lang="sass">
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

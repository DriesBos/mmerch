<template>
  <div class="section soundBtn"></div>
</template>

<style lang="sass">
.soundBtn
  cursor: none

.cursor
  position: fixed
  width: 0
  height: 0
  transform: translate(-50%, -50%)
  border-radius: 1000px
  z-index: 999
  pointer-events: none
  opacity: 0
  background: $color-red
  transition: opacity .1s ease-in-out, width .1s ease-in-out, height .1s ease-in-out
  span
    position: absolute
    top: calc(50%)
    left: 50%
    transform: translate(-50%, -50%)
    white-space: nowrap
    width: max-content
    color: white
    &::selection
      background: transparent
  &.active
    opacity: 1
    width: 6rem
    height: 2rem
  &.muted
    background: $color-green
    span
      color: black
</style>

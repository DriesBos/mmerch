<template>
  <div class="nav">
    <span class="link-up">hyperlink</span>
    <span class="link-up">hyperlink</span>
    <span class="link-up">hyperlink</span>
    <span class="link-up">hyperlink</span>
  </div>
</template>

<style lang="sass">
.nav
  display: flex
  width: 100%
  justify-content: center
  border: $border-width solid $color
  border-radius: $border-radius
  overflow-x: auto
  span
    font-family: Space Medium
    font-size: 1rem
    line-height: 1
    padding: .5rem .5rem
    margin: 1rem .5rem
    cursor: pointer

.link-scale
  scale: 1
  transition: scale .165s ease-in-out
  &:hover
      scale: 1.025

.link-up
  transform: translateY(0)
  transition: transform .4s ease-out
  &:hover
    transform: translateY(-0.1em)
    transition: transform .2s ease-in
</style>

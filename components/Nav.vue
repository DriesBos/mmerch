<template>
  <div class="nav">
    <span>hyperlink</span>
    <span>hyperlink</span>
    <span>hyperlink</span>
    <span>hyperlink</span>
  </div>
</template>

<style lang="sass">
.nav
  display: flex
  width: 100%
  justify-content: center
  border: $border-width solid $color
  border-radius: $border-radius
  span
    font-family: Space Medium
    font-size: 1rem
    line-height: 1
    padding: .5rem .5rem
    margin: 1rem .5rem
    transition: scale $trans-hover
    cursor: pointer
    &:hover
      scale: 1.05
</style>

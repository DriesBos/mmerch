<template>
  <div class="header">
    <NuxtLink to="/box" class="header-Logo_Item">
      <h1>box</h1>
    </NuxtLink>
    <NuxtLink to="/scroll" class="header-Logo_Item">
      <h1>scroll</h1>
    </NuxtLink>
  </div>
</template>

<style lang="sass">
.header
  position: fixed
  top: 2rem
  right: 2rem
  z-index: +1
  display: flex
  background: grey
  border-radius: 1000px
  text-decoration: none
  cursor: pointer
  & > a
    color: white
    text-transform: uppercase
    padding: .5rem 1rem
    border-radius: 1000px
    text-decoration: none
    font-family: Arial, Helvetica, sans-serif
    &.router-link-exact-active
      background: green
      text-decoration: none
</style>

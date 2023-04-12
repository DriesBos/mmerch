<template>
  <div class="header">
    <NuxtLink to="/" class="header-Logo_Item">
      <h1>home</h1>
    </NuxtLink>
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
  background: #C8C4B8
  border-radius: 1000px
  text-decoration: none
  cursor: pointer
  & > a
    width: 107px
    color: white
    text-transform: uppercase
    padding: .66rem 1.32rem
    border-radius: 1000px
    text-decoration: none
    font-family: Arial, Helvetica, sans-serif
    text-align: center
    &.router-link-exact-active
      background: #E65a29
      text-decoration: none
</style>

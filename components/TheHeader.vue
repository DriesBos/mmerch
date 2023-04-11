<template>
  <div class="header">
    <p>HEADER</p>
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
  top: 1rem
  right: 1rem
  z-index: +1
</style>

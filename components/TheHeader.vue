<template>
  <div class="header block">
    <div class="header-Animation">
      <span>
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playground
        your mmERCH playground your mmERCH playground your mmERCH playgroundyour
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playgroundyour
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground your
        mmERCH playground your mmERCH playground your mmERCH playground
      </span>
    </div>
    <div class="header-Nav">
      <NuxtLink to="/" class="header-Logo_Item"> home </NuxtLink>
      <NuxtLink to="/scrolltrigger" class="header-Logo_Item">Trifecta</NuxtLink>
      <NuxtLink to="/box" class="header-Logo_Item"> 3D box </NuxtLink>
      <NuxtLink to="/scroll" class="header-Logo_Item"> 3D scroll </NuxtLink>
    </div>
  </div>
</template>

<style lang="sass">
.header, span
  display: flex
  font-family: Space Medium
  font-size: 1.68rem
  text-transform: uppercase
  line-height: 1.5
  margin-top: 2px
  &-Animation
    position: relative
    height: 100%
    flex-grow: 1
    overflow-x: auto
    white-space: nowrap
    vertical-align: bottom
    display: flex
    align-items: center
    padding: 1rem 2rem
    span
      animation-name: textTransform
      animation-duration: 600s
      animation-iteration-count: infinite
      animation-direction: alternate
      animation-timing-function: linear
    &::-webkit-scrollbar
      display: none
  &-Nav
    display: flex
    flex-shrink: 0
    & > a
      color: black
      font-family: Space Medium
      font-size: 1.68rem
      padding: 1rem 1rem
      text-decoration: none
      border-left: 2px solid black
      &.router-link-exact-active
        color: white !important
        background: $color-red

@keyframes textTransform
  from
    transform: translateX(0)
  to
    transform: translateX(-90%)
</style>

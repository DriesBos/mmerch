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
        mmERCH playground your mmERCH playground your mmERCH playground
      </span>
    </div>
    <div class="header-Nav">
      <NuxtLink to="/" class="header-Logo_Item"> home </NuxtLink>
      <NuxtLink to="/box" class="header-Logo_Item"> box </NuxtLink>
      <NuxtLink to="/scroll" class="header-Logo_Item"> scroll </NuxtLink>
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
      animation-duration: 180s
      animation-iteration-count: infinite
      animation-direction: alternate
    &::-webkit-scrollbar
      display: none
  &-Nav
    display: flex
    & > a
      color: black
      font-family: Space Medium
      font-size: 1.68rem
      padding: 1rem 2rem
      text-decoration: none
      border-left: 2px solid black
      &.router-link-exact-active
        color: white !important
        background: $color-red

@keyframes textTransform
  from
    transform: translateX(0)
  to
    transform: translateX(-100%)
</style>

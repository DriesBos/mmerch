<template>
  <header>
    <div class="header">
      <div class="header-Animation">
        <span>
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH playground
          your mmERCH playground your mmERCH playground your mmERCH
          playgroundyour mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playgroundyour mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground your mmERCH playground your mmERCH playground your mmERCH
          playground
        </span>
      </div>
      <div class="header-Nav">
        <NuxtLink to="/" class="header-Logo_Item"> home </NuxtLink>
        <NuxtLink to="/trifecta" class="header-Logo_Item">Trifecta</NuxtLink>
        <NuxtLink to="/box" class="header-Logo_Item"> 3D box </NuxtLink>
        <NuxtLink to="/scroll" class="header-Logo_Item"> 3D scroll </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="sass">
.header, span
  display: flex
  &-Animation
    position: relative
    height: 100%
    flex-grow: 1
    overflow-x: auto
    white-space: nowrap
    vertical-align: bottom
    display: flex
    align-items: center
    padding: 1rem 1rem
    @media screen and ( max-width: $breakpoint-mobile)
      padding: 1rem .5rem
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
    border-left: 2px solid currentColor
    & > a
      color: black
      font-family: Space Medium
      padding: 1rem 1rem
      text-decoration: none
      @media screen and ( max-width: $breakpoint-mobile)
        padding: 1rem .5rem
      &.router-link-exact-active
        // color: white !important
        // background: black
        text-decoration: underline

@keyframes textTransform
  from
    transform: translateX(0)
  to
    transform: translateX(-90%)
</style>

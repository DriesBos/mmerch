<template>
  <header>
    <div class="header">
      <div class="header-Animation fadeInStaggered">
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
        <NuxtLink to="/" class="header-Logo_Item interactMenu fadeInStaggered">
          home
        </NuxtLink>
        <NuxtLink
          to="/video"
          class="header-Logo_Item interactMenu fadeInStaggered"
        >
          video
        </NuxtLink>
        <NuxtLink
          to="/trifecta"
          class="header-Logo_Item interactMenu fadeInStaggered"
          >Trifecta</NuxtLink
        >
        <NuxtLink
          to="/box"
          class="header-Logo_Item interactMenu fadeInStaggered"
        >
          3D box
        </NuxtLink>
        <NuxtLink
          to="/scroll"
          class="header-Logo_Item interactMenu fadeInStaggered"
        >
          3D scroll
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
// import hoverAnimations from '@/mixins/hoverAnimations';

export default {
  // mixins: [hoverAnimations],
};
</script>

<style lang="sass">
.header, span
  display: flex
  &-Animation
    position: relative
    height: 100%
    overflow-x: auto
    white-space: nowrap
    vertical-align: bottom
    display: flex
    align-items: center
    padding: $spacing-two $spacing-one
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
    flex-direction: row
    flex-wrap: nowrap
    flex-shrink: 0
    justify-content: flex-start
    border-left: $border-width solid $color
    padding: 0 $spacing-one
    overflow-x: auto
    & > a
      color: black
      font-family: Space Medium
      text-transform: lowercase
      padding: $spacing-two $spacing-one
      white-space: nowrap
      text-decoration: none
      @media screen and ( max-width: $breakpoint-mobile)
        padding: 1rem .5rem

@keyframes textTransform
  from
    transform: translateX(0)
  to
    transform: translateX(-90%)
</style>

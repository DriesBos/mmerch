<template>
  <div>
    <h1>TESTY PESTY</h1>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  mounted() {
    document
      .querySelectorAll('.interactEnlarge')
      .forEach((item) => item.addEventListener('mouseenter', this.isHovering));
    document
      .querySelectorAll('.interactEnlarge')
      .forEach((item) => item.addEventListener('mouseleave', this.isLeaving));
  },
  methods: {
    isHovering(event) {
      gsap.to(event.target, {
        duration: 0.33,
        scale: 1.1,
        ease: 'back',
      });
    },
    isLeaving(event) {
      gsap.to(event.target, {
        duration: 0.33,
        scale: 1,
        ease: 'back',
      });
    },
  },
};
</script>

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
    flex-shrink: 0
    border-left: $border-width solid $color
    padding: 0 $spacing-one
    & > a
      color: black
      font-family: Space Medium
      text-transform: lowercase
      padding: $spacing-two $spacing-one
      text-decoration: none
      @media screen and ( max-width: $breakpoint-mobile)
        padding: 1rem .5rem
      // &.router-link-exact-active

@keyframes textTransform
  from
    transform: translateX(0)
  to
    transform: translateX(-90%)
</style>

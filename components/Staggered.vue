<template>
  <div class="staggered">
    <div class="item staggerItem"></div>
    <div class="item staggerItem"></div>
    <div class="item staggerItem"></div>
    <!-- <div class="item"></div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    this.goStagger();
  },
  methods: {
    goStagger() {
      gsap.to('.staggerItem', 1, {
        opacity: 1,
        scale: 1,
        ease: 'ease',
        delay: 0.165,
        stagger: 0.05,
      });
    },
  },
};
</script>

<style lang="sass">
.staggered
  display: flex
  flex-wrap: nowrap
  width: 100%
  margin-bottom: 4rem
  & > .item
    flex-grow: 1
    height: 6rem
    border: $border-width solid $color-red
    margin: 0 1rem
    border-radius: $border-radius
    opacity: 0
    scale: 0.99
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
</style>

<template>
  <div class="staggered-Container">
    <h2 class="subtitle">Stagger example</h2>
    <div class="staggered">
      <div class="item staggerItem" @click="goStagger()"></div>
      <div class="item staggerItem" @click="goStagger()"></div>
      <div class="item staggerItem" @click="goStagger()"></div>
      <!-- <div class="item"></div> -->
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  watch: {
    $route(to, from) {
      this.goStagger();
      console.log('ROUTE CHANGE');
    },
  },
  mounted() {
    this.goStagger();
  },
  methods: {
    goStagger() {
      gsap.set('.staggerItem', {
        opacity: 0,
        scale: 0.99,
      }),
        gsap.to('.staggerItem', 0.5, {
          opacity: 1,
          scale: 1,
          ease: 'sine.in',
          stagger: 0.1,
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
    cursor: pointer
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
  &-Container
    width: 100%
</style>

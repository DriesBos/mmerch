<template>
  <div class="cursor soundBtn">
    <div class="cursor-Icon" :class="{ isUnmuted: !isMuted }">
      <Soundoff class="sound-Icon" alt="sound off" />
    </div>
    <div class="cursor-Icon" :class="{ isMuted: isMuted }">
      <SoundOn class="sound-Icon" alt="sound on" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SoundOn from '~/assets/icons/soundon.svg';
import Soundoff from '~/assets/icons/soundoff.svg';

const props = defineProps(['isMuted']);
console.log('MUTED', props.isMuted);
</script>

<style lang="sass">
.cursor
  position: fixed
  width: 0
  height: 0
  top: 0
  left: 0
  opacity: 0
  transform: translate(-50%, -50%)
  border-radius: 1000px
  z-index: 999
  pointer-events: none
  background: $color-red
  transition: opacity .1s ease-in-out, width .1s ease-in-out, height .1s ease-in-out
  &.active
    opacity: 1
    width: 4rem
    height: 4rem
  &.isHovering
    opacity: 1
    width: 4rem
    height: 4rem
    top: auto
    left: auto
    bottom: 1rem
    right: 1rem
  &-Icon
    display: none
    width: 2rem
    height: 2rem
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    svg
      width: 100%
      height: 100%
      object-fit: contain
      color: white
    &.isMuted
      display: inline-block
    &.isUnmuted
      display: inline-block
</style>

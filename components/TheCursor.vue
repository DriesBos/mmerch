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
  width: 3rem
  height: 3rem
  top: 0
  left: 0
  opacity: 0
  transform: translate(-50%, -50%)
  border-radius: 1000px
  backdrop-filter: blur(5px)
  -webkit-backdrop-filter: blur(5px)
  background: rgba(255, 255, 255, 0.33)
  z-index: 999
  pointer-events: none
  transition: opacity .1s ease-in-out, width .1s ease-in-out, height .1s ease-in-out
  &.active
    opacity: 1
    width: 3rem
    height: 3rem
  &-Icon
    display: none
    width: 1.5rem
    height: 1.5rem
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    svg
      width: 100%
      height: 100%
      object-fit: contain
      color: black
    &.isMuted
      display: inline-block
    &.isUnmuted
      display: inline-block
</style>

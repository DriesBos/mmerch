<template>
  <div class="section soundBtn">
    <div class="cursor">
      <span v-if="muted">sound off</span>
      <span v-else>sound on</span>
    </div>
  </div>
</template>

<script>
import SoundBtn from '@/mixins/soundBtn';

export default {
  mixins: [SoundBtn],
  data() {
    return {
      muted: true,
    };
  },
  mounted() {
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) => item.addEventListener('mouseup', this.changeMute));
  },
  unmounted() {
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) => item.removeEventListener('mouseup', this.changeMute));
  },
  methods: {
    changeMute() {
      this.muted = !this.muted;
      if (this.muted) {
        document.querySelector('.cursor').classList.remove('muted');
      } else {
        document.querySelector('.cursor').classList.add('muted');
      }
    },
  },
};
</script>

<style lang="sass">
.cursor
  position: fixed
  width: 6rem
  height: 2rem
  transform: translate(-50%, -70%)
  border-radius: 1000px
  z-index: 999
  pointer-events: none
  opacity: 0
  background: $color-red
  transition: opacity .1s ease-in-out
  span
    position: absolute
    top: calc(50%)
    left: 50%
    transform: translate(-50%, -50%)
    white-space: nowrap
    width: max-content
    color: white
    &::selection
      background: transparent
  &.active
    opacity: 1
  &.muted
    background: $color-green
    span
      color: black
</style>

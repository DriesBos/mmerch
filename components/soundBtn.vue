<template>
  <div class="section soundBtn"></div>
</template>

<!-- <script>
import { gsap } from 'gsap';
// import SoundBtn from '@/mixins/soundBtn';

export default {
  // mixins: [SoundBtn],
  data() {
    return {
      muted: true,
    };
  },
  mounted() {
    this.customCursor();
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) => item.addEventListener('mouseover', this.changeCursor));
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.removeChangeCursor)
      );
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) => item.addEventListener('mouseup', this.changeMute));
  },
  unmounted() {
    this.removeChangeCursor();
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) =>
        item.removeEventListener('mouseover', this.changeCursor)
      );
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) =>
        item.removeEventListener('mouseleave', this.removeChangeCursor)
      );
    document
      .querySelectorAll('.soundBtn')
      .forEach((item) => item.removeEventListener('mouseup', this.changeMute));
  },
  methods: {
    customCursor() {
      const cursor = document.querySelector('.cursor');
      function moveCursor(e) {
        console.log(e);
        gsap.to(cursor, 0.165, {
          left: e.clientX,
          top: e.clientY,
          ease: 'ease',
          delay: 0.05,
        });
      }
      document.addEventListener('mousemove', moveCursor);
    },
    changeCursor() {
      document.querySelector('.cursor').classList.add('active');
    },
    removeChangeCursor() {
      document.querySelector('.cursor').classList.remove('active');
    },
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
</script> -->

<style lang="sass">
.cursor
  position: fixed
  width: 6rem
  height: 2rem
  transform: translate(-50%, -50%)
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

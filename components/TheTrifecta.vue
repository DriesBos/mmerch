<template>
  <div class="scrollTrigger block">
    <div class="scrollTrigger-Container">
      <div
        @mouseover="hoverOver"
        @mouseleave="hoverOut"
        class="scrollTrigger-Card scrollTrigger-Card_Left"
      ></div>
      <div
        @mouseover="hoverOver"
        @mouseleave="hoverOut"
        class="scrollTrigger-Card scrollTrigger-Card_Center"
      ></div>
      <div
        @mouseover="hoverOver"
        @mouseleave="hoverOut"
        class="scrollTrigger-Card scrollTrigger-Card_Right"
      ></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      gsap.to('.scrollTrigger-Card', 1, {
        delay: 0.33,
        height: '100%',
        ease: 'circ',
      });

      gsap.to('.scrollTrigger-Card_Left', 0.66, {
        delay: 1.33,
        x: '-107%',
        ease: 'ease',
      });

      gsap.to('.scrollTrigger-Card_Right', 0.66, {
        delay: 1.33,
        x: '107%',
        ease: 'ease',
      });
    },
    hoverOver(e) {
      console.log(e);
      gsap.to(e.target, 0.33, {
        scale: 1.33,
        zIndex: '+1',
        ease: 'ease',
      });
    },
    hoverOut(e) {
      console.log(e);
      gsap.to(e.target, 0.33, {
        scale: 1,
        zIndex: 'inherit',
        ease: 'ease',
      });
    },
  },
};
</script>

<style lang="sass">
$height: 50vmin
$width: calc(33.3333vmin - 1rem)
@media screen and ( max-width: $breakpoint-mobile)
  $width: 30vw

.scrollTrigger
  width: 100%
  height: calc(100vh - 2.5rem - 8px)
  margin-top: calc(2.5rem + 6px)
  display: flex
  align-items: center
  justify-content: center
  &-Container
    position: relative
    height: $height
    width: $width
  &-Card
    position: absolute
    left: 0
    bottom: 0
    height: 0%
    width: $width
    background: $color-grey
    opacity: .66
</style>

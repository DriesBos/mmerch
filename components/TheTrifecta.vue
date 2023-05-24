<template>
  <div class="trifecta block">
    <div class="trifecta-Container">
      <div
        @mouseover="hoverOver"
        @mouseleave="hoverOut"
        class="trifecta-Card trifecta-Card_Left"
      ></div>
      <div
        @mouseover="hoverOver"
        @mouseleave="hoverOut"
        class="trifecta-Card trifecta-Card_Center"
      ></div>
      <div
        @mouseover="hoverOver"
        @mouseleave="hoverOut"
        class="trifecta-Card trifecta-Card_Right"
      ></div>
    </div>
    <div class="btn trifecta-Btn" @click="animation()"><span>Run</span></div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  mounted() {
    // this.animation();
  },
  methods: {
    animation() {
      gsap.set('.trifecta-Card', {
        height: '0%',
      });
      gsap.set('.trifecta-Card_Left', {
        x: 0,
      });
      gsap.set('.trifecta-Card_Right', {
        x: 0,
      });

      gsap.to('.trifecta-Card', 1, {
        delay: 0.33,
        height: '100%',
        ease: 'circ',
      });

      gsap.to('.trifecta-Card_Left', 0.66, {
        delay: 1.33,
        x: '-107%',
        ease: 'ease',
      });

      gsap.to('.trifecta-Card_Right', 0.66, {
        delay: 1.33,
        x: '107%',
        ease: 'ease',
      });
    },
    hoverOver(e) {
      gsap.to(e.target, 0.33, {
        scale: 1.33,
        zIndex: '+1',
        ease: 'ease',
      });
    },
    hoverOut(e) {
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

.trifecta
  width: 100%
  height: 100vh
  margin-top: 0
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
  &-Btn
    position: fixed
    left: 50vw
    transform: translateX(-50%)
    bottom: 2rem
</style>

<template>
  <div class="page page-Index">
    <div class="content">
      <Staggered />
      <div class="section sectionStagger green">
        <h2 class="subtitle">Header links</h2>
        <Nav class="zoom" />
      </div>
      <div class="section sectionStagger">
        <h2 class="subtitle">Buttons and arrows</h2>
        <div class="btn-Container btn-Container_Vertical">
          <PrevNext class="zoom">PrevNext Arrows</PrevNext>
        </div>
        <div class="btn-Container btn-Container_Vertical">
          <Btn class="black zoom">Buttons</Btn>
        </div>
      </div>
      <div class="section sectionStagger">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <Btn class="black zoom">Let's connect</Btn>
        </div>
      </div>
      <div class="section sectionStagger green">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <Btn class="green zoom">Let's connect</Btn>
        </div>
      </div>

      <div class="section sectionStagger blue">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <Btn class="blue zoom">Let's connect</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import soundBtn from '@/mixins/hoverAnimations';
import { gsap } from 'gsap';

export default {
  // mixins: [hoverAnimations],
  mounted() {
    this.goStagger();
  },
  methods: {
    goStagger() {
      gsap.to('.sectionStagger', 0.5, {
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
.sectionStagger
  opacity: 0
  scale: 0.995
.content
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  background: $color-white
  padding: 12rem 4rem
  @media screen and ( max-width: $breakpoint-mobile)
    padding: 12rem 2rem
  border-radius: $border-radius
  > .section
    color: $color-red
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    border: $border-width solid currentColor
    width: 100%
    max-width: 1440px
    padding: 4rem 2rem
    border-radius: 2rem 2rem 1rem 1rem
    margin-bottom: 4rem
    @media screen and ( max-width: $breakpoint-mobile)
      padding: 4rem 1rem
    &.blue
      border-color: $color-blue
      min-height: 50vmin
      scale: 1
    &.green
      border-color: $color-green
    &.zoom
      scale: 1
      transition: scale $trans-hover
      &:hover
        scale: 1.005
    &.zoomTwo
      scale: 1
      transition: scale $trans-hover
      &:hover
        scale: 1.01
    &.zoomThree
      scale: 1
      transition: scale $trans-hover
      &:hover
        scale: 1.015
    > div
      margin-bottom: 4rem
      &:last-child
        margin-bottom: 0
</style>

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
      <div class="section sectionStagger green">
        <h2 class="subtitle">Drop 1 // artist and artwork</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <p class="paragraph">
          We make one-of-one fashion for everyone — singular designs that define
          the wearer as provably unique while simultaneously connecting them to
          the larger network of mmERCH collectors. We believe in a world of
          difference where clothes are as distinctive as DNA and you've got the
          on-chain data to prove it.
        </p>

        <div class="btn-Container">
          <Btn class="green zoom">Let's connect</Btn>
        </div>
      </div>
      <div class="section sectionStagger">
        <h2 class="subtitle">MMERCH</h2>
        <h1 class="title">A Manifesto for a Future Heritage</h1>
        <p class="paragraph">
          We make one-of-one fashion for everyone — singular designs that define
          the wearer as provably unique while simultaneously connecting them to
          the larger network of mmERCH collectors. We believe in a world of
          difference where clothes are as distinctive as DNA and you've got the
          on-chain data to prove it.
        </p>
        <div class="btn-Container">
          <Btn class="black zoom">Let's connect</Btn>
        </div>
      </div>

      <div class="section sectionStagger blue">
        <h2 class="subtitle">THE MMERCH SQUAD</h2>
        <h1 class="title">
          A collection of artists, esthetes, degens, designers, philosophers,
          and coders.
        </h1>
        <p class="paragraph">
          mmERCH is the culmination of Colby Mugrabi’s beaming, gleaming love of
          art and fashion. After studying art history and fashion business at
          the Gallatin School (at NYU), Colby founded the much lauded website,
          Minnie Muse. Known, and notable, for its original high-quality content
          that cultivates the cross-pollination of art, fashion, architecture,
          and design, Minnie Muse has earned a wide and adoring audience along
          with praise from the press.
        </p>

        <div class="btn-Container">
          <Btn class="blue zoom">Let's connect</Btn>
        </div>
      </div>

      <div class="section sectionStagger">
        <h2 class="subtitle">SPACING EXAMPLE</h2>
        <div class="spacing">
          <div><span>16</span></div>
          <div><span>32</span></div>
          <div><span>64</span></div>
          <div><span>128</span></div>
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
.spacing
  width: 100%
  display: flex
  justify-content: flex-start
  flex-wrap: nowrap
  span
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  & > div
    flex-grow: 1
    margin-right: 1rem
    border-radius: $border-radius
    position: relative
    background: $color-red
    &:last-child
      margin-right: 0
    &:nth-child(1)
      height: 1rem
    &:nth-child(2)
      height: 2rem
    &:nth-child(3)
      height: 3rem
    &:nth-child(4)
      height: 4rem
.content
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  background: $color-white
  padding: 12rem 4rem
  overflow-x: hidden
  @media screen and ( max-width: $breakpoint-mobile)
    padding: 12rem 1rem
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
    padding: 6rem 2rem
    border-radius: 2rem 2rem 1rem 1rem
    margin-bottom: 4rem
    @media screen and ( max-width: $breakpoint-mobile)
      padding: 4rem 2rem
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

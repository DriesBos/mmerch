<template>
  <div class="page page-Index">
    <div class="content">
      <div class="section">
        <Nav class="zoom" />
      </div>
      <div class="section">
        <div class="btn-Container btn-Container_Vertical">
          <PrevNext class="static">Static</PrevNext>
          <PrevNext class="smooth">Smooth</PrevNext>
          <PrevNext class="zoom">Zoom</PrevNext>
        </div>
        <div class="btn-Container btn-Container_Vertical">
          <Btn class="black">Static</Btn>
          <Btn class="blue">Static</Btn>
          <Btn class="green">Static</Btn>
          <Btn class="black smooth">Smooth</Btn>
          <Btn class="black zoom">Zoom</Btn>
          <Btn class="black interactBtn">Sticky</Btn>
        </div>
      </div>
      <SoundBtn class="blue" />
      <div class="section">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <Btn class="black zoom">Let's connect</Btn>
        </div>
      </div>
      <div class="section green">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <Btn class="green zoom">Let's connect</Btn>
        </div>
      </div>

      <div class="section blue">
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

<script setup>
definePageMeta({
  title: 'mmERCH playground — home',
});
</script>

<style lang="sass" scoped>
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
    &.green
      border-color: $color-green
    &.zoom
      scale: 1
      transition: scale $trans-hover
      &:hover
        scale: 1.005
    > div
      margin-bottom: 4rem
      &:last-child
        margin-bottom: 0
    > .subtitle
      margin-bottom: 1rem
    > .title
      margin-bottom: 4rem
</style>

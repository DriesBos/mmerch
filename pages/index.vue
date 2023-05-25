<template>
  <div class="page page-Index">
    <div class="content">
      <div class="section">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <div class="btn red"><span>Let's connect</span></div>
        </div>
      </div>
      <div class="section green">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <div class="btn green"><span>Let's connect</span></div>
        </div>
      </div>

      <div class="section blue">
        <h2 class="subtitle">Drop 1 // GENESIS COLLECTION</h2>
        <h1 class="title">
          Our first drop is in collaboration with the legendary, multi-award
          winning comic book artist, Gilbert Hernández.
        </h1>
        <div class="btn-Container">
          <div class="btn blue"><span>Let's connect</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    > .subtitle
      margin-bottom: 1rem
    > .title
      margin-bottom: 4rem
</style>

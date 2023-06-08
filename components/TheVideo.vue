<template>
  <div class="theVideo-Container">
    <div class="theVideo">
      <video
        autoplay
        muted
        src="~assets/images/talkinghead.mp4"
        type="video/mp4"
      />
    </div>
    <div class="theVideo-Explainer">
      <p>Video mute button example. For mobile please check page on mobile</p>
    </div>
    <div class="theVideo-Explainer">
      <p>
        IF the video is muted THEN browsers will allow it to play automatically.
        IF the video is unmuted THEN browsers will stop the video until users
        start it manually.
      </p>
    </div>
  </div>
</template>

<style lang="sass">
.theVideo
  cursor: none
  height: auto
  width: 50vmin
  border-radius: 10rem 10rem 2rem 2rem
  overflow: hidden
  &-Container
    padding: 12rem 4rem
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-end
    & > div
      margin-bottom: 1rem
      &:last-child
        margin-bottom: 0
  &-Explainer
    max-width: 50vmin


.cursor
  position: fixed
  width: 0
  height: 0
  transform: translate(-50%, -50%)
  border-radius: 1000px
  z-index: 999
  pointer-events: none
  opacity: 0
  background: $color-red
  transition: opacity .1s ease-in-out, width .1s ease-in-out, height .1s ease-in-out
  span
    position: absolute
    top: calc(50%)
    left: 50%
    transform: translate(-50%, -50%)
    white-space: nowrap
    width: max-content
    color: white
    font-size: 1.5rem
    background: blue
    &::selection
      background: transparent
  &.active
    opacity: 1
    width: 4rem
    height: 4rem
  &.muted
    background: $color-green
    span
      color: black
  &.sound-Icon
    border: 5px solid green
</style>

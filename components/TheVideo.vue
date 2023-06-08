<template>
  <div class="theVideo-Container">
    <div class="theVideo">
      <TheCursor :isMuted="muted" />
      <div class="cursorTwo" :class="[{ isHovering: !isHovering }]">
        <div class="cursor-Icon" :class="{ isUnmuted: !muted }">
          <svgoSoundoff class="sound-Icon" alt="sound off" />
        </div>
        <div class="cursor-Icon" :class="{ isMuted: muted }">
          <svgoSoundOn class="sound-Icon" alt="sound on" />
        </div>
      </div>
      <video
        autoplay
        loop
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

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      muted: true,
      isHovering: false,
    };
  },
  mounted() {
    this.customCursor();
    document
      .querySelectorAll('.theVideo')
      .forEach((item) => item.addEventListener('mouseover', this.changeCursor));
    document
      .querySelectorAll('.theVideo')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.removeChangeCursor)
      );
    document
      .querySelectorAll('.theVideo')
      .forEach((item) => item.addEventListener('mouseup', this.changeMute));
  },
  unmounted() {
    this.customCursor();
    document
      .querySelectorAll('.theVideo')
      .forEach((item) =>
        item.removeEventListener('mouseover', this.changeCursor)
      );
    document
      .querySelectorAll('.theVideo')
      .forEach((item) =>
        item.removeEventListener('mouseleave', this.removeChangeCursor)
      );
    document
      .querySelectorAll('.theVideo')
      .forEach((item) => item.removeEventListener('mouseup', this.changeMute));
  },
  methods: {
    customCursor() {
      const cursor = document.querySelector('.cursor');
      function moveCursor(e) {
        gsap.to(cursor, 0.165, {
          left: e.clientX,
          top: e.clientY,
          ease: 'ease',
        });
      }
      document.addEventListener('mousemove', moveCursor);
    },
    changeCursor() {
      this.isHovering = true;
      document.querySelector('.cursor').classList.add('active');
    },
    removeChangeCursor() {
      this.isHovering = false;
      document.querySelector('.cursor').classList.remove('active');
    },
    // MUTE BOOLEAN
    changeMute() {
      const media = document.querySelector('video');
      if (this.muted) {
        document.querySelector('.cursor').classList.remove('muted');
        media.muted = false;
        media.currentTime = 0;
        this.muted = false;
      } else {
        document.querySelector('.cursor').classList.add('muted');
        media.muted = true;
        this.muted = true;
      }
    },
  },
};
</script>

<style lang="sass">
.theVideo
  position: relative
  // cursor: none
  height: auto
  width: 50vmin
  border-radius: 10rem 10rem 2rem 2rem
  overflow: hidden
  &-Container
    position: relative
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

.cursorTwo
  position: absolute
  width: 4rem
  height: 4rem
  bottom: .5rem !important
  right: .5rem !important
  opacity: 0
  transform: translate(-50%, -50%)
  border-radius: 1000px
  z-index: 999
  pointer-events: none
  background: $color-red
  transition: opacity .1s ease-in-out, width .1s ease-in-out, height .1s ease-in-out
  &.isHovering
    opacity: 1
  &-Icon
    display: none
    width: 2rem
    height: 2rem
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    svg
      width: 100%
      height: 100%
      object-fit: contain
      color: white
    &.isMuted
      display: inline-block
    &.isUnmuted
      display: inline-block
</style>

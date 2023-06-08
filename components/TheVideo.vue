<template>
  <div class="theVideo-Container">
    <TheCursor :isMuted="muted" />
    <div class="theVideo">
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
    this.removeChangeCursor();
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
          // delay: 0.05,
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
      console.log(this.muted);
    },
  },
};
</script>

<style lang="sass">
.theVideo
  cursor: none
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
</style>

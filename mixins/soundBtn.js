import { gsap } from 'gsap';

export default {
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

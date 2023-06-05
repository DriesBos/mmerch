import gsap from 'gsap';

export default {
  mounted() {
    document
      .querySelectorAll('.interactEnlarge')
      .forEach((item) => item.addEventListener('mouseenter', this.isHovering));
    document
      .querySelectorAll('.interactEnlarge')
      .forEach((item) => item.addEventListener('mouseleave', this.isLeaving));
  },
  methods: {
    isHovering(event) {
      gsap.to(event.target, {
        duration: 0.33,
        scale: 1.02,
        ease: 'cine.in',
      });
    },
    isLeaving(event) {
      gsap.to(event.target, {
        duration: 0.165,
        scale: 1,
        ease: 'back.in',
      });
    },
  },
};

import gsap from 'gsap';

export default {
  mounted() {
    document
      .querySelectorAll('.interactBtn')
      .forEach((item) =>
        item.addEventListener('mouseenter', this.isHoveringBtn)
      );
    document
      .querySelectorAll('.interactBtn')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.isLeavingBtn)
      );
    document
      .querySelectorAll('.interactArrow')
      .forEach((item) =>
        item.addEventListener('mouseenter', this.isHoveringArrow)
      );
    document
      .querySelectorAll('.interactArrow')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.isLeavingArrow)
      );
    // document
    //   .querySelectorAll('.interactMenu')
    //   .forEach((item) =>
    //     item.addEventListener('mouseenter', this.isHoveringMenu)
    //   );
    // document
    //   .querySelectorAll('.interactMenu')
    //   .forEach((item) =>
    //     item.addEventListener('mouseleave', this.isLeavingMenu)
    //   );
  },
  methods: {
    // isHoveringMenu(event) {
    //   gsap.to(event.target, {
    //     duration: 0.33,
    //     scale: 1.1,
    //     ease: 'cine.in',
    //   });
    // },
    // isLeavingMenu(event) {
    //   gsap.to(event.target, {
    //     duration: 0.165,
    //     scale: 1,
    //     ease: 'cine.out',
    //   });
    // },
    isHoveringBtn(event) {
      gsap.to(event.target, {
        duration: 0.33,
        scale: 1.02,
        ease: 'cine.in',
      });
    },
    isLeavingBtn(event) {
      gsap.to(event.target, {
        duration: 0.165,
        scale: 1,
        ease: 'back.in',
      });
    },
    isHoveringArrow(event) {
      gsap.to(event.target, {
        duration: 1,
        scale: 1.1,
        x: '50%',
        ease: 'ease',
      });
    },
    isLeavingArrow(event) {
      gsap.to(event.target, {
        duration: 1,
        scale: 1,
        x: 0,
        ease: 'ease',
      });
    },
  },
};

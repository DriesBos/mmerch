<template>
  <div class="webgl block" div ref="content">
    <!-- <div class="shiba" @click="shibaCamera()"><p>SHIBA</p></div> -->
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';

import {
  Scene,
  PerspectiveCamera,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  Clock,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let renderer: WebGLRenderer;

const experience: Ref<HTMLCanvasElement | null> = ref(null);

// VARS
const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

// SCENE
const scene = new Scene();

// CAMERA
const camera = new PerspectiveCamera(50, aspectRatio.value, 0.1, 2000);
camera.position.set(0, 0, 0);

scene.add(camera);

// OBJECTS => MODELS

const shiba = new GLTFLoader();

shiba.load('/models/Shiba/scene.gltf', (gltf) => {
  gltf.scene.position.set(1, 0.2, -2);
  gltf.scene.scale.set(0.75, 0.75, 0.75);
  scene.add(gltf.scene);
});

// OBJECTS => BLOCKS

// Loading image
// const imageLoader = new TextureLoader();
// const texture = imageLoader.load('/images/album.jpeg');

const sphere1 = new Mesh(
  new PlaneGeometry(
    (height.value / height.value) * 0.66,
    (height.value / height.value) * 1
  ),
  new MeshBasicMaterial({ color: 0xabfb00 })
);

const sphere2 = new Mesh(
  new PlaneGeometry(
    (height.value / height.value) * 0.66,
    (height.value / height.value) * 1
  ),
  new MeshBasicMaterial({ color: 0xabfb00 })
  // new MeshBasicMaterial({ map: texture })
);

scene.add(sphere1, sphere2);

sphere1.position.z = -2;
sphere2.position.z = -2;

sphere1.position.x = 0;
sphere2.position.x = -1;

// OBJECTS => PARTICLES

// const particlesCount = 5000;
// const positions = new Float32Array(particlesCount * 3);
// const colors = new Float32Array(particlesCount * 3);

// for (let i = 0; i < particlesCount * 3; i++) {
//   positions[i] = (Math.random() - 0.5) * 10;
//   colors[i] = Math.random();
// }

// const particlesGeometry = new BufferGeometry();
// particlesGeometry.setAttribute('position', new BufferAttribute(positions, 3));
// particlesGeometry.setAttribute('color', new BufferAttribute(colors, 3));

// const particlesMaterial = new PointsMaterial({
//   // color: parameters.materialColor,
//   // color: 0xcccccc,
//   sizeAttenuation: true,
//   size: 0.03,
// });

// const particles = new Points(particlesGeometry, particlesMaterial);
// scene.add(particles);

// CLOCK

const clock = new Clock();

const tick = () => {
  const previousTime = 0;
  const elapsedTime = clock.getElapsedTime;
  const deltaTime = elapsedTime - previousTime;
};

// FUNCTIONS

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

// function shibaCamera() {
//   camera.position.set(0.75, 0.5, 0);
// }

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
  renderer.setClearColor(0x0f22fd, 1);
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true });
    updateRenderer();
  }
}

// PARALLAX
const setParallax = (event) => {
  const cursorX = event.clientX / (width.value * 1) - 0.5;
  const cursorY = event.clientY / (height.value * 1) - 0.5;
  const rotateX = event.clientX / (width.value * 2) - 0.25;
  const rotateY = event.clientY / (height.value * 2) - 0.25;
  camera.position.x = cursorX;
  camera.position.y = -cursorY;
  camera.rotation.x = rotateY;
  camera.rotation.y = rotateX;
};

// LIFECYCLE HOOKS
watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  document.addEventListener('mousemove', setParallax);
  loop();
  tick();
  // createParticles();
});

const loop = () => {
  // shiba.rotation.y += 0.005;
  updateRenderer();
  requestAnimationFrame(loop);
};
</script>

<style lang="sass">

// .shiba
//   position: fixed
//   left: 2rem
//   top: 1rem
//   color: white
//   text-transform: uppercase
//   padding: .5rem 1rem
//   text-decoration: none
//   background: grey
//   cursor: pointer
//   &:hover
//     background: green
</style>

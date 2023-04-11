<template>
  <div class="webgl" div ref="content">
    <TheHeader />
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  SphereGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  Clock,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
} from 'three';
import { Ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { typeParameterInstantiation } from '@babel/types';

gsap.registerPlugin(ScrollTrigger);

let renderer: WebGLRenderer;

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const scene = new Scene();

// CAMERA
const camera = new PerspectiveCamera(50, aspectRatio.value, 0.1, 2000);
camera.position.set(0, 0, 1);

scene.add(camera);

// OBJECTS => BLOCKS

const sphere1 = new Mesh(
  new PlaneGeometry(
    (height.value / height.value) * 0.66,
    (height.value / height.value) * 1
  ),
  new MeshBasicMaterial({ color: 0xffffff })
);

const sphere2 = new Mesh(
  new PlaneGeometry(
    (height.value / height.value) * 0.66,
    (height.value / height.value) * 1
  ),
  new MeshBasicMaterial({ color: 0xffffff })
);

const sphere3 = new Mesh(
  new PlaneGeometry(
    (height.value / height.value) * 0.66,
    (height.value / height.value) * 1
  ),
  new MeshBasicMaterial({ color: 0xffffff })
);

scene.add(sphere1, sphere2, sphere3);

sphere1.position.z = -2;
sphere2.position.z = -2;
sphere3.position.z = -2;

sphere1.position.x = 0;
sphere2.position.x = -1;
sphere3.position.x = 1;

// OBJECTS => PARTICLES

const particlesCount = 5000;
const positions = new Float32Array(particlesCount * 3);
const colors = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
  colors[i] = Math.random();
}

const particlesGeometry = new BufferGeometry();
particlesGeometry.setAttribute('position', new BufferAttribute(positions, 3));
particlesGeometry.setAttribute('color', new BufferAttribute(colors, 3));

const particlesMaterial = new PointsMaterial({
  // color: parameters.materialColor,
  // color: 0xcccccc,
  sizeAttenuation: true,
  size: 0.03,
});

const particles = new Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// CLOCK

const clock = new Clock();

const tick = () => {
  const previousTime = 0;
  const elapsedTime = clock.getElapsedTime;
  const deltaTime = elapsedTime - previousTime;
  console.log('TIME', clock.getElapsedTime.value);
};

// FUNCTIONS

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true });
    updateRenderer();
  }
}

// PARALLAX
const setParallax = (event) => {
  const cursorX = event.clientX / (width.value * 8) - 0.0565;
  const cursorY = event.clientY / (height.value * 8) - 0.0565;
  camera.position.x = cursorX;
  camera.position.y = -cursorY;
  camera.rotation.x = -cursorY;
  camera.rotation.y = -cursorX;
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
  updateRenderer();
  requestAnimationFrame(loop);
};
</script>

<style lang="sass">
.webgl
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100%
</style>

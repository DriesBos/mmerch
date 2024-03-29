<template>
  <div class="webgl block" div ref="content">
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  Clock,
  GridHelper,
  FontLoader,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { Ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let renderer: WebGLRenderer;

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

// SCENE
const scene = new Scene();

// GRIDHELPER

const size = 100;
const divisions = 100;
const color = '#0F22FD';
const gridHelper = new GridHelper(size, divisions, color, color);
gridHelper.position.y = -0.33;
// scene.add(gridHelper);

// CAMERA
const camera = new PerspectiveCamera(50, aspectRatio.value, 0.1, 2000);
camera.position.set(0, 0, 0);

scene.add(camera);

// OBJECTS

// Text

// const textObject = new FontLoader();
// textObject.load('fonts/helvetiker_regular.typeface.json', function (font) {
//   const geometry = new TextGeometry('Hello three.js!', {
//     font: font,
//     size: 80,
//     height: 5,
//     curveSegments: 12,
//     bevelEnabled: true,
//     bevelThickness: 10,
//     bevelSize: 8,
//     bevelOffset: 0,
//     bevelSegments: 5,
//   });
// });

// => SHIBA
const shiba = new GLTFLoader();

shiba.load('/models/Shiba/scene.gltf', (gltf) => {
  gltf.scene.position.set(0, 2, -4.5);
  gltf.scene.scale.set(0.75, 0.75, 0.75);
  scene.add(gltf.scene);
});

// // => NOODLE
// const noodle = new GLTFLoader();

// noodle.load('/models/noodle.glb', (gltf) => {
//   gltf.scene.position.set(0, 2, -4.5);
//   gltf.scene.scale.set(0.75, 0.75, 0.75);
//   scene.add(gltf.scene);
// });

// => PLANES
const sphere1 = new Mesh(
  new PlaneGeometry(
    (width.value / height.value) * 0.66,
    (height.value / height.value) * 0.66
  ),
  new MeshBasicMaterial({ color: 0x000000 })
);

const sphere2 = new Mesh(
  new PlaneGeometry(
    (width.value / height.value) * 0.66,
    (height.value / height.value) * 0.66
  ),
  new MeshBasicMaterial({ color: 0x000000 })
);

const sphere3 = new Mesh(
  new PlaneGeometry(
    (width.value / height.value) * 0.66,
    (height.value / height.value) * 0.66
  ),
  new MeshBasicMaterial({ color: 0x000000 })
);

scene.add(sphere1, sphere2);

const objectsDistanceZ = 1.5;
const objectsDistanceY = 1;
const cameraDistanceZ = 1.5;
const cameraDistanceY = 1;

sphere1.position.z = -objectsDistanceZ * 1;
sphere2.position.z = -objectsDistanceZ * 2;
sphere3.position.z = -objectsDistanceZ * 3;
// sphere4.position.z = -objectsDistanceZ * 4;

sphere1.position.y = objectsDistanceY * 0;
sphere2.position.y = objectsDistanceY * 1;
sphere3.position.y = objectsDistanceY * 2;
// sphere4.position.y = objectsDistanceY * 3;

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
    renderer = new WebGLRenderer({
      canvas: experience.value,
      alpha: true,
      antialias: true,
    });
    updateRenderer();
  }
}

const setScroll = (event) => {
  camera.position.z =
    (-event.target.scrollingElement.scrollTop / height.value) * cameraDistanceZ;
  camera.position.y =
    (event.target.scrollingElement.scrollTop / height.value) * cameraDistanceY;
};

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  document.addEventListener('scroll', setScroll);
  loop();
});

const loop = () => {
  updateRenderer();
  requestAnimationFrame(loop);
};
</script>

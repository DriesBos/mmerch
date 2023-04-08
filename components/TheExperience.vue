<template>
  <div class="webgl" div ref="content">
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
} from 'three';
import { Ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let renderer: WebGLRenderer;

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const scene = new Scene();

const camera = new PerspectiveCamera(50, aspectRatio.value, 0.1, 2000);
camera.position.set(0, 0, 4);

scene.add(camera);

const sphere1 = new Mesh(
  new PlaneGeometry(1, 1),
  new MeshBasicMaterial({ color: 0x008010 })
);

const sphere2 = new Mesh(
  new PlaneGeometry(1, 1),
  new MeshBasicMaterial({ color: 0x008880 })
);

const sphere3 = new Mesh(
  new PlaneGeometry(1, 1),
  new MeshBasicMaterial({ color: 0x035088 })
);

scene.add(sphere1, sphere2, sphere3);

const objectsDistanceZ = 4;
const objectsDistanceY = 1;

sphere1.position.z = -objectsDistanceZ * 1;
sphere2.position.z = -objectsDistanceZ * 2;
sphere3.position.z = -objectsDistanceZ * 3;

sphere1.position.y = objectsDistanceY * 0;
sphere2.position.y = objectsDistanceY * 1;
sphere3.position.y = objectsDistanceY * 2;

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
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true });
    updateRenderer();
  }
}

const setScroll = (event) => {
  camera.position.z =
    (-event.target.scrollingElement.scrollTop / height.value) *
    objectsDistanceZ;
  camera.position.y =
    (event.target.scrollingElement.scrollTop / height.value) * objectsDistanceY;
  console.log(event.target.scrollingElement.scrollTop);
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
  // sphere1.position.x += 0.01;
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

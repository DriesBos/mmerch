<template>
  <div class="shader block">
    <!-- <img class="shader-Image" src="~/assets/images/michael.png" /> -->
    <!-- <canvas class="glslCanvas" data-fragment-url="shader.frag" data-textures="~/assets/images/michael.png" width="500" height="500"></canvas> -->
  </div>
</template>

<style lang="sass">
.shader
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  &-Image
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    height: 66vh
    width: auto
    border: 2px solid green
  &-Canvas
    z-index: +1
    display: block
    border: 2px solid orange
    position: absolute
    left: 0
    top: 0
    width: 100vw
    height: 100vh
</style>

<template>
  <div class="shader">
    <!-- <img class="shader-Image" src="~/assets/images/michael.png" /> -->
    <canvas
      class="glslCanvas shader-Canvas"
      data-fragment-url="https://www.shadertoy.com/view/4lBBRz"
      width="600"
      height="900"
      data-textures="~/assets/images/michael.png"
    ></canvas>
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
  &-Canvas
    z-index: +1
</style>

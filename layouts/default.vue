<template>
  <div class="main">
    <TheHeader />
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMuted: true,
    };
  },
};
</script>

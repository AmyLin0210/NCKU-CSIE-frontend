<template lang="pug">
section.banner
  img.image(:src="require(`@/assets/image/${imageSrc}`)")
  h1.text {{title}}
</template>

<script>
export default {
  name: 'banner',
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      default: 'banner/about/index.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  // [ layout ]
  display: block;
  position: relative;

  // [ position ]
  width: 100vw;
  height: 50vh;
}

.image {
  // [ layout ]
  display: block;
  position: absolute;
  z-index: 0;

  // [ position ]
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  // [ skin ]
  object-fit: cover;
}

.text {
  // [ layout ]
  display: block;
  position: absolute;

  // [ position ]
  top: 50%;
  width: 100%;

  // [ skin ]
  text-align: center;
  line-height: normal;
  color: #ffffff;
  font: {
    size: 50px;
    weight: bold;
  }
}
</style>

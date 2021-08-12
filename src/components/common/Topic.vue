<template lang="pug">
section.topic
  h2.text {{topic}}
</template>

<script>
export default {
  name: 'topic',
  props: {
    topic: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

.topic {
  // [ layout ]
  display: block;

  // [ position ]
  width: fit-content;
  height: fit-content;
  margin: {
    top: 20px;
    bottom: 20px;
    left: auto;
    right: auto;
  }
  border-bottom: solid 1px #bfbfbf;

  @media screen and ( min-width: $break-point-sm ) {
    width: 100%;
  }
}

.text {
  // [ layout ]
  display: inline-block;
  vertical-align: bottom;

  // [ position ]
  width: auto;
  padding-bottom: 10px;
  border-bottom: solid 1px #213262;

  // [ skin ]
  line-height: 24px;
  color: #000000;
  font: {
    weight: bold;
    size: 24px;
  }
}
</style>

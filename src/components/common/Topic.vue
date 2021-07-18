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
.topic {
  // [ layout ]
  display: block;

  // [ position ]
  width: 100%;
  height: fit-content;
  margin: {
    top: 20px;
    bottom: 20px;
  }
  border-bottom: solid 1px #bfbfbf;
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

<template lang="pug">
button {{text}}
</template>

<script>
export default {
  name: 'ResearchGroupTag',
  props: {
    text: {
      type: String,
      required: true
    },
    researchGroupId: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
button {
  // [ layout ]
  display: flex;
  align-items: center;
  justify-content: center;

  // [ position ]
  min-height: 40px;
  min-width: 18%;
  border: 1px solid #f67057;
  border-radius: 22px;
  padding: {
    left: 16px;
    right: 16px;
  }

  // [ skin ]
  word: {
    wrap: normal;
    break: normal;
  }
  line-height: 20px;
  font-size: 16px;
  color: #f67057;
  background-color: transparent;

  // [ interaction ]
  &:hover {
    // [ skin ]
    background-color: lighten( #f67057, 10% );
    color: white;
    cursor: pointer;
  }
}
</style>

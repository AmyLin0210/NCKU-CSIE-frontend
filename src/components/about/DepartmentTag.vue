<template lang="pug">
button {{text}}
</template>

<script>
export default {
  name: 'DepartmentTag',
  props: {
    text: {
      type: String,
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
  border: 1px solid #8caae2;
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
  color: #8caae2;
  background-color: transparent;

  // [ interaction ]
  &:hover {
    // [ skin ]
    background-color: lighten( #8caae2, 10% );
    color: white;
    cursor: pointer;
  }
}
</style>

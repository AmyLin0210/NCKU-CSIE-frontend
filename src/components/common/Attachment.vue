<template lang='pug'>
a.attachment(:href="attachment.href" download)
  img.image(src="@/assets/image/icon/download.png" alt='download')
  p.text {{attachment.name}}
</template>

<script>
export default {
  name: 'attachment',
  props: {
    attachment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
.attachment {
  // [ position ]
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  // [ skin ]
  border-radius: 4px;
  padding: 20px 30px;
  background-color: #6982c0;
  box-shadow: 0 2px 2px 0 #7c79ad;
  line-height: 20px;
}

.image {
  // [ position ]
  width: auto;
  height: 20px;
  margin-right: 20px;
}

.text {
  // [ skin ]
  font-size: 18px;
  line-height: 18px;
}
</style>

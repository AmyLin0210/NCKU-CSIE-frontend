<template lang='pug'>
section.topic
  img(src="@/assets/image/icon/bookmark.png")
  h3 {{topic}}
</template>

<script>
export default {
  name: 'AnnouncementTopic',
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
  display: flex;
  align-items: center;

  // [ position ]
  height: 80px;

  > img {
    // [ position ]
    height: 42px;
    width: auto;
    margin-right: 10px;

    // [ skin ]
    filter: invert(93%) sepia(60%) saturate(4634%) hue-rotate(315deg) brightness(97%) contrast(98%);
  }

  > h3 {
    // [ position ]
    line-height: 18px;
    height: 18px;

    // [ skin ]
    font: {
      size: 18px;
      weight: bold;
    }
  }
}
</style>

<template lang='pug'>
button(
  :class="color"
  :style="`grid-area: ${tagKey}`"
) {{text}}
</template>

<script>
export default {
  name: 'AnnouncementTag',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'yellow'
    },
    tagKey: {
      type: String
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

@mixin tag-color ( $color, $bgcolor ) {
  // [ skin ]
  color: $color;
  background-color: $bgcolor;

  &.active {
    // [ skin ]
    color: #ffffff;
    background-color: $color;
  }
}

button {
  // [ layout ]
  display: flex;
  justify-content: center;
  align-items: center;

  // [ position ]
  width: 100%;
  height: 30px;
  border-radius: 15px;

  // [ skin ]
  line-height: 12px;
  font-size: 12px;

  // [ RWD: $small ]
  @media screen and ( min-width: $break-point-sm ) {
    // [ skin ]
    font-size: 14px;
    margin: {
      right: 8px;
      left: 8px;
    }
  }

  // [ interaction ]
  &:hover {
    // [ skin ]
    cursor: pointer;
  }

  &.yellow {
    // [ template ]
    @include tag-color( $color: #faad06, $bgcolor: #fff8e6 );
  }

  &.red {
    // [ template ]
    @include tag-color( $color: #f67057, $bgcolor: #ffe3df );
  }

  &.blue {
    // [ template ]
    @include tag-color( $color: #399dff, $bgcolor: #dfeffe );
  }

  &.purple {
    // [ template ]
    @include tag-color( $color: #9053ff, $bgcolor: #e8dafe );
  }

  &.green {
    // [ template ]
    @include tag-color( $color: #0dc589, $bgcolor: #c6ffec );
  }
}
</style>

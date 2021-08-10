<template lang='pug'>
svg.legend(
  :class="`${color} ${direction}`"
  :width="`${size}`"
  :height="`${size}`"
)
  circle.circle(
    :cx="`${ size * 0.3 }`",
    :cy="`${ size * 0.5 }`",
    :r="`${ size * 0.3 }`"
  )
  polygon.spike(
    :points="`${ size * 0.5 } ${ size * 0.4 }, ${ size } ${ size * 0.5 }, ${ size * 0.5 } ${ size * 0.6 }`",
    stroke-width = '2'
  )
</template>

<script>
export default {
  name: 'legend-icon',
  props: {
    color: {
      type: String,
      required: true
    },
    direction: {
      type: String
    }
  },
  data () {
    return {
      size: 45
    }
  }
}
</script>

<style scoped lang='scss'>
.legend {
  // [ layout ]
  display: inline-block;

  // [ skin ]
  width: 45px;
  height: 45px;

  // modifier
  // `> .legend > .icon.icon--blue`
  &.blue {
    // element
    // `> .legend > .icon.icon--blue > .icon__circle`
    > .circle {
      // [ skin ]
      fill: #399dff;
    }

    // element
    // `> .legend > .icon.icon--blue > .icon__spike`
    > .spike {
      // [ skin ]
      fill: #399dff;
    }
  }

  // modifier
  // `> .legend > .icon.icon--red`
  &.red {
    // element
    // `> .legend > .icon.icon--red > .icon__circle`
    > .circle {
      // [ skin ]
      fill: #ea6d55;
    }

    // element
    // `> .legend > .icon.icon--red > .icon__spike`
    > .spike {
      // [ skin ]
      fill: #ea6d55;
    }
  }

  &.left {
    // [ position ]
    position: absolute;
    top: 0;
    left: 100%;

    // [ skin ]
    transform-origin: 50% 50%;
    transform: translate( -70%, -50% ) rotate( 180deg );
  }

  &.right {
    // [ position ]
    position: absolute;
    top: 0;
    right: 100%;

    // [ skin ]
    transform-origin: 50% 50%;
    transform: translate( 70%, -50% );
  }
}
</style>

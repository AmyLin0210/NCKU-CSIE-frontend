<template lang='pug'>
figure.loading
  svg.image( :width="size" :height="size" )
    polygon.a(:points="pointsToString( points.imageA, points.bottomLeft, points.bottomRight)")
    polygon.b(:points="pointsToString( points.imageB, points.bottomLeft, points.bottomRight)")
    polygon.c(:points="pointsToString( points.imageC, points.bottomLeft, points.bottomRight)")
    polygon.d(:points="pointsToString( points.imageD, points.bottomLeft, points.bottomRight)")
  figcaption {{staticText[currentLanguage].loading}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Loading',
  data () {
    return {
      staticText: {
        'zh-TW': {
          loading: '載入中'
        },
        'en-US': {
          loading: 'Loading'
        }
      },
      size: 100,
      points: null
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId'])
  },
  methods: {
    pointsToString (p1, p2, p3) {
      return `${p1.x},${p1.y},${p2.x},${p2.y},${p3.x},${p3.y}`
    }
  },
  created () {
    try {
      const a = (x1, y1, x2, y2) => (y1 - y2) / (x1 - x2)
      const b = (x1, y1, x2, y2) => y1 - a(x1, y1, x2, y2) * x1
      const x = (x1, y1, x2, y2, y) => (y - b(x1, y1, x2, y2)) / a(x1, y1, x2, y2)
      this.points = {
        imageA: {
          x: this.size / 2,
          y: 0
        },
        imageB: {
          x: x(this.size / 2, 0, this.size, this.size * Math.sqrt(3) / 2, this.size * 0.2886),
          y: this.size * 0.2886
        },
        imageC: {
          x: x(this.size / 2, 0, 0, this.size * Math.sqrt(3) / 2, this.size * 0.3790),
          y: this.size * 0.3790
        },
        imageD: {
          x: x(this.size / 2, 0, this.size, this.size * Math.sqrt(3) / 2, this.size * 0.5224),
          y: this.size * 0.5224
        },
        bottomLeft: {
          x: 0,
          y: this.size * Math.sqrt(3) / 2
        },
        bottomRight: {
          x: this.size,
          y: this.size * Math.sqrt(3) / 2
        }
      }
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

.loading {
  // [ layout ]
  display: block;
  text-align: center;

  > .image {
    // [ layout ]
    display: block;
    margin: {
      right: auto;
      left: auto;
    }
    text-align: center;

    %image__element {
      // [ skin ]
      fill: #335098;

      // [ animation ]
      animation: {
        duration: 2.6s;
        iteration-count: infinite;
        timing-function: linear;
      }
    }

    // animation
    @keyframes a {
      0% {
        // [ skin ]
        opacity: 0;
      }

      33.33% {
        // [ skin ]
        opacity: 0;
      }

      40% {
        // [ skin ]
        opacity: .1;
      }

      46.66% {
        // [ skin ]
        opacity: .2;
      }

      60% {
        // [ skin ]
        opacity: .2;
      }

      66.66% {
        // [ skin ]
        opacity: .1;
      }

      73.33% {
        // [ skin ]
        opacity: 0;
      }

      100% {
        // [ skin ]
        opacity: 0;
      }
    }

    // animation
    @keyframes b {
      0% {
        // [ skin ]
        opacity: 0;
      }

      20% {
        // [ skin ]
        opacity: 0;
      }

      26.66% {
        // [ skin ]
        opacity: .2;
      }

      33.33% {
        // [ skin ]
        opacity: .4;
      }

      60% {
        // [ skin ]
        opacity: .4;
      }

      66.66% {
        // [ skin ]
        opacity: .2;
      }

      73.33% {
        // [ skin ]
        opacity: .1;
      }

      80% {
        // [ skin ]
        opacity: 0;
      }

      100% {
        // [ skin ]
        opacity: 0;
      }
    }

    // animation
    @keyframes c {
      0% {
        // [ skin ]
        opacity: 0;
      }

      6.66% {
        // [ skin ]
        opacity: 0;
      }

      13.33% {
        // [ skin ]
        opacity: .3;
      }

      20% {
        // [ skin ]
        opacity: .6;
      }

      60% {
        // [ skin ]
        opacity: .6;
      }

      66.66% {
        // [ skin ]
        opacity: .4;
      }

      73.33% {
        // [ skin ]
        opacity: .2;
      }

      80% {
        // [ skin ]
        opacity: .1;
      }

      86.66% {
        // [ skin ]
        opacity: 0;
      }

      100% {
        // [ skin ]
        opacity: 0;
      }
    }

    // animation
    @keyframes d {
      0% {
        // [ skin ]
        opacity: .4;
      }

      6.66% {
        // [ skin ]
        opacity: .8;
      }

      60% {
        // [ skin ]
        opacity: .8;
      }

      66.66% {
        // [ skin ]
        opacity: .6;
      }

      73.33% {
        // [ skin ]
        opacity: .4;
      }

      80% {
        // [ skin ]
        opacity: .2;
      }

      86.66% {
        // [ skin ]
        opacity: .1;
      }

      93.33% {
        // [ skin ]
        opacity: 0;
      }

      100% {
        // [ skin ]
        opacity: 0;
      }
    }

    > .a {
      // [ template ]
      @extend %image__element;

      // [ animation ]
      animation-name: a;
    }

    > .b {
      // [ template ]
      @extend %image__element;

      // [ animation ]
      animation-name: b;
    }

    > .c {
      // [ template ]
      @extend %image__element;

      // [ animation ]
      animation-name: c;
    }

    > .d {
      // [ template ]
      @extend %image__element;

      // [ animation ]
      animation-name: d;
    }
  }

  > figcaption {
    // [ layout ]
    display: block;
    line-height: 16px;

    // [ skin ]
    width: auto;
    height: 16px;
    color: #adacad;
    font-size: 16px;
    text-shadow: 0 1px 1px #bfbfbf;
  }
}
</style>

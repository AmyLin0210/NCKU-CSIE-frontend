<template lang="pug">
section.entries
  template(
    v-for="(entry, idx) in entries"
    :key="`entry-${idx}`"
  )
    a.entry(
      :class="`entry-${color[idx%6]}`"
      :href="entry.href"
      :target="(entry.href[0] === '/')? '': '_blank'"
    )
      h3.title {{ entry.title }}
      p.detail {{ entry.detail }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'entries',
  props: [
    'entries'
  ],
  data () {
    return {
      color: [
        'red',
        'green',
        'yellow',
        'blue',
        'gray',
        'purple'
      ]
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguageId'])
  }
}
</script>

<style scoped lang="scss">
.entries {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  // [ position ]
  margin: {
    top: 25px;
    bottom: 25px;
  }
}

.entry {
  // [ layout ]
  display: block;

  // [ position ]
  border: {
    top: {
      width: 6px;
      color: #e6e6e6;
    }
    bottom: {
      width: 1px;
      color: #e6e6e6;
    }
    left: {
      width: 1px;
      color: #e6e6e6;
    }
    right: {
      width: 1px;
      color: #e6e6e6;
    }
    style: solid;
    radius: 6px;
  }
  margin: {
    left: 12px;
    right: 12px;
    bottom: 26px;
  }
  min-height: 190px;
  width: 400px;

  // [ skin ]
  text-align: center;

  // [ modifier ]
  &-red {
    // [ skin ]
    border-top-color: #f94970;
  }

  &-green {
    // [ skin ]
    border-top-color: #0dc589;
  }

  &-yellow {
    // [ skin ]
    border-top-color: #faad06;
  }

  &-blue {
    // [ skin ]
    border-top-color: #399dff;
  }

  &-purple {
    // [ skin ]
    border-top-color: #9053ff;
  }

  &-gray {
    // [ skin ]
    border-top-color: #999999;
  }
}

.title {
  // [ layout ]
  display: block;
  text-align: center;
  margin-top: 60px;
  line-height: 26px;
  white-space: normal;
  word: {
    break: normal;
    wrap: normal;
  };

  // [ skin ]
  color: black;
  background-color: transparent;
  font: {
    size: 26px;
    weight: bold;
  }
}

.detail {
  // [ layout ]
  display: block;
  text-align: center;
  margin: {
    top: 20px;
    left: 70px;
    right: 70px;
    bottom: 40px;
  }
  line-height: 20px;
  white-space: normal;
  word: {
    break: normal;
    wrap: normal;
  };

  // [ skin ]
  color: #757575;
  background-color: transparent;
  font-size: 16px;
}
</style>

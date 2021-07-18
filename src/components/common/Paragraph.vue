<template lang="pug">
section.block
  template(v-for="(obj, idx) in content" :key="`paragraph-${idx}`")
    h2.title(v-if="obj.type === 'title'") {{obj[currentLanguage]}}
    h3.subtitle(v-if="obj.type === 'subtitle'") {{obj[currentLanguage]}}
    a.button(v-if="obj.type === 'button'" :href="obj.href" target='_blank') {{obj[currentLanguage]}}
    p.text(v-if="obj.type === 'text'") {{obj[currentLanguage]}}
    ul.list-block(v-if="obj.type === 'list'")
      li.list(v-for="(text, idx) in obj[currentLanguage]" :key="`list-${idx}`") {{text}}
    article.description-block(v-if="obj.type === 'description'")
      p.description(v-for="(text, idx) in obj[currentLanguage]" :key="`description-${idx}`") {{text}}
    a.link(v-if="obj.type === 'link'" :href="obj.href") {{obj[currentLanguage]}}
    img.image(v-if="obj.type === 'image'" :src="require(`@/assets/image/${obj.src}`)")

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'paragraph',
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage'])
  }
}
</script>

<style scoped lang='scss'>
$small-margin: 20px;
$median-margin: 30px;
$large-margin: 40px;

.title {
  // [ layout ]
  display: block;

  // [ position ]
  width: 100%;
  height: fit-content;
  margin: {
    top: $large-margin;
    bottom: $large-margin;
  }

  // [ skin ]
  line-height: 24px;
  color: #32477d;
  font: {
    weight: bold;
    size: 24px;
  }
}

.subtitle {
  // [ layout ]
  display: block;

  // [ position ]
  width: 100%;
  height: fit-content;
  margin: {
    top: $large-margin;
    bottom: $large-margin;
  }

  // [ skin ]
  line-height: 24px;
  color: #399dff;
  font: {
    weight: 500;
    size: 24px;
  }
}

.text {
  // [ layout ]
  display: block;

  // [ position ]
  width: 100%;
  height: fit-content;
  margin: {
    top: $median-margin;
    bottom: $median-margin;
  }

  // [ skin ]
  line-height: 28px;
  color: #757575;
  font-size: 20px;
}

.button {
  // [ layout ]
  display: block;

  // [ position ]
  width: fit-content;
  padding: {
    top: 10px;
    bottom: 10px;
    left: 25px;
    right: 25px;
  }
  margin: {
    top: $large-margin;
    bottom: $large-margin;
  }
  border: 2px solid #399dff;
  border-radius: 16px;

  // [ skin ]
  line-height: 20px;
  color: #399dff;
  font: {
    weight: bold;
    size: 20px;
  }
}

.list-block {
  // [ layout ]
  display: block;

  // [ postiion ]
  height: fit-content;
  width: 100%;
  margin: {
    top: $median-margin;
    bottom: $median-margin;
  }

  > .list {
    // [ layout ]
    display: flex;
    align-items: center;
    position: relative;

    // [ position ]
    margin: {
      top: $small-margin;
      bottom: $small-margin;
      left: 40px;
    }

    // [ skin ]
    line-height: 28px;
    color: #757575;
    font-size: 20px;

    &::before {
      // [ layout ]
      display: inline-block;

      // [ position ]
      position: absolute;
      left: -40px;
      width: 14px;
      height: 14px;

      // [ skin ]
      border: {
        color: #faad06;
        style: solid;
        width: 7px;
        radius: 50%;
      }
      content: '';
    }
  }
}

.description-block {
  // [ layout ]
  display: block;

  // [ postiion ]
  height: fit-content;
  width: 100%;
  margin: {
    top: $median-margin;
    bottom: $median-margin;
  }

  > .description {
    // [ layout ]
    display: flex;
    align-items: center;
    position: relative;

    // [ position ]
    margin: {
      top: $small-margin;
      bottom: $small-margin;
      left: 40px;
    }

    // [ skin ]
    line-height: 28px;
    color: #757575;
    font-size: 20px;
  }
}

.link {
  // [ layout ]
  display: block;

  // [ position ]
  width: auto;
  margin: {
    top: $median-margin;
    bottom: $median-margin;
  }

  color: #399dff;
  line-height: 20px;
  font-size: 20px;

  // [ interaction ]
  &:hover {
    // [ skin ]
    text-decoration: underline;
  }
}

.image {
  // [ layout ]
  display: block;

  // [ position ]
  width: auto;
  height: 500px;
  margin: {
    top: $median-margin;
    bottom: $median-margin;
    left: auto;
    right: auto;
  }
}
</style>

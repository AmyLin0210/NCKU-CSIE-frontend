<template lang="pug">
section.block
  template(v-for="(obj, idx) in content" :key="`paragraph-${idx}`")
    // Heading1
    // @param {Object} content
    // @param {string} content.type - The type of this content ('heading1')
    // @param {string} content[currentLanguage] - The text of this content
    h2(v-if="obj.type === 'heading1'") {{obj[currentLanguage]}}

    // Heading2
    // @param {Object} content
    // @param {string} content.type - The type of this content ('heading2')
    // @param {string} content[currentLanguage] - The text of this content
    h3(v-if="obj.type === 'heading2'") {{obj[currentLanguage]}}

    // Button
    // @param {Object} content
    // @param {string} content.type - The type of this content ('button')
    // @param {string} content[currentLanguage] - The text of this content
    a.button(v-if="obj.type === 'button'" :href="obj.href" target='_blank') {{obj[currentLanguage]}}

    // Text
    // @param {Object} content
    // @param {string} content.type - The type of this content ('text')
    // @param {string} content[currentLanguage] - The text of this content
    p.text(v-if="obj.type === 'text'") {{obj[currentLanguage]}}

    // List
    // @param {Object} content
    // @param {string} content.type - The type of this content ('list')
    // @param {string[]} content[currentLanguage] - A array of list items
    ul.list-block(v-if="obj.type === 'list'")
      li.list(v-for="(text, idx) in obj[currentLanguage]" :key="`list-${idx}`") {{text}}

    // Description
    // @param {Object} content
    // @param {string} content.type - The type of this content ('button')
    // @param {string[]} content[currentLanguage] - A array of list items
    article.description-block(v-if="obj.type === 'description'")
      p.description(v-for="(text, idx) in obj[currentLanguage]" :key="`description-${idx}`") {{text}}

    // Link
    // @param {Object} content
    // @param {string} content.type - The type of this content ('link')
    // @param {string} content.href - The url of the content
    // @param {string} content[currentLanguage] - The text of this content
    a.link(v-if="obj.type === 'link'" :href="obj.href") {{obj[currentLanguage]}}

    // Image
    // @param {Object} content
    // @param {string} content.type - The type of this content ('image')
    // @param {string} content.src - The source from @/assets/image/
    // @param {string} content[currentLanguage] - The text of this content
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
@import "@/assets/scss/break-point.scss";
$small-margin: 15px;
$median-margin: 30px;
$large-margin: 40px;

h2 {
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

h3 {
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
  line-height: 36px;
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
      left: -30px;
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
    line-height: 36px;
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
  width: 90%;
  max-width: 660px;
  height: auto;
  margin: {
    top: $median-margin;
    bottom: $median-margin;
    left: auto;
    right: auto;
  }

  // [ RWD: 1280px ]
  @media screen and (min-width: $break-point-lg){
    // [ position ]
    width: 80%;
    max-width: 1080px;
  }
}
</style>

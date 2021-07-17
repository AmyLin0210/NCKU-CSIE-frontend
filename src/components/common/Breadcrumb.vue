<template lang="pug">
nav.breadcrumb
  template(
    v-for="(obj, idx) in breadcrumbList"
    :key="`breadcrumb-${idx}`"
  )
    a.link(
      v-if="idx !== breadcrumbList.length - 1"
      :href="obj.route"
    ) {{obj.text}}
    p.text(v-if="idx === breadcrumbList.length - 1") {{obj.text}}
    p.arrow(v-if="idx !== breadcrumbList.length - 1")= '>'
</template>

<script>
export default {
  name: 'breadcrumb',
  props: {
    breadcrumbList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
.breadcrumb {
  // [ dispaly ]
  display: flex;
  align-items: center;

  // [ position ]
  height: 100px;
  width: 90%;
  margin: {
    left: auto;
    right: auto;
  }

  // [ skin ]
  background-color: transparent;
}

.link {
  // [ layout ]
  display: inline-block;

  // [ position ]
  width: fit-content;

  // [ skin ]
  color: #213262;
  background-color: transparent;
  font-size: 20px;
  text-decoration: underline;
}

.arrow {
  // [ layout ]
  display: inline-block;

  // [ skin ]
  width: fit-content;
  margin: {
    left: 40px;
    right: 40px;
  }
  vertical-align: middle;

  // [ skin ]
  font-size: 40px;
  background-color: transparent;
}

.text {
  // [ layout ]
  display: inline-block;

  // [ position ]
  width: fit-content;

  // [ skin ]
  color: #757575;
  background-color: transparent;
  font-size: 20px;
}
</style>

<template>
  <div @click="onClick()">Hello {{firstName}} {{lastName}}!</div>
</template>

<script>
// https://medium.com/dailyjs/how-to-migrate-from-angularjs-to-vue-4a1e9721bea8
// https://github.com/ngVue/ngVue/blob/master/example/plugins-filters/index.html
export default {
  props: {
    firstName: String,
    lastName: String,
  },
  methods: {
    onClick() {
      console.log('clicked');
      this.$emit('just a test');
    },
  },
};
</script>

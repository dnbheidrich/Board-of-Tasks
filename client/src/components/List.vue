<template>
  <div class="list">
    <h5>hi</h5>
  </div>
</template>


<script>
export default {
  name: "list",
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.lists;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
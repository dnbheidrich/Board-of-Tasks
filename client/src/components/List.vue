<template>
  <div class="list">
    <h5>{{list.title}}</h5>
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
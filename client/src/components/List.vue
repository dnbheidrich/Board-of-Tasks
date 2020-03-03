<template>
  <div class="list">
    <h5>hi</h5>
    <h4>{{listData.title}}</h4>
  </div>
</template>


<script>
export default {
  name: "list",
  props: ["listData"],
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
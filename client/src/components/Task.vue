<template>
  <div class="task">hi</div>
</template>


<script>
export default {
  name: "task",
  props: ["taskData"],

  data() {
    return {};
  },
  computed: {
    task() {
      return this.$store.state.tasks;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
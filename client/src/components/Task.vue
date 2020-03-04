<template>
  <div class="task">{{taskData.title}}</div>
</template>


<script>
export default {
  name: "Task",
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
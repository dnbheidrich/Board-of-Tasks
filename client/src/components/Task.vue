<template>
  <div class="task">
    <span>{{taskData.title}}</span>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisTask()"
      alt
    />
  </div>
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
  methods: {
    deleteThisTask() {
      let id = this.taskData.id;
      let listId = this.taskData.listId;
      this.$store.dispatch("deleteTaskById", { id, listId });
    }
  },
  components: {}
};
</script>


<style scoped>
.delete-icon {
  width: 10%;
  height: auto;
}
</style>
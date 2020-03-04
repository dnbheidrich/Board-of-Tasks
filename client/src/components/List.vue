<template>
  <div class="list container-fluid">
    <div class="row text-center">
      <div class="col-6">
        <div class="card text-left">
          <div class="card-body bg-dark text-white text-center">
            <h4 class="card-title">{{listData.title}}</h4>
            <form @submit.prevent="addTask">
              <img
                src="https://image.flaticon.com/icons/png/512/61/61848.png"
                class="delete-icon"
                @click="deleteThisList()"
                alt
              />
              <input type="text" placeholder="title" v-model="newTask.title" required />
              <!-- v-model="newTask.title" -->
              <button type="submit">Create Task</button>
            </form>
            <!-- <p class="card-text">{{listData.boardId}}</p> -->
            <task v-for="(task, index) in tasks" :key="task._id" :taskData="task" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Task from "../components/Task";
export default {
  name: "list",
  props: ["listData"],
  mounted() {
    this.$store.dispatch(
      "getTasksbyBoardListId",
      this.$route.params.boardId,
      this.lists[index].id
    );
  },
  data() {
    return {
      newTask: {
        title: "",
        boardId: this.listData.boardId,
        listId: this.listData.id
      }
    };
  },
  computed: {
    list() {
      return this.$store.state.lists;
    },
    task() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTask);
    },
    deleteThisList() {
      let id = this.listData.id;
      let boardId = this.listData.boardId;
      this.$store.dispatch("deleteListById", { id, boardId });
    },
    components: {
      Task
    }
  }
};
</script>


<style scoped>
.delete-icon {
  width: 20%;
  height: auto;
}
</style>
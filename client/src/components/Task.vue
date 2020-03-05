<template>
  <div class="task bg-info">
    <span>{{taskData.title}}</span>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisTask()"
      alt
    />
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Lists</button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          v-for="(list, index) in lists"
           v-if="(list.id!=taskData.listId)"
          :key="list._id"
          @click="moveTask(index)"
        >
          <!-- <list class="dropdown-menu" v-for="(list, index) in lists" :key="list._id" /> -->
          <p>{{list.title}}</p>
        </a>
      </div>
    </div>

    <form @submit.prevent="addComment">
      <input type="text" placeholder="title" v-model="newComment.title" required />
      <button type="submit">Comment</button>
    </form>

    <comment v-for="(comment) in comments" :key="comment._id" :commentData="comment" />
  </div>
</template>


<script>
import Comment from "../components/Comment";
import List from "../components/List";
export default {
  name: "task",
  props: ["taskData"],
  mounted() {
    this.$store.dispatch("getCommentsbyTaskId", this.taskData.id);
  },
  data() {
    return {
      newComment: {
        title: "",
        taskId: this.taskData.id
      }
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    lists() {
      return this.$store.state.lists;
    },
    comments() {
      return this.$store.state.comments[this.taskData.id];
    }
  },
  methods: {
    deleteThisTask() {
      let id = this.taskData.id;
      let listId = this.taskData.listId;
      this.$store.dispatch("deleteTaskById", { id, listId });
    },
    moveTask(index) {
      let id = this.taskData.id;
      let listId = this.lists[index].id;
      let oldListId = this.taskData.listId;
      this.$store.dispatch("moveTaskToList", { id, listId, oldListId });
    },
    addComment() {
      this.$store.dispatch("addComment", this.newComment);
    }
  },
  components: {
    List,
    Comment
  }
};
</script>


<style scoped>
.delete-icon {
  width: 5%;
  height: auto;
}
</style>


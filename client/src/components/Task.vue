<template>
  <div class="task">
    <span>{{taskData.title}}</span>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisTask()"
      alt
    />
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Lists
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">
<list class="dropdown-menu"  v-for="(list, index) in lists" :key="list._id" />
<p>{{listData[0].title}}</p>
<p>{{listData[1].title}}</p>
<p>{{listData[2].title}}</p>



    </a>
   
  </div>
</div>
<comment v-for="(comment) in comments" :key="comment._id" :commentData="comment" :taskData="tasksS" />

</div>
</template>


<script>
import Comment from "../components/Comment"
import List from "../components/List"
export default {
  name: "task",
  props: ["taskData","listData"],

  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
      lists() {
      return this.$store.state.lists;
    },
    comments(){
      return this.$store.state.comments;

    }
  },
  methods: {
    deleteThisTask() {
      let id = this.taskData.id;
      let listId = this.taskData.listId;
      this.$store.dispatch("deleteTaskById", { id, listId });
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
  width: 10%;
  height: auto;
}
</style>


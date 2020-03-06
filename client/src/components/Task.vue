<template>
  <div class="task row">
    <div class="col-11 offset-1 text-left text-light p-2">

 <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          v-for="(list, index) in lists"
           v-if="(list.id!=taskData.listId)"
          :key="list._id"
          @click="moveTask(index)"
        >
          <p>{{list.title}}</p>
        </a>
      </div>
    </div>

      <img
          src="../assets/pop.png"
          class="delete-icon"
          @click="deleteThisTask()"
          alt
        />
      <span><b>{{taskData.title}}</b></span>
    </div>



  <div class="col-10 offset-1 text-right">
    <div class="">
       <form  class="row"@submit.prevent="addComment">
        <input class="col-10"type="text" placeholder="comment" v-model="newComment.title" required />
       <button class="col-2 btn btn-secondary" type="submit"><b>+</b></button>
      </form>
    </div>
  </div>

  <div class="">
    <div class="col-8 offset-2 text-right">
      <comment v-for="(comment) in comments" :key="comment._id" :commentData="comment" />
    </div>
  </div>


    <!-- <span>{{taskData.title}}</span>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisTask()"
      alt
    /> -->





    <!-- <div class="btn-group">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          v-for="(list, index) in lists"
           v-if="(list.id!=taskData.listId)"
          :key="list._id"
          @click="moveTask(index)"
        >
          <p>{{list.title}}</p>
        </a>
      </div>
    </div> -->




    <!-- <form @submit.prevent="addComment">
      <input type="text" placeholder="title" v-model="newComment.title" required />
      <button type="submit">Comment</button>
    </form> -->

    <!-- <comment v-for="(comment) in comments" :key="comment._id" :commentData="comment" /> -->








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


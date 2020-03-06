<template>
  <div class="list row text-center">
    <div class="col-12 text-right bg-op">
      <img
                src="../assets/pop.png"
                class="delete-icon img-fluid"
                @click="deleteThisList()"
                alt
              />
      <div class="row">
        <div class="col-4 text-info p-3 text-left">
          <h4 class="">{{listData.title}}</h4>
         
            <form  class="row" @submit.prevent="addTask">
              <input class="col-9 offset-1" type="text" placeholder="add task" v-model="newTask.title" required />
              <button class="col-2 btn btn-secondary" type="submit"><b>+</b></button>
            </form>

        </div>


 <div class="col-8">
           <task v-for="(task) in tasks" :key="task._id" :taskData="task" />
        </div>

         <div class="col-12">
          <br>
         </div>

      </div>
    </div>

    
    
      <!-- <div class="col-10">


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
              <button type="submit">Create Task</button>
            </form>
            <task v-for="(task) in tasks" :key="task._id" :taskData="task" />
          </div>
        </div>
      </div>
   -->


<div class="col-12 no-bg">
  <br>
</div>

  </div>
</template>


<script>
import Task from "../components/Task";
export default {
  name: "list",
  props: ["listData"],
  mounted() {
    this.$store.dispatch("getTasksbyListId", this.listData.id);
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
    tasks() {
      return this.$store.state.tasks[this.listData.id];
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
    }
  },

  components: {
    Task
  }
};
</script>


<style scoped>
.delete-icon {
  width: 10%;
  height: auto;
}

.bg-op{
  background-color: rgba(0,0,0,.7)
}

</style>
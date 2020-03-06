<template>
  <div class="board my-bg container-fluid">


    <div class="row">
      <div class="col-12 text-right ">
         <img
      src="../assets/pop.png"
      class="delete-icon img-fluid"
      @click="deleteThisBoard()"
      alt
    />
      </div>
    </div>


    <div class="row">
      <div class="col-12 p-4 text-light">
<h1 v-if="board.title">
      <b>{{board.title}}</b>
      : {{board.description}}
    </h1>
    <h1 v-else>Loading...Why?!</h1>
    <p>{{board.creatorEmail}}</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12">
 <form class="row justify-content-center" @submit.prevent="addList">
      <input class="col-8" type="text" placeholder="title" v-model="newList.title" required />
      <button class="col-2 btn btn-secondary" type="submit"><b>+</b> List</button>
    </form>
      </div>
      <div class="col-12"><br></div>
    </div>


   
    <div id="list-section" class="row">
      <div class="col-12">
        
<list v-for="(list, index) in lists" :key="list._id" :listData="list" />
    
      </div>
      
    
    </div>







  </div>
</template>



<script>
import List from "../components/List";
export default {
  name: "board",
  props: [""],
  mounted() {
    this.$store.dispatch("getBoardById", this.$route.params.boardId);
    this.$store.dispatch("getListsByBoardId", this.$route.params.boardId);
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId
      }
    };
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  methods: {
    deleteThisBoard() {
      let id = this.$route.params.boardId;
      this.$store.dispatch("deleteThisBoard2", id);
    },
    addList() {
      this.$store.dispatch("addList", this.newList);
      // this.newList = { title: "", boardId: this.$route.params.boardId };
    }
  },
  components: {
    List
  }
};
</script>


<style scoped>
.delete-icon {
  width: 50px;
  height: auto;
}

.bg-op{
  background-color: rgba(0,0,0,.7)
}
.my-bg{
  /* NOTE THIS MAY REQUIRE MOVING TO THE OTHER DIRECTORY */
  background-image: url("../assets/space4.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  
}
</style>

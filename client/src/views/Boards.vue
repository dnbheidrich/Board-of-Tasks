<template>
  <div class="boards my-bg container-fluid">
    <h1 class="text-light">Manage Infinite</h1>
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div  v-for="(board, index) in boards" :key="board._id">
      <router-link :to="{name: 'board', params: {boardId: board._id}}">
        <div class=" my-bg2 card">
          <img class="card-img-top" src="holder.js/100px180/" alt="">
          <div class="card-body">
            <h4 class="text-danger card-title">
        {{board.title}}
            </h4>
            <span class="card-text">{{board.creatorEmail}}
               <img
        src="https://image.flaticon.com/icons/png/512/61/61848.png"
        class="delete-icon"
        @click="deleteBoard(index)"
        alt
      />
            </span>
          </div>
        </div>
        <hr>

      </router-link>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  props: ["boardData"],
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    deleteBoard(index) {
      let id = this.boards[index].id;
      this.$store.dispatch("deleteBoardById", id);
    }
  }
};
</script>

<style scoped>
.delete-icon {
  width: 1.7%;
  height: auto;
}
.my-bg{
  /* NOTE THIS MAY REQUIRE MOVING TO THE OTHER DIRECTORY */
  background-image: url("../assets/space.jpg");
  background-position: center;
  height: 100%;
  min-height: 100vh;
  width: 100%
  
}
.my-space{
  width: 50%;
  min-width: 50%;
}
.my-bg2{
  /* NOTE THIS MAY REQUIRE MOVING TO THE OTHER DIRECTORY */
 background-image: url("../assets/dSpace2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: cover;
  /* min-height: 50vh; */
  /* height: 50%; */
  width: 50%;
  
}
</style>
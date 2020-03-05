<template>
  <div class="boards my-bg container-fluid">
    <div class="row">
    <h1 class="text-light col-12">WELCOME TO THE BOARDS!!!</h1>
    </div>
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div v-for="(board, index) in boards" :key="board._id">
      <router-link :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link>
      <img
        src="https://image.flaticon.com/icons/png/512/61/61848.png"
        class="delete-icon"
        @click="deleteBoard(index)"
        alt
      />
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
  background-image: url("../assets/space3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  
}
</style>
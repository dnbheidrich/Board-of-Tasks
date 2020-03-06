<template>
  <div class="boards my-bg container-fluid">

    <div class="row">
      <h1 class="text-light col-12 p-5">WELCOME TO THE BOARDS!!!</h1>
    </div>


    <div class="row">
    <div class="col-12">
    <div class="m-4">
    <form class="row justify-content-center" @submit.prevent="addBoard">
      <input class="col-5" type="text" placeholder="title" v-model="newBoard.title" required />
      <input class="col-5" type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit" class="btn btn-secondary col-1"><b>+</b></button>
    </form>
    </div>
    </div>
    </div>

    <div v-for="(board, index) in boards" :key="board._id">
      <div class="row">
        <div class="col-10 offset-1">


          <div class="bg-op row justify-content-around">
                <h2><router-link class="text-info col-6 align-middle" :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link></h2>
                 <span class="col-2"></span>
                  <img
                  src="../assets/pop.png"
                  class="delete-icon col-2 img-fluid"
                  @click="deleteBoard(index)"
                  alt
                />

            </div>


        </div>
        <div class="col-12">
          <br>
        </div>
      </div>
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

.bg-op{
  background-color: rgba(0,0,0,.7)
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
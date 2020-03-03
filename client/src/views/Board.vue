<template>
  <div class="board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h1 v-else>Loading...Why?!</h1>
    <p>{{board.creatorEmail}}</p>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisBoard()"
      alt
    />
  </div>
</template>

<script>
import Board from "../components/board";
export default {
  name: "board",
  props: ["boardId"],
  mounted() {
    this.$store.dispatch("getBoardById", this.$route.params.boardId);
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  methods: {
    deleteThisBoard() {
      let id = this.$route.params.boardId;
      this.$store.dispatch("deleteThisBoard2", id);
    }
  }
};
</script>


<style scoped>
.delete-icon {
  width: 1.7%;
  height: auto;
}
</style>

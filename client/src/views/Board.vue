<template>
  <div class="board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h1 v-else>Loading...Why?!</h1>
  </div>
</template>

<script>
import Board from "../components/board";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getBoardById", this.$route.params.boardId);
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"]
};
</script>

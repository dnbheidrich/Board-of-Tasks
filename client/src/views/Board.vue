<template>
  <div class="board">

    <h1 v-if="board.title">
      <b>{{board.title}}</b>
      : {{board.description}}
    </h1>
    <h1 v-else>Loading...Why?!</h1>
    <p>{{board.creatorEmail}}</p>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisBoard()"
      alt
    />
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required />
      <button type="submit">Create List</button>
    </form>
    <div id="list-section">
      <list v-for="(list, index) in lists" :key="list._id" :listData="list" />
    </div>


  </div>
</template>



<script>
import List from "../components/List";
export default {
  name: "board",
  props: ["listData"],
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
  width: 1.7%;
  height: auto;
}
</style>

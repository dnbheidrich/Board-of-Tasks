<template>
  <div class="comment">
    <span>{{commentData.title}}</span>
    <img
      src="https://image.flaticon.com/icons/png/512/61/61848.png"
      class="delete-icon"
      @click="deleteThisComment()"
      alt
    />
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentData"],

  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteThisComment() {
      let id = this.commentData.id;
      let taskId = this.commentData.taskId;
      this.$store.dispatch("deleteCommentById", { id, taskId });
    }
  },
  components: {
    tasks() {
      return this.$store.state.tasks;
    },
    comments() {
      return this.$store.state.comments;
    }
  }
};
</script>


<style scoped>
.delete-icon {
  width: 2%;
  height: auto;
}


</style>
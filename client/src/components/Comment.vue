<template>
  <div class="comment text-left row justify-content-between">
    
    
    <div class="col-8 text-secondary">
      {{commentData.title}}
    </div>


    <!-- <span>{{commentData.title}}</span> -->

    <div class="col-2">
      <img
        src="../assets/pop.png"
        class="delete-icon"
        @click="deleteThisComment()"
        alt
      />
    </div>
    
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
  width: 20px;
  height: auto;
}
</style>
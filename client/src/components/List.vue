<template>
  <div class="list container-fluid">
    <div class="row text-center">
<div class="col-3">

    <div class="card text-left">
      <div class="card-body bg-dark text-white text-center">
        <h4 class="card-title">
                 {{listData.title}}
        </h4>
        <p class="card-text">{{listData.boardId}}</p>
      </div>
    </div>
  </div>
</div>

</div>
</template>


<script>
export default {
  name: "list",
  props: ["listData"],
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.lists;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
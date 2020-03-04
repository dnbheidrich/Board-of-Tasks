<template>
  <div class="task">
    <h1>{{taskData.title}}</h1>
      <img
                src="https://image.flaticon.com/icons/png/512/61/61848.png"
                class="delete-icon"
                @click="deleteThisList()"
                alt
              />

  </div>
</template>


<script>
export default {
  name: "task",
  props: ["taskData"],

  data() {
    return {};
  },
  computed: {
    task() {
      return this.$store.state.tasks;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.delete-icon {
  width: 20%;
  height: auto;
}
</style>
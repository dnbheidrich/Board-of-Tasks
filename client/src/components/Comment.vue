<template>
  <div class="comment">
    <p>hello world</p>


  </div>
</template>


<script>
export default {
  name: 'comment',
  props: ["commentData"],

  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{
    tasks() {
      return this.$store.state.tasks;
    },
    comments(){
      return this.$store.state.comments;

    }
  }
}
</script>


<style scoped>

</style>
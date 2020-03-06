<template>
  <div class="home containerfluid my-bg">
    <div class="row justify-content-center">
      <div class="col2">
          <h1 class="text-primary">Welcome to Manage Infinite</h1>
          <p class="text-primary">Log-in to acess starboard </p>
    <!-- <img src="https://www.blog.thesietch.org/wp-content/uploads/2008/03/babies.jpg" alt /> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.my-bg{
  /* NOTE THIS MAY REQUIRE MOVING TO THE OTHER DIRECTORY */
 background-image: url("../assets/dSpace5.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  width: 100;
}
</style>
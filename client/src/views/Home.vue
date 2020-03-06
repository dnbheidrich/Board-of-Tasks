<template>
  <div v-if="$auth.isAuthenticated" class="home containerfluid my-bg" >
    <div class="row justify-content-center">
      <div class="col-12">
          <h1 class="text-primary">Welcome to Manage Infinite</h1>
          <h3 class="text-primary"
          v-if="!$auth.isAuthenticated"
          >Log-in to acess starboard </h3>
          <h3 class="text-primary" v-else>Welcome manage your starboard!</h3>
    <!-- <img class=".noAuthImg" v-if="!$auth.isAuthenticated" src="https://s3.amazonaws.com/cms.ipressroom.com/295/files/20185/5b1f7a1b9dee811c49d518ab_Omega562Stars_lo/Omega562Stars_lo_d44bc804-72b3-4b7a-b7ca-94d9a4780bfd-prv.jpg" alt />
    <img class="authImg"  v-else src="https://lh3.googleusercontent.com/proxy/oZfy1X_1LKOHE5vPftZIA0sSJRApM1p4tV72jnOW20CZlNndazhY7px2tLksDVPBslgGymwHH93FoSyM5hRdnTbjLWcbAuFMDWxNph2SsUMwo0-MLQLjnYF5xkn_XJVHgQZ_rrUboYCuhugVEq5aLeO8-Ep6nH-mpl16OXUnS1EL4mnVygkUktnv" alt /> -->
      </div>
    </div>
  </div>
   <div v-else class="home containerfluid my-bg2" >
    <div class="row justify-content-center">
      <div class="col-12">
          <h1 class="text-primary">Welcome to Manage Infinite</h1>
          <h3 class="text-primary"
          v-if="!$auth.isAuthenticated"
          >Log-in to acess starboard </h3>
          <h3 class="text-primary" v-else>Welcome manage your starboard!</h3>
    <!-- <img class=".noAuthImg" v-if="!$auth.isAuthenticated" src="https://s3.amazonaws.com/cms.ipressroom.com/295/files/20185/5b1f7a1b9dee811c49d518ab_Omega562Stars_lo/Omega562Stars_lo_d44bc804-72b3-4b7a-b7ca-94d9a4780bfd-prv.jpg" alt />
    <img class="authImg"  v-else src="https://lh3.googleusercontent.com/proxy/oZfy1X_1LKOHE5vPftZIA0sSJRApM1p4tV72jnOW20CZlNndazhY7px2tLksDVPBslgGymwHH93FoSyM5hRdnTbjLWcbAuFMDWxNph2SsUMwo0-MLQLjnYF5xkn_XJVHgQZ_rrUboYCuhugVEq5aLeO8-Ep6nH-mpl16OXUnS1EL4mnVygkUktnv" alt /> -->
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
.my-bg2{
  /* NOTE THIS MAY REQUIRE MOVING TO THE OTHER DIRECTORY */
 background-image: url("../assets/dSpace0.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  width: 100;
}
.authImg{
   height: 75%;
  width: 100;
  position: center;
}
.noAuthImg{
   height: 25%;
  width: 50;
  position: center;

}
</style>

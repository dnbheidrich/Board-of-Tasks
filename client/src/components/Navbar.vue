<template>
  <nav class="navbar navbar-expand-lg  black text-white" >
    <router-link class="navbar-brand text-white" :to="{ name: 'home' }">Infinite</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="bg-light navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item text-white" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link text-white">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'boards' }"
        >
          <router-link class="nav-link text-white" :to="{ name: 'boards' }">My-Starboard</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout();
      this.$store.dispatch("resetBearer");
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
.black {
  background-color: black;
}
</style>

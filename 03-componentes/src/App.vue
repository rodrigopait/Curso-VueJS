<template>
  <div class="container">
    <app-header />
    <ejemplo-post />
    <app-footer />
  </div>
</template>

<script>
import EjemploPost from "./components/Post";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    EjemploPost,
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min";
</style>

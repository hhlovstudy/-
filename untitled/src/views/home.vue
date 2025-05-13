<script setup lang="ts">

import Header from "../components/header.vue";
import SideBar from "../components/sideBar.vue";
</script>

<template>
  <div class="no-scroll">
  <Header></Header>
  <SideBar></SideBar>
  </div>
</template>

<style scoped>
body{
  overflow: hidden;
}
</style>

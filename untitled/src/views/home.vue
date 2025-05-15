<script setup lang="ts">

import Header from "../components/header.vue";
import SideBar from "../components/sideBar.vue";
</script>

<template>
  <div class="no-scroll">
  <Header></Header>
    <div class="content">
  <SideBar></SideBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
body{
  overflow: hidden;
}
.content{
  display: flex;
}
</style>

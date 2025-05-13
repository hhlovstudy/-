<script setup lang="ts">

</script>

<template>
<div class="lab">
<img src="../assets/image1.png" class="logo" alt="梦悠悠科技">
  <div class="self">
  <div class="name">name</div>
  <img src="../assets/image2.png" class="headImg" alt="头像">
    <img src="../assets/设置-19.png" class="set" alt="set">
  </div>
</div>
</template>

<style scoped>
.lab{
  height: 10vh;
  display: flex;

  justify-content: space-between;
  line-height: 10vh;
}
.logo{
  width: 10vh;
  height: 10vh;

}
.set{
  height: 8vh;
  width: 8vh;
margin-left: 2vh;
  margin-right: 1vh;
  margin-top: 1vh;
}
.headImg{
height:8vh ;
  width: 8vh;
  border-radius: 50%;
  margin-left: 2vh;
  margin-top: 1vh;

}
.self{
  display: flex;
}
.name{
  font-size: 3vh;
  color:gray;
}
</style>

<script setup lang="ts">
import {ref} from "vue";

const isClicked1=ref(false)
const isClicked2=ref(false)
const isClicked3=ref(false)
const isClicked4=ref(false)
const change1=()=>{
  isClicked1.value=!isClicked1.value
}
const change2=()=>{
  isClicked2.value=!isClicked2.value
}
const change3=()=>{
  isClicked3.value=!isClicked3.value
}
const change4=()=>{
  isClicked4.value=!isClicked4.value
}
</script>

<template>
<div class="side">
   <div class="home" >
     <div class="homeBack" >
     <img v-if="isClicked1" src="../assets/首页%20(1).png" @click="change1" alt="首页">
     <img v-if="!isClicked1" src="../assets/首页.png" @click="change1" alt="首页">
     </div>
     <p>首页</p>
   </div>
   <div class="onlineAsk">
     <div class="onlineAskBack">
     <img v-if="isClicked2" src="../assets/问答%20(1).png" @click="change2" alt="网上问诊">
     <img v-if="!isClicked2" src="../assets/问答.png" @click="change2" alt="网上问诊">
     </div>
     <p>线上问答</p>
   </div>
  <div class="dateManage">
    <div class="dateManageBack">
    <img v-if="isClicked3" src="../assets/今日日程.png" @click="change3" alt="今日日程">
    <img v-if="!isClicked3" src="../assets/今日日程%20(1).png" @click="change3" alt="今日日程">
    </div>
    <p>日程管理</p>
  </div>
  <div class="shop">
    <div class="shopBack">
    <img v-if="isClicked4" src="../assets/商城.png" @click="change4" alt="商城">
    <img v-if="!isClicked4" src="../assets/商城%20(1).png" @click="change4" alt="商城">
    </div>
    <p>商城</p>
  </div>
</div>
</template>

<style scoped>
.side {
  height: 90vh;
  width: 15vh;

  margin-left: -1%;

}
p{
  font-size: 1.5vh;
}
img{
  height:5vh ;
  width: 5vh;

}
.home{
  height: 7vh;
  width: 10vh;
  margin-top: 5vh;

}
.homeBack{
  height: 6vh;
  width: 6vh;
  margin-left: 3vh;
  background-color: red;
  text-align: center;
  border-radius: 1vh;
}
.home p{
  margin-top: 0vh;
  margin-left: 4.5vh;
  color: gray;
}
.onlineAsk{
  height: 7vh;
  width: 10vh;
 margin-top: 5vh;
}
.onlineAskBack{
  height: 6vh;
  width: 6vh;
  margin-left: 3vh;
  text-align: center;
  background-color: red;
  border-radius: 1vh;
}
.onlineAsk p{
  margin-top: 0vh;
  margin-left: 3vh;
  color: gray;
}
.dateManage{
  height: 7vh;
  width: 10vh;
 margin-top: 5vh;

}
.dateManageBack{
  border-radius: 1vh;
  line-height: 6vh;
  height: 6vh;
  width: 6vh;
  margin-left: 3vh;
  text-align: center;
  background-color: red;

}
.dateManage p{
  margin-top: 0vh;
  margin-left: 3vh;
  color: gray;
}
.dateManage p:hover{
  color: #8da707;
}
.shop{
  height: 7vh;
  width: 10vh;
  margin-top: 5vh;
}
.shopBack{
  height: 6vh;
  width: 6vh;
  margin-left: 3vh;
  text-align: center;
  background-color: red;
  border-radius: 1vh;
}
.shop p{
  margin-top: 0vh;
  margin-left: 4vh;
  color: gray;
}
</style>



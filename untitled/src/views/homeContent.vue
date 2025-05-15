<script setup lang="ts">

</script>

<template>
<div class="content">
  <div class="wrapper">
  <div class="left">
    <div class="title">
      <p class="Ch">参数管理</p>
      <p class="En">Parameter Management</p>
    </div>
    <div class="tags">
      <ul>
        <li>

            <img src="../assets/人体.png">
          <div class="p-controller"><p>睡眠参数</p>
          <p class="second">Sleep parameters</p>
          </div>


        </li>
        <li>

            <img src="../assets/环境.png">
            <div class="p-controller"><p>环境参数</p>
            <p class="second">Environment parameters</p>
            </div>

        </li>
        <li>
            <img src="../assets/可输入数据.png">
          <div class="p-controller"><p>参数输入</p>
          <p class="second">Parameter input</p>
          </div>
        </li>
      </ul>

    </div>
 <div class="mainBoard">
   <div class="top">
  <ul>
    <li>
      <div class="mainBoard-li">
      <img src="../assets/心率.png">
      <div>
        <p>心率</p>
        <p class="second">Heart rate</p>
      </div>
      </div>
      <div class="third">
        参数1
      </div>
    </li>
    <li>
      <div class="mainBoard-li">
      <img src="../assets/6-医疗-血氧.png">
      <div>
        <p>血氧</p>
        <p class="second">Blood Oxygen</p>
      </div>
      </div>
      <div class="third">
        参数2
      </div>
    </li>
    <li>
      <div class="mainBoard-li">
      <img src="../assets/宝贝体温.png">
      <div>
        <p>体温</p>
        <p class="second">Body temperature</p>
      </div>
      </div>
      <div class="third">参数3</div>
    </li>
    <li>
      <div class="mainBoard-li">
      <img src="../assets/血清乳酸.png">
      <div>
        <p>乳酸</p>
        <p class="second">lactic acid</p>
      </div>
      </div>
      <div class="third">参数4</div>
    </li>
  </ul>
   <select>
     <option value="1" selected>各时刻参数</option>
     <option value="2"></option>
     <option value="3"></option>
     <option value="4"></option>
   </select>
   </div>
 </div>
  </div>
  <div class="right">

  </div>
</div>
</div>
</template>

<style scoped>
.wrapper{
  margin:1vh 1vw
}
.content{
  display: flex;
  width: 92vw;
  background-color: #eaf1ff;
}
.title{
  display: flex;
}
.Ch{
  margin-left: 1vw;
  margin-top: 2vh;
  margin-right: 2vw;
  font-size: 20px;
  line-height: 20px;

}
.En{
  margin-top: 2.5vh;
  font-size: 15px;
  line-height: 15px;
}
.tags{
  margin-top: 2vh;
}
.tags ul{
  display: flex;
}
.tags li{
  display: flex;
  margin-right: 1vw;
  width: 20vw;
  height: 8vh;
  background-color: white;
  border-radius: 1vh;
  align-items: center;
  font-size: 2vh;
  color: #898989;
}
.tags img{

  padding:3px;
  margin-left: 1vw;
  width: 6vh;
  height: 6vh;
  background-color: #37b6ff;
  border-radius: 1vw;

}
.p-controller{
  margin-left: 2vh;
}
.second{
  font-size: 1vw;
}
.mainBoard{
  margin-top: 2vh;
  width: 62vw;
  height: 45vh;
  background-color: white;
  border-radius: 1vw;
}
.mainBoard ul{
  display: flex;
}
.mainBoard img{
  margin-right: 1vw;
  width: 4vh;
  height: 4vh;
}
.mainBoard ul li{
  padding-top: 3vh;
  padding-left: 2vw;

  width: 12vw;
  height: 15vh;

  color: #8a8a8a;
}
.mainBoard-li{
  display: flex;
}
.mainBoard .second{
  font-size: 13px;
}
.mainBoard .top{
  display: flex;
}
.mainBoard select{
  margin-top: 4vh;
  height: 3vh;
  width: 7vw;
  border-radius: 3px;
  border: 1px solid black;
}
.mainBoard .third{
  margin-left: 3vw;
  margin-top: 2vh;
  font-size: 2vh;
  font-weight: 700;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
const sleepFormData=ref({
  heartRate:' ',
  bodyTemperature:'',
  sleepTime:1,
  fastTime:'',
  bloodOxygen:'',
  LacticAcid:'',
  SWS:'',
  awakeTime:'1'
})
const environmentFormData=ref({
  temperature:'',
  noise:'',
  AQI:'',
  humidity:'',
  LightIntensity:'',
  Co2:''

})
const value2 = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const value1 = ref('')
const type=ref(1)
const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}
const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const value = ref(new Date())
const next=()=>{
  type.value+=1
  if(type.value===3){
    isTrue.value=!isTrue.value
  }
}
const isTrue=ref(true)
</script>

<template>
  <div class="all">
<div class="main-board">
  <div class="left">
  <div class="tab">
   <ul>
     <li>选择时间</li>
     <li>睡眠参数</li>
     <li>环境参数</li>
   </ul>
  </div>
  <div class="divider">--------------------------------------------------------------------------------------------------------------------------------------------</div>
  <div class="input" v-if="type===1" >
    <p class="time">时间：</p>
    <div class="demo-date-picker">
      <div class="block">
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            size="large"
        />
      </div>
  </div>
    <div class="example-basic">
      <el-time-picker
          v-model="value1"
          placeholder="选择时间"
          size="large"
      />
</div>
</div>
    <div class="sleepParameters" v-else-if="type===2">
      <div class="inputPlace">
        <ul>
          <li><p class="first">参数名称</p><p class="second">内容</p><p class="third">操作</p></li>
          <li><p style="margin-left: 2vw">心率：</p>
            <el-input v-model="sleepFormData.heartRate" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 4vw" placeholder="请输入" />
            <p style="margin-left: 1vw">BPM</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 3vw">重置</el-button>
           </li>
          <li><p style="margin-left: 2vw">体温：</p>
            <el-input v-model="sleepFormData.bodyTemperature" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 4vw" placeholder="请输入" />
            <p style="margin-left: 1vw">℃</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4vw">重置</el-button></li>
          <li><p style="margin-left: 2vw">睡眠时长：</p>
            <el-input-number v-model="sleepFormData.sleepTime" :min="1" :max="10" @change="handleChange" style="height: 4vh;margin-top: 2vh;margin-left: 2vw" />
            <p style="margin-left: 1vw">℃</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4vw">重置</el-button></li>
          <li><p style="margin-left: 2vw">快速眼动期</p>
            <el-input v-model="sleepFormData.fastTime" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 2vw" placeholder="请输入" />
            <p style="margin-left: 1vw">min</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 3vw">重置</el-button></li>
        </ul>
        <ul>
          <li><p class="first">参数名称</p><p class="second">内容</p><p class="third">操作</p></li>
          <li><p style="margin-left: 2vw">血氧：</p>
            <el-input v-model="sleepFormData.bloodOxygen" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 5.5vw" placeholder="请输入" />
            <p style="margin-left: 1vw">mmHg</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 1.5vw">重置</el-button></li>
          <li><p style="margin-left: 2vw">乳酸：</p>
            <el-input v-model="sleepFormData.LacticAcid" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 5vw" placeholder="请输入" />
            <p style="margin-left: 1vw">mmol/L</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 1.5vw">重置</el-button></li>
          <li><p style="margin-left: 2vw">深度睡眠时长：</p>
            <el-input v-model="sleepFormData.SWS" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 1vw" placeholder="请输入" />
            <p style="margin-left: 1vw">min</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 3.5vw">重置</el-button></li>
          <li><p style="margin-left: 2vw">清醒次数：</p>
            <el-input-number v-model="sleepFormData.awakeTime" :min="1" :max="10" @change="handleChange" style="height: 4vh;margin-top: 2vh;margin-left: 3vw" />
            <p style="margin-left: 1vw">℃</p>
            <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4.5vw">重置</el-button></li>
        </ul>
      </div>

    </div>
    <div class="environmentParameters" v-else>
         <div class="inputPlace1">
           <ul>
             <li><p class="first">参数名称</p><p class="second">内容</p><p class="third">操作</p></li>
             <li><p style="margin-left: 2vw">温度：</p>
               <el-input v-model="environmentFormData.temperature" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 4vw" placeholder="请输入" />
               <p style="margin-left: 1vw">℃</p>
               <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4.5vw">重置</el-button>
             </li>
             <li><p style="margin-left: 2vw">噪声：</p>
               <el-input v-model="environmentFormData.noise" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 4vw" placeholder="请输入" />
               <p style="margin-left: 1vw">dB</p>
               <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4.5vw">重置</el-button></li>
             <li><p style="margin-left: 2vw">空气质量指数</p>
               <el-select
                   v-model="value2"
                   placeholder="请填数据"
                   size="large"
                   style=" margin-left:1vw ;width: 8vw;margin-top: 1vw;"
               >
                 <el-option
                     v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"
                 />
               </el-select>

               <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 6.5vw">重置</el-button></li>

           </ul>
           <ul>
             <li ><p class="first">参数名称</p><p class="second">内容</p><p class="third">操作</p></li>
             <li ><p style="margin-left: 2vw">湿度：</p>
               <el-input v-model="environmentFormData.humidity" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 4vw" placeholder="请输入" />
               <p style="margin-left: 1vw">%</p>
               <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4vw">重置</el-button></li>
             <li ><p style="margin-left: 2vw">光线强度：</p>
               <el-input v-model="environmentFormData.AQI" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left:2vw" placeholder="请输入" />
               <p style="margin-left: 1vw">K</p>
               <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4.5vw">重置</el-button></li>
             <li ><p style="margin-left: 2vw">Co2浓度：</p>
               <el-input v-model="environmentFormData.Co2" style="width: 8vw;height:3vh;margin-top: 2.5vh;margin-left: 2vw" placeholder="请输入" />
               <p style="margin-left: 1vw">%</p>
               <el-button type="primary" style="margin-top: 2.5vh;width: 4vw;margin-left: 4.5vw">重置</el-button></li>

           </ul>

         </div>
    </div>
  <div class="next">
    <div class="button" @click="next" v-if=isTrue>
      下一步
    </div>
    <div class="button"  v-else>提交</div>
  </div>
  </div>

</div>
  <div class="right" >
    <el-calendar></el-calendar>>
  </div>
  </div>
</template>

<style scoped>
.all{
  display: flex;
}
.main-board{
  margin-top: 2vh;
  width: 62vw;
  height: 70vh;
  background-color: white;
  border-radius: 1vw;
  display: flex;
  position: relative;
}
.left{
  width: 62vw;
}
.tab{
  margin-bottom:4vh;
}
.tab ul{
  display: flex;
  margin-left:8vw;
}
.tab ul li{
  font-size: 2vh;
  margin-left: 8vw;
  margin-top: 8vh;
}
.divider{
margin-left: 10vw;
 }

.demo-date-picker {
  display: flex;
  margin-right: 10vw;
  padding: 0;
  flex-wrap: wrap;
}

.input{
  display: flex;
  margin-left: 10vw;
  margin-top: 10vh;
  line-height: 5vh;
  font-size: 2vh;
  height: 5vh;
  width: 62vw;
}
.button{
  margin-left: 25vw;
  margin-top: 20vh;
  border: 1px solid black;
  border-radius: 1vh;
  width: 10vw;
  line-height: 6vh;
  height: 6vh;
  text-align: center;
  background-color: #367bf5;
  color: white;
  position: absolute;
  top: 60%;
  cursor: pointer
}
.right {
  margin-left: 1vw;
  margin-top: -13vh;
  flex: 1;
  height: 85vh;
  background: white;
  border-radius: 1vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.inputPlace{
  margin-left: 2vw;
  margin-top: 3vh;
  display: flex;
  width: 58vw;
  height: 40vh;

}
.inputPlace ul{
  width: 29vw;
 border-bottom: 1px solid #bbbbbb;
}
.inputPlace li{
  height: 8vh;
  line-height: 8vh;
  display: flex;
  border: 1px solid #bbbbbb;
  border-bottom: none;

}
.inputPlace ul li:first-child{
  border: none;
  font-size: 1vw;
  text-align: center;
  background-color: #eaf1ff;
}
.inputPlace ul li:first-child p{
border: 1px solid #bbbbbb;
  border-bottom: none;

}
.inputPlace ul li p{
  font-size: 1vw;

}
li .first{
  width: 7vw;
}
li .second{
  width: 16vw;
}
li .third{
  width: 6vw;
}
.inputPlace1{
  margin-left: 2vw;
  margin-top: 3vh;
  display: flex;
  width: 58vw;
  height: 32vh;

}
.inputPlace1 ul{
  width: 29vw;
  border-bottom: 1px solid #bbbbbb;
}
.inputPlace1 li{
  height: 8vh;
  line-height: 8vh;
  display: flex;
  border: 1px solid #bbbbbb;
  border-bottom: none;

}
.inputPlace1 ul li:first-child{
  border: none;
  font-size: 1vw;
  text-align: center;
  background-color: #eaf1ff;
}
.inputPlace1 ul li:first-child p{
  border: 1px solid #bbbbbb;
  border-bottom: none;

}
.inputPlace1 ul li p{
  font-size: 1vw;

}
</style>

<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import { LineChart } from 'echarts/charts'
import * as echarts from 'echarts/core';
import {ref} from "vue";
import {onMounted,onBeforeUnmount} from "vue";
//首先使用background来修改整体的图背景
import 'echarts-liquidfill';
const chartRef = ref(null);
let chartInstance: echarts.ECharts | null = null
// 初始化图表


import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 按需注册组件
echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  CanvasRenderer
]);

const chartRef1 = ref<HTMLElement | null>(null);
let chartInstance1: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;

  chartInstance = echarts.init(chartRef.value);

  const option = {
    series: [{
      type: 'liquidFill',
      radius: '70%', // 水滴半径
      data: [0.65], // 数据值（0~1）
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#2A77FF' },
            { offset: 1, color: '#6FB0FF' }
          ]
        }
      ],
      label: {
        formatter: '{c}%', // 显示百分比
        fontSize: 30,
        color: '#fff'
      },
      outline: {
        show: true,
        borderDistance: 5,
        itemStyle: {
          borderWidth: 3,
          borderColor: '#fff',
          shadowBlur: 20,
          shadowColor: 'rgba(0, 136, 255, 0.5)'
        }
      },
      backgroundStyle: {
        borderWidth: 2,
        borderColor: '#E0E7FF',
        color: '#F0F4FF'
      }
    }]
  };

  chartInstance.setOption(option);
};
onMounted(() => {
  initChart();
  // 添加窗口resize监听
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (chartInstance) {
    chartInstance.dispose(); // 销毁实例防止内存泄漏
  }
});

const handleResize = () => {
  chartInstance?.resize();
};
const data = {
  dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  values: [820, 932, 901, 934, 1290, 1330, 1320]
};
const initChart1 = () => {
  if (!chartRef1.value) return;

  chartInstance1 = echarts.init(chartRef1.value);

  const option = {
    title: {
      text: 'sleep data',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: data.dates,
      axisLabel: {
        color: '#666'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#666'
      }
    },
    series: [{
      name: 'Sales',
      type: 'line',
      data: data.values,
      smooth: true,
      itemStyle: {
        color: '#5470C6'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(84, 112, 198, 0.6)' },
          { offset: 1, color: 'rgba(84, 112, 198, 0.1)' }
        ])
      }
    }],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
  };

  chartInstance1.setOption(option);
};

onMounted(() => {
  initChart1();
  window.addEventListener('resize', () => chartInstance1?.resize());
});

onBeforeUnmount(() => {
  chartInstance1?.dispose();
  window.removeEventListener('resize', () => chartInstance1?.resize());
});

</script>

<template>
  <div class="content">
    <div class="wrapper">
      <div class="left">
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
    <div><div ref="chartRef1" class="chart-container1"></div></div>
  </div>

  <div class="bottom">
    <p>清醒次数</p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p>快速眼动期</p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p>呼吸睡眠质量</p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  </div>
    </div>
  <div class="right">
    <Carousel
        :images="[
      'untitled/src/assets/首页.png',
      'untitled/src/assets/首页.png',
      'untitled/src/assets/首页.png'
    ]"
    />
    <div class="water-drop-chart">
      <p>睡眠时长</p>
      <div ref="chartRef" class="chart-container"></div>
    </div>
  </div>

  </div>

</template>

<style scoped>
.wrapper{
  margin:1vh 1vw;
  display: flex;
}
.content{
  display: flex;
  width: 92vw;
  background-color: #eaf1ff;
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
.bottom{
  margin-top: 2vh;
  width: 62vw;
  height: 25vh;
  background-color: white;
  border-radius: 1vw;
}
.bottom ul {
  display: flex;
}
.bottom li{
  margin-top: 1vh;
  margin-left: 1vw;
  width: 11vw;
  height: 2.5vh;
  border: 1px solid black;
  background-color: #eaf1ff;
  border-radius: 1vh;

}
.bottom p{
  margin-left: 1vw;
  margin-top: 1vh;
  color: #8c8c8c;
  font-weight: 700;
}
.bottom p:first-of-type{
  padding-top: 2vh;
}
.chart-container1{
  width: 62vw;
  height: 30vh; /* 重要：必须设置容器高度 */
}
.right{
  margin-top: -13vh;
  height: 87vh;
  width: 27vw;
  background-color: white;
  border-radius: 1vw;

}
.chart-container {
  width: 25vw;
  height: 30vh;
  min-height: 300px;
}
.water-drop-chart{
  margin-left: 1vw;
  margin-top: 5vh;
  width: 24vw;
  height: 40vh;

  border: 1px solid #f2f2f2;
}
.water-drop-chart p{
  margin-left: 1vw;
  font-size: 2vh;
}
</style>

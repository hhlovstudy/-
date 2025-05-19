<!--<script setup lang="ts">-->

<!--import { ref, onMounted, onBeforeUnmount, watch } from 'vue'-->
<!--import * as echarts from 'echarts/core'-->
<!--import {-->
<!--  LineChart,-->
<!--} from 'echarts/charts'-->
<!--import type {LineSeriesOption} from 'echarts/charts'-->
<!--import {-->
<!--  TitleComponent,-->
<!--  TooltipComponent,-->
<!--  GridComponent,-->
<!--  LegendComponent,-->
<!--  DatasetComponent-->
<!--} from 'echarts/components'-->
<!--import { CanvasRenderer } from 'echarts/renderers'-->
<!--import { UniversalTransition } from 'echarts/features'-->
<!--import type { EChartsOption } from 'echarts'-->
<!--import Carousel from "../components/Carousel.vue";-->

<!--// 注册 ECharts 组件-->
<!--echarts.use([-->
<!--  TitleComponent,-->
<!--  TooltipComponent,-->
<!--  GridComponent,-->
<!--  LegendComponent,-->
<!--  LineChart,-->
<!--  CanvasRenderer,-->
<!--  UniversalTransition,-->
<!--  DatasetComponent-->
<!--])-->

<!--// 图表容器引用-->
<!--const chartContainer = ref<HTMLDivElement | null>(null)-->
<!--let chartInstance: echarts.ECharts | null = null-->

<!--// 图表配置类型-->
<!--interface ChartSeriesItem {-->
<!--  name: string-->
<!--  data: number[]-->
<!--  color?: string-->
<!--  lineStyle?: {-->
<!--    type?: 'solid' | 'dashed' | 'dotted'-->
<!--    width?: number-->
<!--  }-->
<!--  areaStyle?: boolean-->
<!--  symbol?: 'circle' | 'rect' | 'triangle' | 'none'-->
<!--}-->

<!--// 响应式数据（根据实际需求修改）-->
<!--const chartData = ref({-->
<!--  categories: ['mon', 'tues', 'wed', 'tur', 'fri', 'sat', 'sun'],-->
<!--  series: [-->
<!--    {-->
<!--      name: 'highest Temperature',-->
<!--      data: [820, 932, 901, 934, 1290, 1330, 1320],-->
<!--      color: '#5470C6',-->
<!--      lineStyle: { type: 'solid', width: 2 },-->
<!--       areaStyle: false,-->
<!--      symbol: 'circle'-->
<!--    },-->
<!--    {-->
<!--      name: 'lowest Temperature',-->
<!--      data: [420, 532, 401, 534, 890, 930, 820],-->
<!--      color: '#EE6666',-->
<!--      lineStyle: { type: 'dotted', width: 1 },-->
<!--      areaStyle: false,-->
<!--      symbol: 'triangle'-->
<!--    }-->
<!--  ]-->
<!--})-->

<!--// 初始化图表-->
<!--const initChart = () => {-->
<!--  if (!chartContainer.value) return-->

<!--  // 销毁已有实例-->
<!--  if (chartInstance) {-->
<!--    chartInstance.dispose()-->
<!--  }-->

<!--  // 初始化配置-->
<!--  chartInstance = echarts.init(chartContainer.value)-->

<!--  // 构建配置项-->
<!--  const option: EChartsOption = {-->
<!--    // title: {-->
<!--    //   text: '多折线图示例',-->
<!--    //   left: 'center',-->
<!--    //   textStyle: {-->
<!--    //     color: '#333'-->
<!--    //   }-->
<!--    // },-->
<!--    tooltip: {-->
<!--      trigger: 'axis',-->
<!--      axisPointer: {-->
<!--        type: 'cross',-->
<!--        label: {-->
<!--          backgroundColor: '#6a7985'-->
<!--        }-->
<!--      },-->
<!--      backgroundColor: 'rgba(255,255,255,0.9)',-->
<!--      borderWidth: 1,-->
<!--      textStyle: {-->
<!--        color: '#666'-->
<!--      }-->
<!--    },-->
<!--    legend: {-->
<!--      data: chartData.value.series.map(s => s.name),-->
<!--      bottom: 15,-->
<!--      textStyle: {-->
<!--        color: '#666'-->
<!--      }-->
<!--    },-->
<!--    grid: {-->
<!--      left: '3%',-->
<!--      right: '4%',-->
<!--      bottom: '20%',-->
<!--      containLabel: true,-->
<!--      show: false-->
<!--    },-->
<!--    xAxis: {-->
<!--      type: 'category',-->
<!--      boundaryGap: false,-->
<!--      data: chartData.value.categories,-->
<!--      axisLine: {-->
<!--        show: true,-->
<!--        lineStyle: {-->
<!--          color: '#e0e0e0'-->
<!--        }-->
<!--      },-->
<!--      axisLabel: {-->
<!--        color: '#666'-->
<!--      }-->
<!--    },-->
<!--    yAxis: {-->
<!--      type: 'value',-->
<!--      axisLine: {-->
<!--        show: true,-->
<!--        lineStyle: {-->
<!--          color: '#e0e0e0'-->
<!--        }-->
<!--      },-->
<!--      splitLine: {-->
<!--        lineStyle: {-->
<!--          type: 'dashed',-->
<!--          color: '#f0f0f0'-->
<!--        }-->
<!--      },-->
<!--      axisLabel: {-->
<!--        color: '#666'-->
<!--      }-->
<!--    },-->
<!--    series: chartData.value.series.map((series) => ({-->
<!--      name: series.name,-->
<!--      type: 'line',-->
<!--      data: series.data,-->
<!--      smooth: true,-->
<!--      showSymbol: series.symbol !== 'none',-->
<!--      symbol: series.symbol || 'circle',-->
<!--      symbolSize: 8,-->
<!--      areaStyle: series.areaStyle-->
<!--          ? {-->
<!--            opacity: 0.4,-->
<!--            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [-->
<!--              { offset: 0, color: series.color || '#5470C6' },-->
<!--              { offset: 1, color: 'rgba(84, 112, 198, 0.1)' }-->
<!--            ])-->
<!--          }-->
<!--          : undefined,-->
<!--      itemStyle: {-->
<!--        color: series.color || '#5470C6'-->
<!--      },-->
<!--      // 合并 lineStyle 定义-->
<!--      lineStyle: {-->
<!--        width: series.lineStyle?.width || 2,-->
<!--        type: series.lineStyle?.type || 'solid',-->
<!--        color: series.color || '#5470C6'-->
<!--      },-->
<!--      emphasis: {-->
<!--        focus: 'series',-->
<!--        scale: true-->
<!--      }-->
<!--      // 动态样式配置-->
<!--      // areaStyle: series.areaStyle ? { opacity: 0.4 } : undefined,-->
<!--      // lineStyle: {-->
<!--      //   width: series.lineStyle?.width || 2,-->
<!--      //   type: series.lineStyle?.type || 'solid'-->
<!--      // }-->
<!--    })) as LineSeriesOption[]-->
<!--  }-->

<!--  chartInstance.setOption(option)-->
<!--}-->

<!--// 响应式处理-->


<!--// 监听数据变化-->
<!--watch(-->
<!--    () => chartData.value,-->
<!--    () => {-->
<!--      initChart()-->
<!--    },-->
<!--    { deep: true }-->
<!--)-->

<!--// 生命周期钩子-->

<!--import {-->
<!--  PieChart,-->
<!--  PieSeriesOption-->
<!--} from 'echarts/charts'-->
<!--// 注册 ECharts 组件-->
<!--echarts.use([-->
<!--  TitleComponent,-->
<!--  TooltipComponent,-->
<!--  LegendComponent,-->
<!--  PieChart,-->
<!--  CanvasRenderer,-->
<!--  UniversalTransition-->
<!--])-->

<!--// 图表配置类型-->
<!--interface ChartDataItem {-->
<!--  name: string-->
<!--  value: number-->
<!--  itemStyle?: {-->
<!--    color?: string-->
<!--    borderColor?: string-->
<!--    borderWidth?: number-->
<!--  }-->
<!--}-->

<!--// 图表容器引用-->
<!--const chartRef = ref<HTMLDivElement | null>(null)-->
<!--let chartInstance1: echarts.ECharts | null = null-->

<!--// 示例数据-->
<!--const chartData1: ChartDataItem[] = [-->
<!--  { name: '类别A', value: 335, itemStyle: { color: '#5470C6' } },-->
<!--  { name: '类别B', value: 310, itemStyle: { color: '#91CC75' } },-->
<!--  { name: '类别C', value: 234, itemStyle: { color: '#EE6666' } },-->
<!--  { name: '类别D', value: 135, itemStyle: { color: '#FAC858' } },-->
<!--  { name: '类别E', value: 1548, itemStyle: { color: '#73C0DE' } }-->
<!--]-->

<!--// 初始化图表-->
<!--const initChart1 = () => {-->
<!--  if (!chartRef.value) return-->

<!--  // 销毁已有实例-->
<!--  if (chartInstance1) {-->
<!--    chartInstance1.dispose()-->
<!--  }-->

<!--  // 初始化配置-->
<!--  chartInstance1 = echarts.init(chartRef.value)-->

<!--  // 构建配置项-->
<!--  const option: EChartsOption = {-->
<!--    title: {-->
<!--      text: '环形图示例',-->
<!--      left: 'center',-->
<!--      top: '45%',-->
<!--      textStyle: {-->
<!--        fontSize: 16,-->
<!--        color: '#666'-->
<!--      }-->
<!--    },-->
<!--    tooltip: {-->
<!--      trigger: 'item',-->
<!--      formatter: '{a}<br/>{b}: {c} ({d}%)'-->
<!--    },-->
<!--    legend: {-->
<!--      orient: 'vertical',-->
<!--      left: 'left',-->
<!--      data: chartData1.map(item => item.name)-->
<!--    },-->
<!--    graphic: {-->
<!--      type: 'text',-->
<!--      left: 'center',-->
<!--      top: '45%',-->
<!--      style: {-->
<!--        text: '总计\n100%',-->
<!--        textAlign: 'center',-->
<!--        fontSize: 14,-->
<!--        fill: '#999'-->
<!--      }-->
<!--    },-->
<!--    series: [-->
<!--      {-->
<!--        name: '数据分布',-->
<!--        type: 'pie',-->
<!--        radius: ['40%', '70%'], // 关键配置：内半径40%，外半径70%-->
<!--        avoidLabelOverlap: false,-->
<!--        itemStyle: {-->
<!--          borderRadius: 5,-->
<!--          borderColor: '#fff',-->
<!--          borderWidth: 2-->
<!--        },-->
<!--        label: {-->
<!--          show: false,-->
<!--          position: 'center'-->
<!--        },-->
<!--        emphasis: {-->
<!--          label: {-->
<!--            show: true,-->
<!--            fontSize: 16,-->
<!--            fontWeight: 'bold'-->
<!--          }-->
<!--        },-->
<!--        labelLine: {-->
<!--          show: false-->
<!--        },-->
<!--        data: chartData1,-->
<!--        animationType: 'expansion',-->
<!--        animationDuration: 1000-->
<!--      }-->
<!--    ]-->
<!--  }-->

<!--  chartInstance1.setOption(option)-->
<!--}-->

<!--// 响应式处理-->
<!--const handleResize = () => {-->
<!--  chartInstance?.resize()-->
<!--  chartInstance1?.resize()-->
<!--}-->
<!--onMounted(() => {-->


<!--})-->

<!--onBeforeUnmount(() => {-->
<!--  window.removeEventListener('resize', handleResize)-->
<!--  chartInstance?.dispose()-->
<!--})-->
<!--// 生命周期钩子-->
<!--onMounted(() => {-->
<!--  initChart()-->
<!--  initChart1()-->
<!--  window.addEventListener('resize', handleResize)-->

<!--})-->

<!--onBeforeUnmount(() => {-->
<!--  window.removeEventListener('resize', handleResize)-->

<!--  chartInstance?.dispose()-->
<!--  chartInstance1?.dispose()-->
<!--})-->

<!--</script>-->
<!--<template>-->
<!--  <div class="content">-->
<!--    <div class="wrapper">-->
<!--      <div class="left">-->
<!--        <div class="mainBoard">-->
<!--          <div class="top">-->
<!--            <ul>-->
<!--              <li>-->
<!--                <div class="mainBoard-li">-->
<!--                  <img src="../assets/temp.png">-->
<!--                  <div>-->
<!--                    <p>温度</p>-->
<!--                    <p class="second">Temperature</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="third">-->
<!--                  参数1-->
<!--                </div>-->
<!--              </li>-->
<!--              <li>-->
<!--                <div class="mainBoard-li">-->
<!--                  <img src="../assets/humidity.png">-->
<!--                  <div>-->
<!--                    <p>湿度</p>-->
<!--                    <p class="second">Humidity</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="third">-->
<!--                  参数2-->
<!--                </div>-->
<!--              </li>-->
<!--              <li>-->
<!--                <div class="mainBoard-li">-->
<!--                  <img src="../assets/Noise.png">-->
<!--                  <div>-->
<!--                    <p>噪声</p>-->
<!--                    <p class="second">Noise</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="third">参数3</div>-->
<!--              </li>-->
<!--              <li>-->
<!--                <div class="mainBoard-li">-->
<!--                  <img src="../assets/Sun.png">-->
<!--                  <div>-->
<!--                    <p>光线</p>-->
<!--                    <p class="second">Light Intensity</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="third">参数4</div>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <select>-->
<!--              <option value="1" selected>各时刻参数</option>-->
<!--              <option value="2"></option>-->
<!--              <option value="3"></option>-->
<!--              <option value="4"></option>-->
<!--            </select>-->

<!--          </div>-->
<!--          <div class="chart-container" ref="chartContainer"></div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="right">-->
<!--        <Carousel-->
<!--            :images="[-->
<!--      'untitled/src/assets/首页.png',-->
<!--      'untitled/src/assets/首页.png',-->
<!--      'untitled/src/assets/首页.png'-->
<!--    ]"-->
<!--        />-->
<!--        <div class="chart-container1" ref="chartRef"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.wrapper{-->
<!--  margin:1vh 1vw;-->
<!--  display: flex;-->
<!--}-->
<!--.content{-->
<!--  display: flex;-->
<!--  width: 92vw;-->
<!--  background-color: #eaf1ff;-->
<!--}-->

<!--.mainBoard{-->
<!--  margin-top: 2vh;-->
<!--  margin-left: -1vw;-->
<!--  width: 62vw;-->
<!--  height: 70vh;-->
<!--  background-color: white;-->
<!--  border-radius: 1vw;-->

<!--}-->
<!--.mainBoard ul{-->
<!--  display: flex;-->
<!--}-->
<!--.mainBoard img{-->
<!--  margin-right: 1vw;-->
<!--  width: 4vh;-->
<!--  height: 4vh;-->
<!--}-->
<!--.mainBoard ul li{-->
<!--  padding-top: 3vh;-->
<!--  padding-left: 2vw;-->

<!--  width: 12vw;-->
<!--  height: 15vh;-->

<!--  color: #8a8a8a;-->
<!--}-->
<!--.mainBoard-li{-->
<!--  display: flex;-->
<!--}-->
<!--.mainBoard .second{-->
<!--  font-size: 13px;-->
<!--}-->
<!--.mainBoard .top{-->
<!--  display: flex;-->
<!--}-->
<!--.mainBoard select{-->
<!--  margin-top: 4vh;-->
<!--  height: 3vh;-->
<!--  width: 7vw;-->
<!--  border-radius: 3px;-->
<!--  border: 1px solid black;-->
<!--}-->
<!--.mainBoard .third{-->
<!--  margin-left: 3vw;-->
<!--  margin-top: 2vh;-->
<!--  font-size: 2vh;-->
<!--  font-weight: 700;-->
<!--}-->
<!--.chart-container {-->
<!--  width: 100%;-->
<!--  min-height: 500px;-->
<!--  background: #fff;-->
<!--  border-radius: 8px;-->
<!--  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);-->
<!--}-->
<!--.right{-->
<!--  margin-top: -13vh;-->
<!--  height: 87vh;-->
<!--  width: 27vw;-->
<!--  background-color: white;-->
<!--  border-radius: 1vw;-->

<!--}-->
<!--.chart-container1 {-->
<!--  width: 100%;-->
<!--  min-height: 400px;-->
<!--  background: #fff;-->
<!--  border-radius: 8px;-->
<!--  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--}-->
<!--</style>-->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart, PieChart } from 'echarts/charts'
import type { LineSeriesOption, PieSeriesOption } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { UniversalTransition } from 'echarts/features'
import type { EChartsOption } from 'echarts'
import Carousel from "../components/Carousel.vue"

import tempImg from '../assets/temp.png'
import humidityImg from '../assets/humidity.png'
import noiseImg from '../assets/noise.png'
import lightImg from '../assets/sun.png'

const imageList = [tempImg, humidityImg, noiseImg, lightImg]

// 注册 ECharts 组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  LineChart,
  PieChart,
  CanvasRenderer,
  UniversalTransition
])

// 类型定义扩展
declare module 'echarts/core' {
  interface ComposeOption {
    line: LineSeriesOption
    pie: PieSeriesOption
  }
}

/* 折线图逻辑 */
const chartContainer = ref<HTMLDivElement | null>(null)
let chartInstance: echarts.ECharts | null = null

interface ChartSeriesItem {
  name: string
  data: number[]
  color?: string
  lineStyle?: {
    type?: 'solid' | 'dashed' | 'dotted'
    width?: number
  }
  areaStyle?: boolean
  symbol?: 'circle' | 'rect' | 'triangle' | 'none'
}

const chartData = ref({
  categories: ['mon', 'tues', 'wed', 'tur', 'fri', 'sat', 'sun'],
  series: [
    {
      name: 'highest Temperature',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      color: '#5470C6',
      lineStyle: { type: 'solid', width: 2 },
      areaStyle: false,
      symbol: 'circle'
    },
    {
      name: 'lowest Temperature',
      data: [420, 532, 401, 534, 890, 930, 820],
      color: '#EE6666',
      lineStyle: { type: 'dotted', width: 1 },
      areaStyle: false,
      symbol: 'triangle'
    }
  ] as ChartSeriesItem[]
})

const initLineChart = () => {
  if (!chartContainer.value) return

  chartInstance?.dispose()
  chartInstance = echarts.init(chartContainer.value)

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderWidth: 1,
      textStyle: { color: '#666' }
    },
    legend: {
      data: chartData.value.series.map(s => s.name),
      bottom: 15,
      textStyle: { color: '#666' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      containLabel: true,
      show: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: chartData.value.categories,
      axisLine: { lineStyle: { color: '#e0e0e0' } },
      axisLabel: { color: '#666' }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#e0e0e0' } },
      splitLine: { lineStyle: { type: 'dashed', color: '#f0f0f0' } },
      axisLabel: { color: '#666' }
    },
    series: chartData.value.series.map(series => ({
      name: series.name,
      type: 'line',
      data: series.data,
      smooth: true,
      showSymbol: series.symbol !== 'none',
      symbol: series.symbol || 'circle',
      symbolSize: 8,
      itemStyle: { color: series.color },
      lineStyle: {
        width: series.lineStyle?.width || 2,
        type: series.lineStyle?.type || 'solid',
        color: series.color
      },
      emphasis: { focus: 'series' }
    })) as LineSeriesOption[]
  }

  chartInstance.setOption(option)
}

/* 饼图逻辑 */
const chartRef = ref<HTMLDivElement | null>(null)
let chartInstance1: echarts.ECharts | null = null

interface ChartDataItem {
  name: string
  value: number
  itemStyle?: {
    color?: string
    borderColor?: string
    borderWidth?: number
  }
}

const chartData1: ChartDataItem[] = [
  { name: '类别A', value: 335, itemStyle: { color: '#5470C6' } },
  { name: '类别B', value: 310, itemStyle: { color: '#91CC75' } },
  { name: '类别C', value: 234, itemStyle: { color: '#EE6666' } },
  { name: '类别D', value: 135, itemStyle: { color: '#FAC858' } },
  { name: '类别E', value: 1548, itemStyle: { color: '#73C0DE' } }
]

const initPieChart = () => {
  if (!chartRef.value) return

  chartInstance1?.dispose()
  chartInstance1 = echarts.init(chartRef.value)

  const option: EChartsOption = {
    title: {
      text: '环形图示例',
      left: 'center',
      top: '45%',
      textStyle: { fontSize: 16, color: '#666' }
    },
    tooltip: { trigger: 'item', formatter: '{a}<br/>{b}: {c} ({d}%)' },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: chartData1.map(item => item.name)
    },
    graphic: {
      type: 'text',
      left: 'center',
      top: '45%',
      style: {
        text: '总计\n100%',
        textAlign: 'center',
        fontSize: 14,
        fill: '#999'
      }
    },
    series: [{
      name: '数据分布',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: { show: false },
      emphasis: { label: { show: true, fontSize: 16, fontWeight: 'bold' } },
      labelLine: { show: false },
      data: chartData1,
      animationDuration: 1000
    }]
  }

  chartInstance1.setOption(option)
}

/* 公共逻辑 */
const handleResize = () => {
  chartInstance?.resize()
  chartInstance1?.resize()
}

onMounted(() => {
  initLineChart()
  initPieChart()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
  chartInstance1?.dispose()
})

watch(
    () => chartData.value,
    () => initLineChart(),
    { deep: true }
)
</script>

<template>
  <div class="content">
    <div class="wrapper">
      <div class="left">
        <div class="mainBoard">
          <div class="top">
            <ul>
              <li v-for="(item, index) in 4" :key="index">
                <div class="mainBoard-li">
                  <img :src="imageList[index]">
                  <div>
                    <p class="first">{{ ['温度','湿度','噪声','光线'][index] }}</p>
                    <p class="second">{{ ['Temperature','Humidity','Noise','Light Intensity'][index] }}</p>
                  </div>
                </div>
                <div class="third">参数{{ index + 1 }}</div>
              </li>
            </ul>
            <select>
              <option value="1" selected>各时刻参数</option>
              <option v-for="n in 3" :key="n" :value="n+1"></option>
            </select>
          </div>
          <div class="chart-container" ref="chartContainer"></div>
        </div>
      </div>
      <div class="right">
        <Carousel :images="Array(3).fill('untitled/src/assets/首页.png')" />
        <div class="chart-container1" ref="chartRef"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 1vh 1vw;
  display: flex;
  gap: 2vw;
}

.content {
  width: 92vw;
  background-color: #eaf1ff;
}

.mainBoard {
  margin-top: 2vh;
  margin-left: -1vw;
  width: 62vw;
  height: 70vh;
  background: white;
  border-radius: 1vw;
  padding: 1rem;
}
.top{
  display: flex;
}
.mainBoard ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.mainBoard li {
  list-style: none;
  width: 13vw;
  padding: 1rem;

  border-radius: 8px;
}

.mainBoard-li {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mainBoard img {
  width: 40px;
  height: 40px;
}
.first{
  font-size: 1rem;
  color: #949494;
  font-weight: 700;
}
.second {
  font-size: 0.9rem;
  color: #949494;
  font-weight: 700;
}

.third {
  margin-top: 0.5rem;
  font-weight: bold;
}

select {
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  height: 4vh;
}


.chart-container1 {
  height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
.chart-container{
  height: 55vh;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.right {
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
</style>

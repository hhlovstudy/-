<template>
  <div class="simple-carousel">
    <img
        :src="images[currentIndex]"
        class="carousel-img"
        alt="轮播图"
    >
    <!-- 控制按钮 -->
    <button class="prev-btn" @click="prev">‹</button>
    <button class="next-btn" @click="next">›</button>

    <!-- 指示器 -->
    <div class="indicators">
      <span
          v-for="(_, index) in images"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<style scoped>
.simple-carousel {
  position: relative;
  width: 26vw;
  height: 38vh;
  margin: 0 auto;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.3);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 2;
}

.prev-btn { left: 0; }
.next-btn { right: 0; }

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.indicators span.active {
  background: white;
}
</style>

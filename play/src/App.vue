<template>
  <div>
    <img src="/logo.png" class="logo" alt="Vite logo" />
    <div class="title">Radiant组件库测试看板</div>
    <div class="preview-container">
      <ra-actbtn>哈哈哈</ra-actbtn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em 1.5em 0;
  will-change: filter;
  transition: filter 300ms;
}
.title {
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1em;
  user-select: none;
  color: #909399;
}
.title:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.preview-container {
  width: 600px;
  height: 800px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}
</style>

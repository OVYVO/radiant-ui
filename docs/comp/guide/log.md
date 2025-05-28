---
title: "更新记录"
outline: deep
lastUpdated: true
---

# 更新记录

<script setup>
const updateList = [
  {
    date: "2025/5/28",
    version: '版本V0.0.3',
    desc:'重构：RaTag组件'
  },
  {
    date: "2025/2/28",
    version: '版本V0.0.2',
    desc:'新增：RaUpload组件'
  },
   {
    date: "2024/11/28",
    version: '版本V0.0.1',
    desc:'新增：RaActbtn、RaDialog、RaEmpty、RaOvertip、RaTag、RaTitle组件'
  },
]
</script>

#### 组件管理

<el-timeline >
  <el-timeline-item v-for="item in updateList"  :timestamp="item.date" placement="top">
    <el-card>
      <h4>{{item.version}}</h4>
      <p>{{item.desc}}</p>
    </el-card>
  </el-timeline-item>
</el-timeline>

#### bug修复

- 暂无记录

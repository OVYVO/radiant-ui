---
title: "函数总览"
outline: deep
lastUpdated: true
aside: true
sidebar: true
---

# 🧱工具函数总览 <Badge type="tip" text="0.0.1" />

<script setup>
import { methodsData } from './config/methodsData.js'
</script>

<div v-for="(item,index) in methodsData" :key="index">
  <h2 :id="item.collectionName.toLowerCase().replace(/\s+/g, '-')">{{ item.collectionName }}</h2>
  <el-table border :data="item.methods" stripe show-overflow-tooltip>
    <el-table-column prop="name" label="函数名" minWidth="130"/>
    <el-table-column prop="desc" label="函数描述" minWidth="120"/>
    <el-table-column  prop="query" label="函数声明" :minWidth="item.showExample ? 220 : 280"/>
    <el-table-column align="center" v-if="item.showExample"  prop="example" label="补充" minWidth="60">
      <template #default="{row}">
        <el-popover
          v-if="row.example"
          placement="right"
          title="参数实例"
          width="220"
          trigger="hover"
          :content="row.example"
        >
          <template #reference>
            💡
          </template>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
  <el-card v-if="item.desc?.length" shadow="hover" style="margin-top: 16px;">
    <el-space alignment="start" direction="vertical">
      <el-text v-for="it in item.desc" :key="it.key">
        📌 <el-tag style="margin: 0 6px;">{{it.key}}</el-tag> 
        <el-link 
          v-if="it.link" 
          target="_blank" 
          href="it.link">{{it.info}}</el-link>
        <span v-else>{{it.info}}</span>
      </el-text>
    </el-space>
  </el-card>
</div>

---
title: "开发指南"
outline: deep
lastUpdated: true
---

# 开发指南

本节将介绍组件库开发常用命令。

## 前置条件

- [pnpm](https://pnpm.io/zh) 9.6.0及以上版本。
- [Node.js](https://nodejs.org/) 18.20.3 及以上版本。

## 依赖管理

### 依赖安装

::: warning
组件库项目底层架构依赖pnpm，因此不允许使用其他包管理工具，请自行规避开发风险。
:::

```sh
pnpm install
```

### 依赖删除

::: warning
该命令用于快速递归删除所有node_modules目录及pnpm-lock.yaml文件，请谨慎使用。如您有需要删除某一子文件夹下的node_modules，请在子文件夹终端执行删除命令。
:::

```sh
pnpm clear
```

## 开发管理

### 开发调试

开发调试环境提供组件测试环境，可以快速验证组件功能

```sh
pnpm preview
```

### 文档预览

基于vitepress生成静态网站，方便预览项目文档

```sh
pnpm docs:dev
```

## 组件管理

### 新建组件

该命令用于创建新组件，根据终端提示填写相应信息，会自动添加组件文件夹，及所有文件。

```sh
pnpm gen
```

### 删除组件

::: warning
该命令用于删除组件及对应的文件夹。请谨慎使用！
:::

```sh
pnpm del
```

## 版本管理

### 项目打包

该命令用于组件库打包，输出dist产物

```sh
pnpm build
```

### 版本发布

该命令用于发布组件包

```sh
pnpm deploy
```

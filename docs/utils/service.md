---
title: "公共请求"
outline: deep
lastUpdated: true
---

# 🧱公共请求

基于[Axios](https://www.axios-http.cn/)创建的请求示例，支持通过创建类实例的形式设置通用请求配置、请求拦截器。

## 使用方式

::: tip
使用方式可参考 [便携式运维网关集中管控平台](http://192.168.100.91:82/jugeng/web/network_security/jg-pog-centralized-control-web/-/tree/feature/1.13.0_yg/src/service) 相关文件代码详情。
:::

### 1.创建拦截器

```javascript
// @/service/intercepetor.js

export const requestInterceptors = config => {
  // 在发送请求之前做些什么，同axios请求拦截器
  return config
}

export const requestInterceptorsCatch = error => {
  // 对请求错误做些什么，同axios请求拦截器错误捕获
  return Promise.reject(error)
}

export const responseInterceptor = response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么，同axios响应拦截器
  return response
}

export const responseInterceptorCatch = error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么，同axios响应拦截器错误捕获
  return Promise.reject(error)
}
```

### 2.创建请求实例

> new创建实例时参数详见下文参数说明

```javascript
// @/service/index.js
import { axiosUltra } from "@jg/jg-utils"

import {
  requestInterceptors,
  requestInterceptorsCatch,
  responseInterceptor,
  responseInterceptorCatch
} from "./intercepetor"

const axiosIns = new axiosUltra({
  baseURL: 'https://some-domain.com/api/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'},
  interceptors: {
    requestInterceptors,
    requestInterceptorsCatch
    responseInterceptor,
    responseInterceptorCatch
  }
})

export default axiosIns.request
```

### 3.API请求示例

```javascript
// @/api/example.js
import request from "@/service/index.js"

export function fetchExample(data = {}) {
  return request({
    url: "/example/list",
    method: "post",
    data
  })
}
```

### 4.页面使用

```vue
<script setup>
import { fetchExample } from "@/api/example.js"

onMounted(async () => {
  await fetchExample()
})
</script>
```

## 参数说明

> AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError均为axios内部暴露types，可自行查阅相关文档

```typescript
/**
 * @see AxiosRequestConfig: https://www.axios-http.cn/docs/req_config
 */

interface AxiosOptions extends AxiosRequestConfig {
  interceptors?: RequstInterceptors
}
declare abstract class RequstInterceptors {
  abstract requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  abstract requestInterceptorsCatch?: (error: AxiosError) => void
  abstract responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  abstract responseInterceptorsCatch?: (axiosInstance: AxiosInstance, error: AxiosError) => void
}
declare class axiosUltra {
  private options
  private interceptors
  private axiosInstance
  constructor(options: AxiosOptions)
  private initInterceptors
  request(reqConfig: AxiosRequestConfig): Promise<AxiosResponse>
}
```

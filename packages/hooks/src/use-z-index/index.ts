import { computed, getCurrentInstance, inject, ref, unref } from "vue"
// import { debugWarn, isClient, isNumber } from "@radiant-ui/utils"

import type { InjectionKey, Ref } from "vue"

// 定义ElZIndexInjectionContext接口，包含当前的z-index值
export interface ElZIndexInjectionContext {
  current: number
}

// 初始的z-index上下文状态
const initial: ElZIndexInjectionContext = {
  current: 0
}

// 定义一个可变的z-index值
const zIndex = ref(0)

// 定义默认的初始z-index值
export const defaultInitialZIndex = 2000

// 定义注入键，用于在Vue组件树中传递z-index上下文
export const ZINDEX_INJECTION_KEY: InjectionKey<ElZIndexInjectionContext> = Symbol("elZIndexContextKey")

// 定义注入键，用于传递z-index的Ref值
export const zIndexContextKey: InjectionKey<Ref<number | undefined>> = Symbol("zIndexContextKey")

/**
 * 使用z-index的钩子函数
 * 可以根据注入的z-index上下文或覆盖值计算z-index
 * @param zIndexOverrides 可选的z-index覆盖值
 * @returns 初始z-index、当前z-index和获取下一个z-index的方法
 */
export const useZIndex = (zIndexOverrides?: Ref<number>) => {
  // 获取当前实例的z-index注入上下文，如果没有则使用初始值
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial

  // 获取z-index的注入值，如果没有则使用覆盖值或未定义
  const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, undefined) : undefined)

  // 计算初始z-index值，如果注入值是数字则使用它，否则使用默认值
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection)
    return typeof zIndexFromInjection === "number" ? zIndexFromInjection : defaultInitialZIndex
  })

  // 计算当前的z-index值，结合初始z-index和可变的z-index值
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  // 方法：获取并设置下一个z-index值
  const nextZIndex = () => {
    increasingInjection.current++
    zIndex.value = increasingInjection.current
    return currentZIndex.value
  }

  // 如果不是在客户端且没有注入z-index上下文，发出警告
  //   if (!isClient && !inject(ZINDEX_INJECTION_KEY)) {
  //     debugWarn(
  //       "ZIndexInjection",
  //       `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
  // usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`
  //     )
  //   }

  // 返回初始z-index、当前z-index和获取下一个z-index的方法
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  }
}

// 使用useZIndex钩子函数返回值的类型定义
export type UseZIndexReturn = ReturnType<typeof useZIndex>

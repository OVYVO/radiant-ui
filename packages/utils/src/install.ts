import type { App, Directive, Plugin, AppContext } from "vue"

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

//公共组件注册
export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App): void => {
    const { name } = comp as unknown as { name: string }
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
//全局方法注册
export const withInstallFn = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }
  return fn as SFCInstallWithContext<T>
}
//自定义组件注册
export const withInstallDirective = <T extends Directive>(directive: T, name: string) => {
  ;(directive as SFCWithInstall<T>).install = (app: App): void => {
    app.directive(name, directive as SFCWithInstall<T>)
  }
  return directive as SFCWithInstall<T>
}

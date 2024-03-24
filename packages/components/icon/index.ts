// 整合导出
import _Icon from "./src/icon.vue";

import { Plugin } from "vue";

// _Icon.install = function () {};

export type SFCWidthInstall<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  (comp as SFCWidthInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp);
  };
  return comp as SFCWidthInstall<T>;
}

const Icon = withInstall(_Icon);

export default Icon;

export * from "./src/icon";

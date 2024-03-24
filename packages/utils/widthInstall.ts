import { Plugin } from "vue";

export type SFCWidthInstall<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  (comp as SFCWidthInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp);
  };
  return comp as SFCWidthInstall<T>;
}

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type Mod = string | { [key: string]: unknown }
export type Mods = Mod | Mod[]
export type BEM = ReturnType<typeof createBEM>
const genBem = (name: string, mods?: Mods): string => {
  if (!mods) {
    return ""
  }
  if (typeof mods === "string") {
    return `${name}--${mods}`
  }
  if (Array.isArray(mods)) {
    return (mods as Mod[]).reduce<string>((ret, item) => ret + genBem(name, item), "")
  }
  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name, key) : ""), "")
}
const createBEM = (name: string) => {
  return (el?: Mods, mods?: Mods): Mods => {
    if (el && typeof el !== "string") {
      mods = el
      el = ""
    }
    el = el ? `${name}__${el}` : name
    return `${el}${genBem(el, mods)}`
  }
}

export const createNamespace = (name: string) => {
  const prefixedName = `radiant-${name}`
  return [prefixedName, createBEM(prefixedName)] as const
}

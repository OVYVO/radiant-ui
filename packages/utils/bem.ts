const ELEMENT = '__';
const MODS = '--';

type BemModifications = string | string[] | Record<string, boolean>;
function join(name: string, el: string | undefined, symbol: string): string {
  return el ? `${name}${symbol}${el}` : name;
}
function prefix(name: string, mods: BemModifications): string {
  if (!mods) {
    return name;
  }
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }
  if (Array.isArray(mods)) {
    return mods.map((item: BemModifications) => prefix(name, item)).join(' ');
  }
  const ret: string[] = [];
  for (const key in mods) {
    // TypeScript推断mods为Record<string, boolean>时，key已经是字符串类型
    if (mods[key as keyof typeof mods]) {
      ret.push(prefix(name, key));
    }
  }
  return ret.join(' ');
}

/**
 * bem helper
 * @param block - The block name (string)
 * @returns A function to construct the BEM class names
 *
 * Example:
 * bem('header')('title') => 'header__title'
 * bem('header')('title', { active: true }) => 'header__title--active'
 */
function bem(block: string): (el?: string, mods?: BemModifications) => string {
  return (el?: string, mods?: BemModifications) => {
    const _el = join(block, el, ELEMENT);
    return mods ? [_el, prefix(_el, mods)].join(' ') : _el;
  };
}

export default bem;
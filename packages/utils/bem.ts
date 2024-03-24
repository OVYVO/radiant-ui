/**
 * 生成BEM（Block, Element, Modifier）样式的类名字符串。
 * @param prefixName 前缀名称，通常是块（block）的名称。
 * @param blockSuffix 块的后缀，可选，用于区分不同的块版本。
 * @param element 元素（element）的名称，可选，表示属于某个块的子元素。
 * @param modifier 修改器（modifier）的名称，可选，用于表示块或元素的不同状态或变体。
 * @returns 组合后的BEM类名字符串。
 */
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (
    typeof prefixName !== "string" ||
    typeof blockSuffix !== "string" ||
    typeof element !== "string" ||
    typeof modifier !== "string"
  ) {
    throw new Error("所有参数必须为字符串类型。");
  }
  return `${prefixName}${blockSuffix ? `-${blockSuffix}` : ""}${
    element ? `_${element}` : ""
  }${modifier ? `--${modifier}` : ""}`;
}
/**
 * 创建一个BEM（Block, Element, Modifier）命名方法的工具函数
 * @param prefixName 前缀名称，用于构建BEM类名的基础部分
 * @returns 返回一个对象，包含用于生成BEM类名的各种方法
 */
function createBEM(prefixName: string) {
  // 通过闭包缓存prefixName，避免重复拼接
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element: string = "") => _bem(prefixName, "", element, "");
  const m = (modifier: string = "") => _bem(prefixName, "", "", modifier);
  const be = (blockSuffix: string, element: string = "") =>
    _bem(prefixName, blockSuffix, element, "");
  const bm = (blockSuffix: string, modifier: string = "") =>
    _bem(prefixName, blockSuffix, "", modifier);
  const em = (element: string, modifier: string = "") =>
    _bem(prefixName, "", element, modifier);
  const bem = (blockSuffix: string, element: string, modifier: string) =>
    _bem(prefixName, blockSuffix, element, modifier);
  const is = (name: string, state: boolean | string) =>
    state ? `is-${name}` : ""; // 空字符串作为false的情况返回值

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}

/**
 * 创建一个命名空间
 * @param name 命名空间的名称
 * @returns 返回一个基于 BEM 方法创建的命名空间对象
 */
export function createNameSpace(name: string) {
  const prefixName = `ra-${name}`;
  return createBEM(prefixName);
}

// 示例使用
// const bem = createNameSpace("icon");
// console.log(bem.b("button")); // 输出: ra-icon-button
// console.log(bem.e("active")); // 输出: ra-icon_active
// console.log(bem.m("hover")); // 输出: ra-icon--hover

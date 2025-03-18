// 定义需要转义的特殊字符数组
const blackChars: string[] = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "|",
  ":",
  '"',
  "<",
  ">",
  "?",
  " ",
  "`",
  "-",
  "=",
  "[",
  "]",
  "\\",
  ";",
  "'",
  ",",
  ".",
  "/",
  "\t",
  "\r",
  "\n",
  "\f",
  "\b"
]
// 定义转义字符
const escapeChar: string = "&Gamma;"

/**
 * 转义字符串中的特殊字符
 * @param {string} str - 需要转义的字符串
 * @returns 转义后的字符串
 */
export const escapeChars = (str: string): string => {
  if (typeof str !== "string") return str
  return str.replace(new RegExp(`[${blackChars.map(char => `\\${char}`).join("")}]`, "g"), escapeChar)
}

/**
 * 反转义字符串中的转义字符
 * @param {string} str - 需要反转义的字符串
 * @returns 反转义后的字符串
 */
export const unescapeChars = (str: string): string => {
  if (typeof str !== "string") return str
  return str.replace(new RegExp(escapeChar, "g"), match => {
    const index = blackChars.indexOf(match)
    return index !== -1 ? blackChars[index] : match
  })
}

/**
 * 递归处理对象中的字符串，应用指定的处理器函数
 * @param obj - 需要处理的对象或数组
 * @param processor - 处理字符串的函数
 * @returns 处理后的对象或数组
 */
export const processObject = (obj: any, processor: (str: any) => any): any => {
  if (typeof obj !== "object" || obj === null) return obj
  if (Array.isArray(obj)) {
    return obj.map(item => processObject(item, processor))
  }
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = processObject(obj[key], processor)
    return acc
  }, {})
}

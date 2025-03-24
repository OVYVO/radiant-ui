/**
 * ### 根据提供的对象生成一个 FormData 对象。
 * @param {Object} object - 包含需要提交的数据的对象。
 * @returns {FormData} formData 生成的包含所有数据的 FormData 对象。
 */
export const objToFormData = (object: Record<string, any>): FormData => {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(`${key}[${i}]`, subValue))
    } else {
      formData.append(key, value)
    }
  })
  return formData
}

/**
 * ### 将Blob对象转换为File对象。
 * @param {Blob} blob - 要转换的Blob对象。
 * @param {string} name - 文件名。
 * @param {string} type - 文件类型。
 * @returns {File|null} 转换后的File对象，如果输入参数不完整则返回null。
 */
export const blobToFile = (blob: Blob, name: string, type: string): File | null => {
  if (!blob || !name || !type) return null
  return new File([blob], name, { type, lastModified: Date.now() })
}

/**
 * ### 大小单位转换
 * @param {number} bytes - 文件大小。
 * @returns {string} 转换后的字符串。
 */
export const formatSize = (bytes: number): string => {
  if (bytes === 0) return "0B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  if (i >= sizes.length) {
    return `${parseFloat((bytes / Math.pow(k, sizes.length - 1)).toFixed(2))}${sizes[sizes.length - 1]}`
  }
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))}${sizes[i]}`
}

/**
 * ### 对象转URL
 * @param {object} paramObj - 需转换的对象
 * @param {string} prefix - 参数前缀，可选，用于为所有参数添加前缀。
 * @returns {string} 转换后的字符串。
 */
export const objToUrl = (paramObj: Record<string, any>): string => {
  const filter = (str: string): string => {
    str += "" // 隐式转换
    str = str.replace(/%/g, "%25")
    str = str.replace(/\+/g, "%2B")
    str = str.replace(/ /g, "%20")
    str = str.replace(/\//g, "%2F")
    str = str.replace(/\?/g, "%3F")
    str = str.replace(/&/g, "%26")
    // eslint-disable-next-line no-useless-escape
    str = str.replace(/\=/g, "%3D")
    str = str.replace(/#/g, "%23")
    return str
  }
  const sdata: string[] = []
  for (const attr in paramObj) {
    if (Object.prototype.hasOwnProperty.call(paramObj, attr)) {
      sdata.push(`${attr}=${filter(String(paramObj[attr]))}`)
    }
  }
  return sdata.join("&")
}

/**
 * ### 将数字格式化为带有千分位分隔符的字符串，并可选地控制小数位精度。
 * @param {number} num - 需要格式化的数字。
 * @param {number} prec - 可选的小数位精度。如果未提供，则保留原始小数位数。
 * @returns {string} 格式化后的字符串。
 */
export const numberToCommas = (num: number, prec?: number): string => {
  const numStr = prec !== undefined ? num.toFixed(prec) : num.toString()
  const [integerPart, decimalPart] = numStr.split(".")
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  if (decimalPart) {
    return `${formattedIntegerPart}.${decimalPart}`
  }
  return formattedIntegerPart
}

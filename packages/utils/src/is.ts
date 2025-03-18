const is = (val: any, type: string): boolean => {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}
/**
 * 检查给定值是否为空
 * @param {any} val - 要检查的值
 * @returns 如果值为空，返回 true；否则返回 false
 */
export const isEmpty = (val: any): boolean => {
  if ((val && Array.isArray(val)) || is(val, "String")) {
    return val.length === 0
  }
  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }
  if (val !== null && is(val, "Object")) {
    return Object.keys(val).length === 0
  }
  return false
}

/**
 * 检查当前环境是否为 Electron 环境
 * @returns 如果当前环境是 Electron 环境，返回 true；否则返回 false
 */
export const isElectron = ((): boolean => {
  return window.navigator?.userAgent.includes("Electron") ?? false
})()

/**
 * 检查给定的字符串是否为有效的 CIDR 表示法
 * @param {string} cidr - 要检查的 CIDR 字符串
 * @returns 如果字符串是有效的 CIDR 表示法，返回 true；否则返回 false
 */
export const isCIDR = (cidr: string): boolean => {
  const ipv4CidrRegex = /^(\d{1,3}\.){3}\d{1,3}\/(8|9|1[0-9]|2[0-9]|3[0-2])$/
  const ipv6CidrRegex =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|1[2-9][0-9]|2[0-9]{2}|3[0-1][0-9]|32[0-8])$/
  if (ipv4CidrRegex.test(cidr)) {
    const [ip, prefix] = cidr.split("/")
    const ipParts = ip.split(".").map(Number)
    return !ipParts.some(part => part < 0 || part > 255)
  }
  return ipv6CidrRegex.test(cidr)
}

/**
 * 检查给定的字符串是否为有效的IPV4
 * @param {string} ipv4 - 要检查的 ipv4 字符串
 * @returns 如果字符串是有效的IPV4，返回 true；否则返回 false
 */
export const isIPV4 = (ipv4: string): boolean => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/
  if (!ipv4Regex.test(ipv4)) return false
  const parts = ipv4.split(".").map(Number)
  return parts.every(part => part >= 0 && part <= 255)
}

/**
 * 检查给定的字符串是否为有效的IPV6
 * @param {string} ipv6 - 要检查的 ipv6 字符串
 * @returns 如果字符串是有效的IPV4，返回 true；否则返回 false
 */
export const isIPV6 = (ipv6: string): boolean => {
  const ipv6Regex =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  return ipv6Regex.test(ipv6)
}

/**
 * 检查给定的字符串是否为有效的IP
 * @param {string} ip - 要检查的 ip 字符串
 * @returns 如果字符串是有效的IP表示法，返回 true；否则返回 false
 */
export const isIP = (ip: string): boolean => {
  return isIPV4(ip) || isIPV6(ip)
}

/**
 * 检查给定的字符串是否为有效端口
 * @param {string} port - 要检查的port字符串
 * @returns 如果字符串是有效的Port表示法，返回 true；否则返回 false
 */
export const isPort = (port: string): boolean => {
  const portNumber = Number(port)
  return isNaN(portNumber) ? false : Boolean(portNumber >= 0 && portNumber <= 65535)
}

/**
 * 检查给定的字符串是否为有效Ipv4+端口
 * @param {string} ipWithPort - 要检查的ipv4+端口字符串
 * @returns 如果字符串是有效的Ipv4+端口，返回 true；否则返回 false
 */
export const isIPv4WithPort = (ipWithPort: string): boolean => {
  const ipv4WithPortRegex = /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d):(\d{1,5})$/
  return ipv4WithPortRegex.test(ipWithPort)
}

/**
 * 检查给定的字符串是否为有效的子网掩码
 * @param {string} mask - 要检查的ipv4+端口字符串
 * @returns 如果字符串是有效的子网掩码，返回 true；否则返回 false
 */
export const isMask = (mask: string): boolean => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/
  if (!ipv4Regex.test(mask)) return false
  const parts = mask.split(".").map(Number)
  if (!parts.every(part => part >= 0 && part <= 255)) return false
  const binaryMask = parts.map(part => part.toString(2).padStart(8, "0")).join("")
  const firstZeroIndex = binaryMask.indexOf("0")
  const lastOneIndex = binaryMask.lastIndexOf("1")
  if (firstZeroIndex === -1 || lastOneIndex === -1 || lastOneIndex >= firstZeroIndex) return false
  return true
}

/**
 * 检查给定的字符串是否为有效的IP集合
 * @param {string} multipleIp - 要检查的ip集合
 * @returns 如果字符串是有效的IP集合，返回 true；否则返回 false
 */
export const isMultipleIp = (multipleIp: string): boolean => {
  const ipList = multipleIp.split(",").map(ip => ip.trim())
  if (ipList.some(ip => ip === "")) return false
  const uniqueIpSet = new Set(ipList)
  if (uniqueIpSet.size !== ipList.length) return false
  for (const ip of uniqueIpSet) {
    if (!isIPV4(ip)) return false
  }
  return true
}

/**
 * 检查给定的字符串是否为有效的Ip段
 * @param {string} ipRange - 要检查的Ip段
 * @returns 如果字符串是有效的Ip段，返回 true；否则返回 false
 */
export const isIpRange = (ipRange: string): boolean => {
  const parts = ipRange.split("-").map(ip => ip.trim())
  if (parts.length !== 2) return false
  const [startIp, endIp] = parts
  if (!isIPV4(startIp) || !isIPV4(endIp)) return false
  const startParts = startIp.split(".").map(Number)
  const endParts = endIp.split(".").map(Number)
  for (let i = 0; i < 4; i++) {
    if (startParts[i] < endParts[i]) return true
    if (startParts[i] > endParts[i]) return false
  }
  return true
}

/**
 * 检查给定的字符串是否为有效的Ip+Ip段
 * @param {string} ipWithIpRange - 要检查的Ip+Ip段
 * @returns 如果字符串是有效的Ip+Ip段，返回 true；否则返回 false
 */
export const isIpWithIpRange = (ipWithIpRange: string): boolean => {
  const parts = ipWithIpRange.split(",").map(part => part.trim())
  if (parts.some(part => !part)) return false
  for (const part of parts) {
    if (isIPV4(part)) {
      continue
    } else if (isIpRange(part)) {
      continue
    } else {
      return false
    }
  }
  return true
}

/**
 * 检查给定的字符串是否为有效url
 * @param {string} url - 要检查的telNum字符串
 * @returns 如果字符串是有效的座机号表示法，返回 true；否则返回 false
 */
export const isUrl = (url: string): boolean => {
  const urlRegex = /^(https?:\/\/)([\da-z.-]+)(:\d+)?(\/[\w.-]*)*(\?[\w.-=&]*)?(#[\w.-]*)?$/i
  return urlRegex.test(url)
}

/**
 * 检查给定的字符串是否为有效手机号
 * @param {string} phoneNum - 要检查的phoneNum字符串
 * @returns 如果字符串是有效的手机号表示法，返回 true；否则返回 false
 */
export const isPhoneNum = (phoneNum: string): boolean => {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phoneNum)
}

/**
 * 检查给定的字符串是否为有效座机号
 * @param {string} telNum - 要检查的telNum字符串
 * @returns 如果字符串是有效的座机号表示法，返回 true；否则返回 false
 */
export const isTelNum = (telNum: string): boolean => {
  const telRegex = /^(\(\d{3}\)|\d{3}-|\d{4}-)?\d{7,8}$/
  return telRegex.test(telNum)
}

/**
 * 检查给定的字符串是否为有效联系方式
 * @param {string} contactNum - 要检查的telNum字符串
 * @returns 如果字符串是有效的座机号表示法，返回 true；否则返回 false
 */
export const isContactNum = (contactNum: string): boolean => {
  return isPhoneNum(contactNum) || isTelNum(contactNum)
}

/**
 * 检查给定的字符串是否为有效邮箱
 * @param {string} email - 要检查的email字符串
 * @returns 如果字符串是有效的座机号表示法，返回 true；否则返回 false
 */
export const isEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

/**
 * 检查给定的字符串是否为有效身份证
 * @param {string} id - 要检查的身份证字符串
 * @returns 如果字符串是有效的座机号表示法，返回 true；否则返回 false
 */
export const isId = (id: string): boolean => {
  const idRegex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9Xx]$/
  if (!idRegex.test(id)) return false
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]
  const sum = [...id.slice(0, 17)].reduce((acc, digit, index) => acc + parseInt(digit, 10) * weights[index], 0)
  const checkCode = checkCodes[sum % 11]
  return id.charAt(17).toUpperCase() === checkCode.toUpperCase()
}

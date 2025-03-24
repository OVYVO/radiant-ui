/**
 * ### 获取指定名称的 cookie 值
 * @param {string} key - 要获取的 cookie 的名称
 * @returns 如果找到指定名称的 cookie，则返回其值；否则返回 null
 */
export const getCookie = (key: string): string | null => {
  const name = `${key}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(";")
  for (const cookie of cookieArray) {
    const trimmedCookie = cookie.trim()
    if (trimmedCookie.startsWith(name)) {
      return trimmedCookie.substring(name.length)
    }
  }
  return null
}

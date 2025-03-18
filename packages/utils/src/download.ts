/**
 * 从指定的 URL 下载文件并保存到本地
 * @param {string} url - 文件的 URL 地址
 * @param {string} fileName - 下载后文件的名称
 */
export const downloadFileFromUrl = (url: string, fileName: string) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.responseType = "blob"
  xhr.onload = function () {
    if (xhr.status === 200) {
      downFileFromBlob(xhr.response, fileName)
    }
  }
  xhr.send()
}

/**
 * 从 Blob 对象创建文件并触发下载
 * @param {Blob} data - 包含文件数据的 Blob 对象
 * @param {string} fileName - 下载后文件的名称
 */
export const downFileFromBlob = (data: string, fileName: string) => {
  const blob = new Blob([data], { type: "application/octet-stream" })
  const file = new File([blob], fileName, { type: "application/octet-stream" })
  const url = URL.createObjectURL(file)
  const downloadLink = document.createElement("a")
  downloadLink.href = url
  downloadLink.download = fileName
  downloadLink.style.display = "none"
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
  URL.revokeObjectURL(url)
}

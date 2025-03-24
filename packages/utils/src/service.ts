import axios, { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from "axios"

export interface AxiosOptions extends AxiosRequestConfig {
  interceptors?: RequstInterceptors
}
export abstract class RequstInterceptors {
  abstract requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  abstract requestInterceptorsCatch?: (error: AxiosError) => void
  abstract responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  abstract responseInterceptorsCatch?: (axiosInstance: AxiosInstance, error: AxiosError) => void
}

export class axiosUltra {
  private options: AxiosOptions
  private interceptors: RequstInterceptors | undefined
  private axiosInstance: AxiosInstance

  /**
   * ### 构造函数，初始化 Axios 实例和拦截器
   * @param options - Axios 配置选项
   */
  constructor(options: AxiosOptions) {
    this.options = options
    this.interceptors = this.options.interceptors || {}
    this.axiosInstance = axios.create(this.options)
    this.initInterceptors()
    this.request = this.request.bind(this)
  }

  /**
   * ### 初始化请求和响应拦截器
   */
  private initInterceptors(): void {
    if (!this.interceptors) return
    const { requestInterceptors, requestInterceptorsCatch, responseInterceptor, responseInterceptorsCatch } =
      this.interceptors

    if (requestInterceptors) {
      this.axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => requestInterceptors(config),
        (error: AxiosError) => (requestInterceptorsCatch ? requestInterceptorsCatch(error) : Promise.reject(error))
      )
    }

    if (responseInterceptor) {
      this.axiosInstance.interceptors.response.use(
        (res: AxiosResponse) => responseInterceptor(res),
        (error: AxiosError) =>
          responseInterceptorsCatch ? responseInterceptorsCatch(this.axiosInstance, error) : Promise.reject(error)
      )
    }
  }

  /**
   * ### 发送 HTTP 请求
   * @param reqConfig - 请求配置
   * @returns Promise 对象，解析为 AxiosResponse
   */
  public request(reqConfig: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(reqConfig)
        .then((res: AxiosResponse) => resolve(res))
        .catch((error: AxiosError) => {
          const errorMessage = `${reqConfig.url} 接口报错: ${error.message}`
          console.error(errorMessage)
          reject(error)
        })
    })
  }
}

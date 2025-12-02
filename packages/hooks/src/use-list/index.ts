import { ref, onMounted, type Ref, shallowRef } from "vue"
import { ElMessage } from "element-plus"

interface ListOptions<T = any> {
  pagination?: boolean
  immediate?: boolean
  exclude?: string[]
  listHandler?: (data: T[]) => T[]
  queryHandler?: (query: Record<string, any>) => Record<string, any>
  onSuccess?: () => void
  onError?: () => void
}

interface ResponseResult<T = any> {
  records: T[]
  total?: number
  [key: string]: any
}

export function useList<T = any>(
  apiRequest: (params: Record<string, any>) => Promise<ResponseResult<T>>,
  query: Record<string, any> = {},
  options: ListOptions<T> = {}
) {
  const {
    pagination = true,
    immediate = true,
    exclude = [],
    listHandler = null, // 默认值为 null
    queryHandler = null,
    onSuccess = null,
    onError = null
  } = options

  if (!apiRequest) {
    ElMessage.error("请求方法不能为空")
    throw new Error("apiRequest method is required")
  }

  const params = ref<Record<string, any>>(query)
  const tableData = shallowRef<T[]>([])
  const totalNum = ref<number>(0)
  const loading = ref<boolean>(false)

  const handleResponse = (requestResult: ResponseResult<T>) => {
    if (pagination) {
      const { records, total } = requestResult
      tableData.value = listHandler ? listHandler(records) : records
      totalNum.value = total || 0
    } else {
      const data = requestResult.records || requestResult
      tableData.value = listHandler ? listHandler(data as T[]) : (data as T[])
    }
  }

  const handleError = (error: any) => {
    ElMessage.error(error.message || error) // 改进错误处理
    tableData.value = []
    loading.value = false
  }

  const getList = async () => {
    loading.value = true
    try {
      let requestParams = params.value
      if (queryHandler) {
        requestParams = queryHandler(params.value)
      }
      const response = await apiRequest(requestParams)
      handleResponse(response)
      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      handleError(err)
      if (onError) {
        onError()
      }
    } finally {
      loading.value = false
    }
  }

  const searchList = () => {
    if (Reflect.has(params.value, "pageNum") || Reflect.has(params.value, "pageSize")) {
      params.value.pageNum = 1
    }
    getList()
  }

  const resetSearch = () => {
    Object.keys(params.value).forEach(key => {
      if (![...exclude, "pageSize"].includes(key)) {
        params.value[key] = Array.isArray(params.value[key]) ? [] : undefined
      }
    })
    searchList()
  }

  onMounted(() => {
    if (immediate) {
      getList()
    }
  })

  return {
    /** 表格数据 */
    tableData: tableData as Ref<T[]>,
    /** 总条数 */
    totalNum: totalNum as Ref<number>,
    /** 加载状态 */
    loading: loading as Ref<boolean>,
    /** 查询参数 */
    queryForm: params as Ref<Record<string, any>>,
    /** 搜索方法 */
    searchList,
    /** 重置查询 */
    resetSearch,
    /** 刷新列表 */
    getList
  }
}

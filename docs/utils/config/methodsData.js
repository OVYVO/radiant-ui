export const methodsData = [
  {
    collectionName: "is判断集合",
    showExample: true,
    desc: [
      { key: "isElectron", info: "自执行函数无需调用即可直接使用isElectron变量" },
      { key: "isCIDR", info: "子网掩码与CIDR", link: "https://blog.csdn.net/qq_26442553/article/details/82761663/" }
    ],
    methods: [
      {
        name: "isElectron",
        desc: "是否electron环境",
        query: "boolean"
      },
      {
        name: "isCIDR",
        desc: "是否合法CIDR",
        query: "(cidr: string) => boolean"
      },
      {
        name: "isIPV4",
        desc: "是否合法isIPV4",
        query: "(ipv4: string) => boolean"
      },
      {
        name: "isIPV6",
        desc: "是否合法isIPV6",
        query: "(ipv6: string) => boolean"
      },
      {
        name: "isIP",
        desc: "是否合法IP",
        query: "(ip: string) => boolean"
      },
      {
        name: "isPort",
        desc: "是否合法端口",
        query: "(port: string) => boolean"
      },
      {
        name: "isIPv4WithPort",
        desc: "是否合法ipv4+端口",
        query: "(ipWithPort: string) => boolean",
        example: "127.0.0.0:8888"
      },
      {
        name: "isMultipleIp",
        desc: "是否为合法ipv4集合",
        query: "(multipleIp: string) => boolean",
        example: "127.0.0.1,127.0.0.2"
      },
      {
        name: "isIpRange",
        desc: "是否合法ip段(ipv4)",
        query: "(ipRange: string) => boolean",
        example: "127.0.0.1-127.0.0.2"
      },
      {
        name: "isIpWithIpRange",
        desc: "是否合法Ip+Ip段",
        query: "(ipWithIpRange: string) => boolean",
        example: "127.0.0.1,127.0.0.2-127.0.0.4"
      },
      {
        name: "isMask",
        desc: "是否合法子网掩码",
        query: "(mask: string) => boolean"
      },
      {
        name: "isPhoneNum",
        desc: "是否合法手机号",
        query: "(phoneNum: string) => boolean"
      },
      {
        name: "isTelNum",
        desc: "是否合法座机号",
        query: "(telNum: string) => boolean",
        example: "(021)|021- 8888888"
      },
      {
        name: "isContactNum",
        desc: "是否合法联系方式",
        query: "(contactNum: string) => boolean",
        example: "1351234567,(021)|021- 8888888"
      },
      {
        name: "isUrl",
        desc: "是否合法URL",
        query: "(url: string) => boolean"
      },
      {
        name: "isEmail",
        desc: "是否合法邮箱",
        query: "(email: string) => boolean"
      },
      {
        name: "isId",
        desc: "是否合法身份证号",
        query: "(id: string) => boolean"
      }
    ]
  },
  {
    collectionName: "文件下载集合",
    methods: [
      {
        name: "downloadFileFromUrl",
        desc: "url下载文件",
        query: "(url: string, fileName: string) => void"
      },
      {
        name: "downFileFromBlob",
        desc: "blob下载文件",
        query: "(data: string, fileName: string) => void"
      }
    ]
  },
  {
    collectionName: "数据转换集合",
    desc: [{ key: "prec", info: "小数精度保留位数" }],
    methods: [
      {
        name: "objToFormData",
        desc: "Object转FormData",
        query: "(object: Record<string, any>) => FormData"
      },
      {
        name: "blobToFile",
        desc: "Blob流转文件",
        query: "(blob: Blob, name: string, type: string) => File | null"
      },
      {
        name: "objToUrl",
        desc: "对象转Url",
        query: "(paramObj: Record<string, any>) => string"
      },
      {
        name: "formatSize",
        desc: "文件大小转化",
        query: "(bytes: number) => string"
      },
      {
        name: "numberToCommas",
        desc: "数字千分位分割",
        query: "(num: number, prec?: number) => string"
      }
    ]
  },
  {
    collectionName: "cookie集合",
    methods: [
      {
        name: "getCookie",
        desc: "获取key对应值",
        query: "(key: string) => string | null;"
      }
    ]
  },
  {
    collectionName: "请求服务集合",
    methods: [
      {
        name: "escapeChars",
        desc: "转义特殊字符",
        query: "(str: string) => string;"
      },
      {
        name: "unescapeChars",
        desc: "反转义特殊字符",
        query: "(str: string) => string;"
      },
      {
        name: "processObject",
        desc: "参数对象处理",
        query: "(obj: any, processor: (str: any) => any) => any"
      }
    ]
  }
]

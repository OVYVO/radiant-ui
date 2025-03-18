<template>
  <div class="ra-empty">
    <img :src="StatusMap[props.type].img" />
    <template v-if="!props.hideText">
      <div class="title">{{ props.title ? props.title : StatusMap[props.type].title }}</div>
      <div class="describe">{{ props.describe ? props.describe : StatusMap[props.type].describe }}</div>
    </template>
    <div class="extra" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { emptyProps } from "./empty"
import NoContentImg from "../../assets/images/st-noContent.png"
import NoDataImg from "../../assets/images/st-noData.png"
import NoNetImg from "../../assets/images/st-noNet.png"
import NoResultImg from "../../assets/images/st-noResult.png"
import NoMessageImg from "../../assets/images/st-noMessage.png"
import NoFixedImg from "../../assets/images/st-noFixed.png"
import NotFoundImg from "../../assets/images/st-404.png"
import ServerErrorImg from "../../assets/images/st-500.png"
import ForbiddenImg from "../../assets/images/st-403.png"

defineOptions({
  name: "RaEmpty"
})

const props = defineProps(emptyProps)

const StatusMap = {
  noContent: { img: NoContentImg, title: "暂无内容", describe: "精彩即将呈现，敬请期待" },
  noData: { img: NoDataImg, title: "暂无数据", describe: "敬请期待更新，保持关注" },
  noNetwork: { img: NoNetImg, title: "暂无网络", describe: "快检查一下网络设置吧" },
  noResult: { img: NoResultImg, title: "搜索无结果", describe: "换个关键词试试" },
  noMessage: { img: NoMessageImg, title: "暂无消息", describe: "目前还没有收到任何消息" },
  noFixed: { img: NoFixedImg, title: "暂无页面", describe: "功能开发中，敬请期待" },
  404: { img: NotFoundImg, title: "404", describe: "您访问的页面不存在" },
  500: { img: ServerErrorImg, title: "500", describe: "服务器错误，正在维护中" },
  403: { img: ForbiddenImg, title: "403", describe: "抱歉，您无法访问页面" }
}
</script>

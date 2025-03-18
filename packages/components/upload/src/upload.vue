<template>
  <div class="ra-upload">
    <div class="drag-upload" v-if="props.styleType == 'drag'">
      <div class="el-upload__info" v-if="props.needTemplate">
        <span>上传前请先按模版中的格式编辑内容：</span>
        <el-link type="primary" underline @click="handleTempDownload">下载模板文件</el-link>
      </div>
      <el-upload
        drag
        ref="uploadRef"
        :limit="props.limit"
        :multiple="props.limit > 1"
        :auto-upload="false"
        :show-file-list="false"
        :on-exceed="handleFileExceed"
        :on-change="handleFileChange"
      >
        <el-icon class="el-icon--upload" :size="40">
          <img :src="UploadSuccess" v-if="props.limit == 1 && fileList.length" />
          <UploadFilled v-else />
        </el-icon>
        <div class="el-upload__text" v-if="!fileList.length || props.limit != 1">
          <div class="el-upload__text__info">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__text__sub">
            支持 {{ props.accepts.join(",") }} 格式{{ props.size ? `，限 ${props.size}M以内` : "" }}
          </div>
        </div>
        <template v-if="fileList.length && props.limit == 1">
          <div class="el-upload__text">
            <div class="el-upload__filelist" v-for="(file, ind) in fileList" :key="file.uid">
              <div class="el-upload_tip" @click.stop>{{ file.name }}</div>
              <div class="el-upload_tip_btn">
                <el-button type="primary" link v-if="props.limit == 1">重新上传</el-button>
                <el-button type="danger" link @click.stop="handleFileDel(file, ind)">删除</el-button>
              </div>
            </div>
          </div>
        </template>
      </el-upload>
      <div class="el-upload__filelist__multiple" v-if="props.limit > 1">
        <div class="list-item" v-for="(file, ind) in fileList" :key="file.uid">
          <div class="el-upload_tip" @click.stop>
            <el-icon><Document /></el-icon>
            <span>{{ file.name }}</span>
          </div>
          <div class="el-upload_tip_btn">
            <el-button type="primary" :icon="CircleCheck" link></el-button>
            <el-button type="danger" :icon="CloseBold" link @click.stop="handleFileDel(file, ind)"></el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-upload" v-if="props.styleType == 'btn'">
      <el-upload
        ref="uploadRef"
        :limit="props.limit"
        :multiple="props.limit > 1"
        :auto-upload="false"
        :show-file-list="false"
        :on-exceed="handleFileExceed"
        :on-change="handleFileChange"
        v-if="!fileList.length || props.limit > 1"
        style="display: flex"
      >
        <slot>
          <el-button :icon="Upload">上传文件</el-button>
          <div class="el-upload__text__sub" style="margin: 0 0 0 10px">
            支持 {{ props.accepts.join(",") }} 格式{{ props.size ? `，限 ${props.size}M以内` : "" }}
          </div>
        </slot>
      </el-upload>
      <div
        class="el-upload__filelist__multiple"
        :style="{ marginTop: props.limit == 1 ? 0 : '' }"
        v-if="fileList.length"
      >
        <div class="list-item" v-for="(file, ind) in fileList" :key="file.uid">
          <p class="el-upload_tip" @click.stop>
            <el-icon><Document /></el-icon>
            <span>{{ file.name }}</span>
          </p>
          <div class="el-upload_tip_btn">
            <el-button type="primary" :icon="CircleCheck" link></el-button>
            <el-button type="danger" :icon="CloseBold" link @click.stop="handleFileDel(file, ind)"></el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { uploadProps } from "./upload"
import { ElUpload, ElButton, ElIcon, ElLink } from "element-plus"
import { UploadFilled, Document, CloseBold, CircleCheck, Upload } from "@element-plus/icons-vue"
import { ElMessage, genFileId } from "element-plus"
import type { UploadProps, UploadFile, UploadInstance, UploadRawFile } from "element-plus"
import UploadSuccess from "../../assets/images/uploadSuccess.svg"

defineOptions({
  name: "RaUpload"
})

const props = defineProps(uploadProps)

const emits = defineEmits(["handleTempDownload"])

let fileList = defineModel<UploadFile[]>({ required: true })
let uploadRef = ref<UploadInstance>()

const isAcceptType = (file: UploadFile) => {
  const matchResult = file.name.match(/\.[^.\s]+$/)
  const fileExtension = matchResult ? matchResult[0].toLowerCase() : ""
  return props.accepts.length ? props.accepts.includes(fileExtension) : true
}
const isOverSize = (file: UploadFile) => {
  return props.size && file.size != null ? file.size / 1024 / 1024 >= props.size : false
}
const isOverNamelen = (file: UploadFile) => {
  return file.name.length >= props.nameLen
}
const fileValidate = (file: UploadFile): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!isAcceptType(file)) {
      reject(`资源类型错误`)
    }
    if (isOverSize(file)) {
      reject(`资源大小不超过${props.size}M`)
    }
    if (isOverNamelen(file)) {
      reject(`文件名不超过${props.nameLen}字符`)
    }
    resolve()
  })
}
const handleFileChange = async (file: UploadFile) => {
  try {
    await fileValidate(file)
    fileList.value.push(file)
  } catch (error: any) {
    ElMessage.error(error)
  }
}
const handleFileDel = (file: UploadFile, ind: number) => {
  if (uploadRef.value) {
    uploadRef.value.handleRemove(file)
  }
  fileList.value.splice(ind, 1)
}
const handleFileExceed: UploadProps["onExceed"] = files => {
  if (props.limit == 1) {
    fileList.value = []
    uploadRef.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRef.value!.handleStart(file)
  } else {
    ElMessage.error(`最多允许上传${props.limit}个文件！`)
  }
}
const handleTempDownload = () => {
  emits("handleTempDownload")
}
</script>

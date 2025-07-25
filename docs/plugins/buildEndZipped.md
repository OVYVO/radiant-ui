---
title: "buildEndZipped插件"
outline: deep
lastUpdated: true
---

# buildEndZipped插件

该插件用于自动将构建产物打包成tar.gz压缩包,并提供上传构建产物至AliOSS能力。

## package.json配置

> 该插件仅会响应`mode`为`prod`的打包模式，建议为prod打包配置一条专属命令。

```json
{
  "scripts": {
    "build:prod": "rm -rf dist && pnpm build:electron && pnpm online --mode prod"
  }
}
```

## vite.config.js配置

```javascript
import buildEndZipped from "@ovyvo/vite-plugins/buildEndZipped"

export default defineConfig(({ mode }) => {
  return {
    plugins: [buildEndZipped(config)]
  }
})
```

## AliOSS上传

- 插件接受一个`needUpload`配置字段，类型为Boolean。配置为true的情况下，会在构建流程结束后自动将打包好的产物上传至AliOSS；配置为false则仅执行打包。默认值为：true

- 插件接受一个`target_oss_object`配置字段，类型为String。此配置仅在`needUpload`为true时生效，用于配置上传至OSS的目标对象。默认值为："jg-web-test"

:::tip 🔊🔊🔊说明
请注意：开启Upload功能请务必保证已在您的本地环境成功添加`OSS_ACCESS_KEY_ID`及`OSS_ACCESS_KEY_SECRET`环境变量，这将影响您的上传操作，如何添加环境变量请参考下文。
:::

```javascript
import buildEndZipped from "@ovyvo/vite-plugins"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      buildEndZipped({
        needUpload: true,
        target_oss_object: "jg-web-test"
      })
    ]
  }
})
```

## 配置环境变量

### Linux

:::details 环境配置

1. 在命令行界面执行以下命令来将环境变量设置追加到~/.bashrc 文件中。

```shell
echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bashrc
echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bashrc
```

2. 执行以下命令使变更生效。

```shell
source ~/.bashrc
```

3. 环境变量验证

```shell
echo $OSS_ACCESS_KEY_ID
echo $OSS_ACCESS_KEY_SECRET
```

:::

### macOS

1. 在终端中执行以下命令，查看默认Shell类型。

```shell
echo $SHELL
```

2. 根据默认Shell类型进行操作。

:::details zsh

1. 执行以下命令来将环境变量设置追加到 ~/.zshrc 文件中。

```shell
echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.zshrc
echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.zshrc
```

2. 执行以下命令使变更生效。

```shell
source ~/.zshrc
```

3. 执行以下命令检查环境变量是否生效。

```shell
echo $OSS_ACCESS_KEY_ID
echo $OSS_ACCESS_KEY_SECRET
```

:::

:::details bash

1. 执行以下命令来将环境变量设置追加到 ~/.bash_profile 文件中。

```shell
echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bash_profile
echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bash_profile
```

2. 执行以下命令使变更生效。

```shell
source ~/.bash_profile
```

3. 执行以下命令检查环境变量是否生效。

```shell
echo $OSS_ACCESS_KEY_ID
echo $OSS_ACCESS_KEY_SECRET
```

:::

### Windows

:::details cmd

1. 在cmd中运行以下命令。

```shell
setx OSS_ACCESS_KEY_ID "YOUR_ACCESS_KEY_ID"
setx OSS_ACCESS_KEY_SECRET "YOUR_ACCESS_KEY_SECRET"
```

2. 运行以下命令，检查环境变量是否生效。

```shell
echo %OSS_ACCESS_KEY_ID%
echo %OSS_ACCESS_KEY_SECRET%
```

:::

:::details PowerShell

1. 在PowerShell中运行以下命令。

```shell
[Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_ID", "YOUR_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", "YOUR_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
```

2. 运行以下命令，检查环境变量是否生效。

```shell
[Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
[Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
```

:::
:::danger 🚨🚨🚨
参考上述方式修改系统环境变量后，请重启或刷新您的编译运行环境，包括IDE、命令行界面、其他桌面应用程序及后台服务，以确保最新的系统环境变量成功加载。
:::

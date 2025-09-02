#!/bin/bash

# 配置参数
LOCAL_DIST_PATH="docs/.vitepress/dist"
REMOTE_HOST=${DEPLOY_HOST:-""}
REMOTE_USER=${DEPLOY_USER:-""}
REMOTE_PATH=${DEPLOY_PATH:-""}
SSH_PORT=${DEPLOY_SSH_PORT:-""}
REMOTE_PASS=${DEPLOY_PASSWORD:-""}

echo "开始部署文档到远程服务器..."
# 使用 rsync 同步文件
sshpass -p "$REMOTE_PASS" rsync -avz --delete -e "ssh -p $SSH_PORT" $LOCAL_DIST_PATH/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH

if [ $? -eq 0 ]; then
  echo "文档部署成功！"
else
  echo "文档部署失败"
  exit 1
fi
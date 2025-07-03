#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 检查 package.json 是否存在
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ 错误：package.json 文件不存在${NC}"
  exit 1
fi

# 读取版本号
VERSION=$(jq -r '.version' package.json 2>/dev/null)
if [ -z "$VERSION" ]; then
  echo -e "${RED}❌ 错误：package.json 中未找到 version 字段${NC}"
  exit 1
fi

# 获取当前分支名
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ $? -ne 0 ]; then
  echo -e "${RED}❌ 错误：无法获取当前分支名，请确保在 Git 仓库中${NC}"
  exit 1
fi

# 检查分支名是否符合要求
if [[ "$BRANCH_NAME" != "main" && "$BRANCH_NAME" != "master" && "$BRANCH_NAME" != *"$VERSION"* ]]; then
  echo -e "${RED}\n❌ 版本检查失败！${NC}"
  echo -e "${YELLOW}\n当前分支名：${NC}${BLUE}$BRANCH_NAME${NC}"
  echo -e "${YELLOW}package.json 版本：${NC}${BLUE}$VERSION${NC}"
  echo -e "${RED}\n请确保分支名包含正确的版本号${NC}"
  exit 1
fi

echo -e "${GREEN}\n✅ 版本检查通过！${NC}"
echo -e "${BLUE}当前分支：$BRANCH_NAME${NC}"
echo -e "${BLUE}版本号：$VERSION${NC}"

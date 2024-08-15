#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/$NAME"
STYLENAME="$FILE_PATH/theme-chalk/src"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ${INPUT_NAME}Props } from './$INPUT_NAME'

defineOptions({
  name: 'radiant$NAME',
})

const props = defineProps(${INPUT_NAME}Props)

// init here
</script>
EOF

cat > $DIRNAME/src/$INPUT_NAME.ts <<EOF
import { ExtractPropTypes, PropType } from "vue"

export const ${INPUT_NAME}Props = {
  size: [Number, String] as PropType<number | string>
} as const

export type ${INPUT_NAME}Propr = ExtractPropTypes<typeof ${INPUT_NAME}Props>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from '@radiant-ui/utils'
import _$NAME from './src/$INPUT_NAME.vue'

const $NAME = withInstall(_$NAME)
export default $NAME

export * from './src/$INPUT_NAME'

declare module "vue" {
  export interface GlobalComponents {
    radiant$NAME: typeof $NAME
  }
}

EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.test.tsx <<EOF
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import $NAME from '../src/$INPUT_NAME.vue'

const AXIOM = 'Rem is the best girl'

describe('$NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <$NAME>{AXIOM}</$NAME>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
EOF

cat <<EOF >"$DIRNAME/style/css.ts"
import '@radiant-ui/theme-chalk/radiant-$INPUT_NAME.css'

EOF
cat <<EOF >"$DIRNAME/style/index.ts"
import '@radiant-ui/theme-chalk/radiant-$INPUT_NAME.css'

EOF

cat <<EOF >"$STYLENAME/$INPUT_NAME.scss"
.radiant-$INPUT_NAME{

}
EOF



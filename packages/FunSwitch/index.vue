<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'FunSwitch'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: '',
  activeColor: '',
  inactiveColor: '',
  async: false,
  disabled: false
})

const { isActived, background, handleClick } = useHandler(props, emit)
</script>

<template>
  <!-- 开关 -->
  <div class="fun-switch" :class="{ 'fun-switch-on': isActived }" :data-disabled="disabled" @click="handleClick" :style="`font-size:${size};background:${background};`">
    <span class="round"></span>
  </div>
</template>

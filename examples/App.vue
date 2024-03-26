<script lang="ts" setup>
  import { ref } from 'vue'

  interface ListDataItem {
    id: number
    label: string
    value: boolean
    size?: string
    inactiveColor?: string
    activeColor?: string
    async?: boolean
    disabled?: boolean
  }
  const datas = [
    {
      id: 1,
      label: '基础用法',
      value: false
    },
    {
      id: 2,
      label: '自定义大小',
      size: '24px',
      value: false
    },
    {
      id: 3,
      label: '自定义颜色',
      value: false,
      inactiveColor: '#f60',
      activeColor: '#e4393c'
    },
    {
      id: 4,
      label: '异步状态',
      value: false,
      async: true
    },
    {
      id: 5,
      label: '禁用状态',
      value: true,
      disabled: true
    }
  ]
  const listData = ref<ListDataItem[]>(datas)
  const onClick = ({ async, value }: ListDataItem) => {}
</script>

<template>
  <ul style="width: fit-content;">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <fun-switch
        class="switch"
        v-model="item.value"
        :size="item.size"
        :active-color="item.activeColor"
        :inactive-color="item.inactiveColor"
        :disabled="item.disabled"
        :async="item.async"
        @click="onClick(item)"
      ></fun-switch>
    </li>
  </ul>
</template>

<style scoped lang="less">
.switch {
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
  }
  > li {
    margin-bottom: 10px;
    .label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.fun-switch) {
      margin-bottom: 20px;
    }
  }
}
</style>
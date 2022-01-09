<template>
  <div>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>字段名：</span></a-col>
      <a-col :span="18">
        <a-input class="w-220px"
                 allowClear
                 v-model:value="options.fieldName"></a-input>
      </a-col>
    </a-row>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>默认值：</span></a-col>
      <a-col :span="18">
        <a-input class="w-220px"
                 allowClear
                 v-model:value="options.defaultValue"></a-input>
      </a-col>
    </a-row>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>占位内容：</span></a-col>
      <a-col :span="18">
        <a-input class="w-220px"
                 allowClear
                 v-model:value="options.placeholder"></a-input>
      </a-col>
    </a-row>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>文本类型：</span></a-col>
      <a-col :span="18">
        <a-select class="w-full"
                  allowClear
                  v-model:value="options.type"
                  :options="[
            { label: 'text', value: 'text' },
            { label: 'password', value: 'password' }
          ]">
        </a-select>
      </a-col>
    </a-row>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>控件大小：</span></a-col>
      <a-col :span="18">
        <a-select class="w-full"
                  allowClear
                  v-model:value="options.size"
                  :options="[
            { label: 'default', value: 'default' },
            { label: 'large', value: 'large' },
            { label: 'small', value: 'small' }
          ]">
        </a-select>
      </a-col>
    </a-row>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>禁用：</span></a-col>
      <a-col :span="18">
        <a-checkbox v-model:checked="options.disabled"></a-checkbox>
      </a-col>
    </a-row>
    <a-row class="mb-2">
      <a-col :span="6"
             class="pr-2 text-right"><span>可清除：</span></a-col>
      <a-col :span="18">
        <a-checkbox v-model:checked="options.allowClear"></a-checkbox>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: {
    options: Object
  }
})
</script>

<style>
</style>

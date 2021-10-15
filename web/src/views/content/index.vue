<template>
  <div class="h-12 bg-blue-50 flex items-center justify-between">
    <div class="w-16"></div>
    <div class="flex justify-items-end">
      <a-button @click="showCode()">查看代码</a-button>
    </div>
  </div>
  <draggable class="h-9/10 bg-white m-2 p-2 rounded border border-dashed border-blue-400"
             :list="data.list"
             group="people"
             item-key="name">
    <template #item="{element, index}">
      <div :key="element.name">
        <FieldWidget :fieldType="element.tempType"
                     :index="index"
                     :opt="element.options"
                     @showDrawer="showDrawer" />
      </div>
    </template>
  </draggable>

  <a-drawer v-if="data.visible"
            title="属性配置"
            placement="right"
            :mask="false"
            :visible="data.visible"
            :get-container="false"
            :width="370"
            :wrap-style="{ position: 'absolute' }"
            @close="onClose">
    <div>
      <a-row class="mb-2">
        <a-col :span="6"
               class="pr-2 text-right"><span>字段名：</span></a-col>
        <a-col :span="18">
          <a-input class="w-220px"
                   allowClear
                   v-model:value="data.list[data.index].options.fieldName"></a-input>
        </a-col>
      </a-row>
      <a-row class="mb-2">
        <a-col :span="6"
               class="pr-2 text-right"><span>默认值：</span></a-col>
        <a-col :span="18">
          <a-input class="w-220px"
                   allowClear
                   v-model:value="data.list[data.index].options.defaultValue"></a-input>
        </a-col>
      </a-row>
      <a-row class="mb-2">
        <a-col :span="6"
               class="pr-2 text-right"><span>占位内容：</span></a-col>
        <a-col :span="18">
          <a-input class="w-220px"
                   allowClear
                   v-model:value="data.list[data.index].options.placeholder"></a-input>
        </a-col>
      </a-row>
      <a-row class="mb-2">
        <a-col :span="6"
               class="pr-2 text-right"><span>文本类型：</span></a-col>
        <a-col :span="18">
          <a-select class="w-full"
                    allowClear
                    v-model:value="data.list[data.index].options.type"
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
                    v-model:value="data.list[data.index].options.size"
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
          <a-checkbox v-model:checked="data.list[data.index].options.disabled"></a-checkbox>
        </a-col>
      </a-row>
      <a-row class="mb-2">
        <a-col :span="6"
               class="pr-2 text-right"><span>可清除：</span></a-col>
        <a-col :span="18">
          <a-checkbox v-model:checked="data.list[data.index].options.allowClear"></a-checkbox>
        </a-col>
      </a-row>
    </div>
  </a-drawer>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import draggable from 'vuedraggable'
import FieldWidget from '@/components/Widget/Field.vue'

export default defineComponent({
  components: { draggable, FieldWidget },
  setup() {
    const data = reactive({
      list: [],
      item: {},
      visible: false,
      index: 0
    })
    const showCode = () => {}

    const onClose = () => {
      data.visible = false
    }

    const showDrawer = (index) => {
      data.visible = true
      data.index = index
      data.item = { ...data?.list[index]?.options }
    }
    return {
      data,
      showCode,
      onClose,
      showDrawer
    }
  }
})
</script>

<style>
</style>
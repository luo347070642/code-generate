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
    <PropsOption :options="data.list[data.index].options" />
  </a-drawer>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import draggable from 'vuedraggable'
import FieldWidget from '@/components/Widget/Field.vue'
import PropsOption from '@/views/content/propsOption.vue'

export default defineComponent({
  components: { draggable, FieldWidget, PropsOption },
  setup() {
    const data = reactive({
      list: [],
      visible: false,
      index: 0
    })
    const showCode = () => {
      console.log(data.list)
    }

    const onClose = () => {
      data.visible = false
    }

    const showDrawer = (index) => {
      data.visible = true
      data.index = index
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
<template>
  <div class="flex items-center justify-items-between border border-dashed border-blue-300 pl-2 pr-2 pt-1 pb-1 mb-1"
       @dblclick="showDrawer">
    <span style="width: 120px; text-align: right; padding-right: 10px;">{{opt.fieldName}}</span>
    <a-input v-if="fieldType === 'Input'"
             :style="opt.style"
             :type="opt.type"
             :placeholder="opt.placeholder"
             :size="opt.size"
             :disabled="opt.disabled"
             :allowClear="opt.allowClear"
             v-model:value="modelStr" />
    <a-input-number v-if="fieldType === 'Number'"
                    :placeholder="opt.placeholder"
                    :size="opt.size"
                    :disabled="opt.disabled"
                    :allowClear="opt.allowClear"
                    :style="opt.style"
                    v-model:value="modelStr" />
    <a-select v-if="fieldType === 'Select'"
              v-model:value="modelStr"
              :placeholder="opt.placeholder"
              :size="opt.size"
              :disabled="opt.disabled"
              :allowClear="opt.allowClear"
              label-in-value
              :style="opt.style"
              :options="opt.options">
    </a-select>
    <a-radio-group v-if="fieldType === 'Radio'"
                   v-model:value="modelStr"
                   :size="opt.size"
                   :disabled="opt.disabled"
                   :buttonStyle="opt.buttonStyle"
                   :options="opt.options"
                   :name="opt.name" />
    <a-checkbox-group v-if="fieldType === 'Check'"
                      v-model:value="modelStr"
                      :size="opt.size"
                      :disabled="opt.disabled"
                      :name="opt.name"
                      :options="opt.options" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    opt: Object,
    fieldType: String,
    index: Number,
    modelStr: String
  },
  emits: ['showDrawer'],
  setup(props, { emit }) {
    const showDrawer = () => {
      emit('showDrawer', props.index)
    }
    return {
      showDrawer
    }
  }
})
</script>

<style scoped>
</style>

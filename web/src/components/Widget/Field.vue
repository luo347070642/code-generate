<template>
  <div class="flex items-center justify-items-between border border-dashed border-blue-300 pl-2 pr-2 pt-1 pb-1 mb-1"
       @dblclick="showDrawer">
    <span style="width: 120px; text-align: right; padding-right: 10px;">{{opt.fieldName}}</span>
    <a-input v-if="fieldType === 'Input'"
             v-model:value="fieldModel"
             :style="opt.style"
             :type="opt.type"
             :placeholder="opt.placeholder"
             :size="opt.size"
             :disabled="opt.disabled"
             :allowClear="opt.allowClear" />
    <a-input-number v-if="fieldType === 'Number'"
                    v-model:value="fieldModel"
                    :placeholder="opt.placeholder"
                    :size="opt.size"
                    :disabled="opt.disabled"
                    :allowClear="opt.allowClear"
                    :style="opt.style" />
    <a-select v-if="fieldType === 'Select'"
              v-model:value="fieldModel"
              :placeholder="opt.placeholder"
              :size="opt.size"
              :disabled="opt.disabled"
              :allowClear="opt.allowClear"
              label-in-value
              :style="opt.style"
              :options="opt.options"></a-select>
    <a-radio-group v-if="fieldType === 'Radio'"
                   v-model:value="fieldModel"
                   :size="opt.size"
                   :disabled="opt.disabled"
                   :buttonStyle="opt.buttonStyle"
                   :options="opt.options"
                   :name="opt.name" />
    <a-checkbox-group v-if="fieldType === 'Check'"
                      v-model:value="fieldModel"
                      :size="opt.size"
                      :disabled="opt.disabled"
                      :name="opt.name"
                      :options="opt.options" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { randomString } from '@/utils/index.js'

export default defineComponent({
  props: {
    opt: Object,
    fieldType: String,
    index: Number,
    keyName: String
  },
  setup(props) {
    const store = useStore()
    const fieldModel = ref('')
    watchEffect(()=>{
      fieldModel.value = props.opt.defaultValue
    })
    const showDrawer = () => {
      store.commit('common/setDrawerVisible', false)
      setTimeout(()=>{
        store.commit('common/setDrawerVisible', true)
        store.commit('common/setDragIndex', props.index)
        store.commit('common/setDragKey', props.keyName)
        console.log('keyName', props.keyName)
      }, 200)
    }
    return {
      showDrawer,
      fieldModel
    }
  }
})
</script>

<style scoped>
</style>

<template>
  <div class="h-12 bg-blue-50 flex items-center justify-between">
    <div class="w-16"></div>
    <div class="flex justify-items-end">
      <a-button @click="showCode()">查看代码</a-button>
    </div>
  </div>
  <!-- <NestedDrag :list="data.list"
              @showDrawer="showDrawer" /> -->
  <NestedDrag :list="dragList"/>

  <a-drawer v-if="data.visible"
            title="属性配置"
            placement="right"
            :mask="false"
            :visible="data.visible"
            :get-container="false"
            :width="370"
            :wrap-style="{ position: 'absolute' }"
            @close="onClose">
    <PropsOption v-if="data.visible"
                 :options="{...data.list.find(item => item.key === data.key).options}" @changeOption="changeOption"/>
  </a-drawer>
</template>

<script>
import { defineComponent, reactive, watch, computed } from 'vue'
import NestedDrag from '@/components/DragGable/NestedDrag.vue'
import PropsOption from '@/views/content/propsOption.vue'
import { useStore } from 'vuex'
import { randomString } from '@/utils'

export default defineComponent({
  components: { PropsOption, NestedDrag },
  setup () {
    const store = useStore()
    const data = reactive({
      visible: store.state.common.visible,
      key: store.state.common.key,
      list: []
    })
    watch(() => store.state.common.visible, (visible, prevVisible) => {
      data.visible = visible
    })
    watch(() => store.state.common.dragKey, (key, prevKey) => {
      data.key = key
    })
    watch(() => store.state.common.dragList, (dragList, prevDragList) => {
      data.list = [...dragList]
    })
    const dragList = computed(() => data.list.map(item => {
      return { ...item, key: item.key ? item.tempType + '_' + randomString(8) : item.key }
    }))
    //     watch(() => [...data.list], (list, prevList) => {
    //   const tempList = list.map(item => {
    //     return { ...item, key:  item.key ? item.tempType + '_' + randomString(8) : item.key }
    //   })
    //   data.list = [...tempList]
    //   store.commit('common/setGragList', tempList)
    // })
    const changeOption = (opts) => {
      store.commit('common/setGragListByKey', {
        key: data.key,
        item: opts
      })
      console.log('setGragListByKey', store.state.common.dragList)
    }
    const showCode = () => {
      console.log(store.state.common.dragList)
    }

    const onClose = () => {
      store.commit('common/setDrawerVisible', false)
    }

    return {
      data,
      dragList,
      showCode,
      onClose,
      changeOption
    }
  }
})
</script>

<style>
</style>

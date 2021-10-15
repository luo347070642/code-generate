<template>

  <a-tabs defaultActiveKey="1">
    <a-tab-pane key="1"
                tab="组件">
      <a-collapse activeKey="2"
                  accordion>
        <a-collapse-panel v-for="item in temMenu"
                          :key="item.id"
                          :header="item.title">
          <draggable class="flex flex-wrap items-start justify-between justify-items-auto"
                     :list="item.children"
                     :sort="false"
                     :group="{ name: 'people', pull: 'clone', put: false }"
                     item-key="name">
            <template #item="{ element }">
              <div class="w-4.8/10 text-center border rounded border-gray-400 mt-1"
                   style="cursor: pointer;"
                   v-html="element.name">
              </div>
            </template>
          </draggable>
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import draggable from 'vuedraggable'
import temMenu from '@/config/menuConfig'

export default defineComponent({
  components: { draggable },
  setup() {
    return { temMenu }
  }
})
</script>

<style scoped lang="scss">
</style>
<template>

  <a-tabs defaultActiveKey="1">
    <a-tab-pane key="1"
                tab="组件">
      <a-collapse v-model:activeKey="menuCollapse"
                  accordion>
        <a-collapse-panel v-for="item in menuList"
                          :key="item.id"
                          :header="item.title">
          <div :id="item.id" :title="item.title">
            <draggable class="flex flex-wrap items-start justify-between justify-items-auto"
                       :list="item.children"
                       :sort="false"
                       @start="onStart"
                       :group="{ name: 'people', pull: 'clone', put: false }"
                       item-key="name">
              <template #item="{ element }">
                <div class="w-4.8/10 text-center border rounded border-gray-400 mt-1"
                     style="cursor: pointer;"
                     v-html="element.name">
                </div>
              </template>
            </draggable>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, ref } from 'vue'
import draggable from 'vuedraggable'
import temMenu from '@/config/menuConfig'
import { randomString } from '@/utils'

export default defineComponent({
  components: { draggable },
  setup () {
    const menuCollapse = ref(2)
    const menuList = ref([...temMenu])
    const onStart = (e) => {
      const index = e.newIndex ?? e.oldIndex
      let menuid = parseInt(e.target.parentElement.id)
      let tempList = [...temMenu]
      tempList = tempList.map(item => {
        if (parseInt(item.id) === menuid) {
          const randomStr = item.children[index].tempType + '_' + randomString(8)
          item.children[index].options.key = randomStr
          item.children[index].options.value = randomStr
        }
        return item
      })
      menuList.value = [...tempList]
    }
    return { menuList, menuCollapse, onStart }
  }
})
</script>

<style scoped lang="scss">
</style>

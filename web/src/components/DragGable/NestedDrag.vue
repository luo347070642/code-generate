<template>
  <draggable class="h-9/10 bg-white m-2 p-2 rounded border border-dashed border-blue-400"
             :list="list"
             group="people"
             item-key="name">
    <template #item="{element, index}">
      <div :key="element.name">{{element.key}}
        <FieldWidget :fieldType="element.tempType"
                     :index="index"
                     :keyName="element.key"
                     :opt="element.options" />
        <nested-drag v-if="element.list"
                     :tasks="element.list" />
      </div>
    </template>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
import FieldWidget from '@/components/Widget/Field.vue'
import { randomString } from '@/utils/index.js'
export default {
  props: {
    list: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable,
    FieldWidget
  },
  name: 'nested-drag',
  emits: ['showDrawer'],
  setup(props, { emit }) {
    return {
      randomString
    }
  }
}
</script>
<style scoped>
</style>

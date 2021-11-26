<template>
  <div :class="[mask ? 'containerDrop' : '']"
       :draggable="list.length <= 1 && draggable"
       :name="name"
       @dragenter.prevent="() => { mask = true }"
       @dragleave.prevent="() => { mask = false }"
       @dragover.prevent="()=>{}"
       @dragstart.prevent="dragstart"
       @drop.prevent="drop">
    <template v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="`${name}-${index}`" :draggable="item.draggable || true"
           @dragstart.stop="dragstart(index)">
        <slot :item="item" :index="index"></slot>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'drag',
  props: {
    list: Array,
    name: String,
    draggable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['add', 'start'],
  setup (props, { emit }) {
    const store = useStore()
    let mask = ref(false)
    const { name, list } = props
    onMounted(() => {
      store.commit('drag/setData', { name, list })
    })
    const dragstart = (index) => {
      store.commit('drag/setCurrentInfo', { name, index })
      emit('start', index)
    }
    const drop = (e) => {
      mask.value = false
      console.log('state', store.state.drag)
      if (props.name !== store.state.drag.currentDragName) {
        emit('add', e)
      } else {
        const list = [...store.state.drag.data[name]]
      }
    }
    return {
      mask,
      dragstart,
      drop,
    }
  }
})
</script>

<style scoped>
.containerDrop {
  background: #eeeeee;
}
</style>

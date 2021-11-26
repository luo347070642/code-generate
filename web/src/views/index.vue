<template>
    <a-layout class="h-screen">
      <a-layout-sider width="240"
                      theme="light">
        <Menu />
      </a-layout-sider>
      <a-layout-content>
        <Content />
      </a-layout-content>
    </a-layout>
<!--  <div class="page">-->
<!--    <div class="left">-->
<!--      <Drag :draggable="true" :list="list" @start="start" name="source">-->
<!--        <template #default="{item, index}">-->
<!--          <div>-->
<!--            <div class="w-4.8/10 text-center border rounded border-gray-400 mt-1"-->
<!--                 style="cursor: pointer;">{{item.name}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </template>-->
<!--      </Drag>-->
<!--    </div>-->
<!--    <div class="right">-->
<!--      <Drag :draggable="true" :list="list2" style="height:100px;" @add="drop" name="target">-->
<!--        <template #default="{item, index}">-->
<!--          <div class="w-4.8/10 text-center border rounded border-gray-400 mt-1"-->
<!--               style="cursor: pointer;">{{item.name}}-->
<!--          </div>-->
<!--        </template>-->
<!--      </Drag>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import Menu from '@/views/menu/index.vue'
import Content from '@/views/content/index.vue'
import Drag from '@/components/Drag/index.vue'

export default defineComponent({
  components: { Menu, Content, Drag },
  setup () {
    const list = reactive([
      { title: 'label', name: 'label', draggable: true, children: [] },
      { title: 'input', name: 'input', draggable: true, children: [] },
      { title: 'check', name: 'check', draggable: true, children: [] },
      { title: 'select', name: 'select', draggable: true, children: [] }
    ])
    const list2 = reactive([])
    let item = ref(1)
    const start = (i) => {
      item.value = list[i]
      console.log(list, i, list[i])
    }
    const drop = (e) => {
      console.log('drop', e.dataTransfer)
      list2.push(item.value)
      console.log(list2)
    }
    return {
      start,
      drop,
      list,
      list2
    }
  }
})
</script>

<style scoped>
.page {
  width: 1000px;
  margin: 0px auto;
}

.left {
  width: 500px;
  float: left;
}

.left .container {
  padding: 10px;
  min-height: 500px;
  box-sizing: border-box;
}

.left .containerDrop {
  background: #eeeeee;
}

.left .container h1 {
  text-align: center;
}

.right {
  width: 500px;
  float: left;
  box-sizing: border-box;
  border-left: 1px solid red;
}

.right .ctrlList {
  padding: 10px;
}

.right .ctrlList .box {
  border: 1px dashed gray;
  margin-top: 10px;
  margin-bottom: 10px;
}

.line {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
}
</style>

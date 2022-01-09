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
</template>

<script>
import { defineComponent } from 'vue'
import Menu from '@/views/menu/index.vue'
import Content from '@/views/content/index.vue'

export default defineComponent({
  components: { Menu, Content }
})
</script>

<style scoped>
</style>

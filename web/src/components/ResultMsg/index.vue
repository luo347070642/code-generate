<template>
  <a-result :status="route.name"
            :title="route.name"
            :sub-title="route.meta.subTitle">
    <template #extra>
      <a-button type="primary"
                @click="goHome">返回首页</a-button>
    </template>
  </a-result>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log('route', route)
    const goHome = () => {
      router.push({ name: 'index' })
    }
    return {
      route,
      goHome
    }
  }
})
</script>

<style>
</style>
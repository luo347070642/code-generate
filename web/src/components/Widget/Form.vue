<template>
  <a-input v-model:value="widget.value" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    widget: Object
  }
})
</script>

<style>
</style>
const vue2 = {}
const vue3 = {
  Input(opt) {
    return `<a-input v-model:value="${opt.value}"
             :defaultValue="${opt.defaultValue}"
             :style="${opt.style}"
             :type="${opt.type}"
             :placeholder="${opt.placeholder}"
             :size="${opt.size}"
             :disabled="${opt.disabled}"
             :allowClear="${opt.allowClear}" />`
  },
  Number(opt) {
    return `<a-input-number v-model:value="${opt.value}"
                    :defaultValue="${opt.defaultValue}"
                    :placeholder="${opt.placeholder}"
                    :size="${opt.size}"
                    :disabled="${opt.disabled}"
                    :allowClear="${opt.allowClear}"
                    :style="${opt.style}" />`
  },
  Check(opt) {
    return `<a-checkbox-group v-model:value="${opt.value}"
                      :size="${opt.size}"
                      :disabled="${opt.disabled}"
                      :name="${opt.name}"
                      :options="${opt.options}" />`
  },
  Radio(opt) {
    return `<a-radio-group v-model:value="${opt.value}"
              :defaultValue="${opt.defaultValue}"
                   :size="${opt.size}"
                   :disabled="${opt.disabled}"
                   :buttonStyle="${opt.buttonStyle}"
                   :options="${opt.options}"
                   :name="${opt.name}" />`
  },
  Select(opt) {
    return `<a-select v-model:value="${opt.value}"
              :placeholder="${opt.placeholder}"
              :size="${opt.size}"
              :disabled="${opt.disabled}"
              :allowClear="${opt.allowClear}"
              label-in-value
              :style="${opt.style}"
              :options="${opt.options}"></a-select>`
  }
}
const html = {}
const react = {}

export default {
  vue3
}

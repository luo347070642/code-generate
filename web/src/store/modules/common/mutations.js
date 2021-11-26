import { randomString } from '@/utils'

export const mutations = {
  setGragList (state, list) {
    state.dragList = [...list]
  },
  setGragListByKey (state, opt) {
    const tempList = []
    state.dragList.forEach(item => {
      if (item.key === opt.key) {
        tempList.push(opt.item)
      } else {
        tempList.push(item)
      }
    })
    state.dragList = [...tempList]
  },
  setDragIndex (state, index) {
    state.index = index
  },
  setDragKey (state, dragKey) {
    state.dragKey = dragKey
  },
  setDrawerVisible (state, visible) {
    state.visible = visible
  }
}

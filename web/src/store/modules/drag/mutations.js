export const mutations = {
  setData (state, data) {
    state.data[data.name] = [...data.list]
  },
  setCurrentInfo (state, info) {
    state.currentIndex = info.index
    state.currentDragName = info.name
  }
}

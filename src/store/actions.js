const SELECT_ITEM = 'select nav item'

export const selectItem = item => {
  return {
    type: SELECT_ITEM,
    item
  }
}
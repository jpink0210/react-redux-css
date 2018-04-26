// @flow

import { FETCH_LOAD_ITEMS } from '../constants/actionTypes'

const addItem = (store: any) => (next: any) => (action: Object) => {

  if (action.type !== FETCH_LOAD_ITEMS) return next(action)

  // 這是獲取伺服器上的資料的fetch語法，
  // 注意最後會執行action.cb(json, store.dispatch)
  // 也就是onFecthData中的cb屬性
  fetch('http://localhost:8010/LL822R8R', {
  method: 'GET'
  })
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .catch((error) => { throw new Error(error.message) })
}

export default addItem

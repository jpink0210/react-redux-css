// @flow

import { FETCH_LOAD_ITEMS } from '../constants/actionTypes'

let url = "https://enigmatic-spire-33335.herokuapp.com/"

const fetchItems = (store: any) => (next: any) => (action: Object) => {
  if (action.type !== FETCH_LOAD_ITEMS) return next(action)
  fetch(url + 'LL822R8R', {
    method: 'GET'
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .then( playerData => {
    return action.cb(playerData, store.dispatch)
  })
  .catch((error) => { return false })
}

export default fetchItems

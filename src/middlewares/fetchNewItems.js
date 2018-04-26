// @flow

import { FETCH_LOAD_NEW_ITEMS } from '../constants/actionTypes'

let url = "https://enigmatic-spire-33335.herokuapp.com/"

const fetchNewItems = (store: any) => (next: any) => (action: Object) => {
  if (action.type !== FETCH_LOAD_NEW_ITEMS) return next(action)
  const { robotId } = action.payload
  console.log(robotId);
  fetch(url + robotId, {
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

export default fetchNewItems

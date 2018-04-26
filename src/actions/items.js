import {
  ADD_ITEM,
  FETCH_LOAD_ITEMS,
  INIT_ITEMS,
  FETCH_LOAD_PLAYERS,
  INIT_PLAYERS,
  FETCH_LOAD_NEW_ITEMS
} from '../constants/actionTypes'

export const onFecthLoadNewItems = (robotId) => (
  {
    type: FETCH_LOAD_NEW_ITEMS,
    payload: robotId,
    cb: (response, dispatch) => dispatch(onInitData(response)),
  }
)

export const onFecthLoadPlayers = () => (
  {
    type: FETCH_LOAD_PLAYERS,
    cb: (response, dispatch) => dispatch(onInitPlayers(response))
  }
)

export const onInitPlayers = (players: Array<Object>) => (
  {
    type: INIT_PLAYERS,
    payload: players
  }
)

export const onFecthLoadItems = () => (
  {
    type: FETCH_LOAD_ITEMS,
    cb: (response, dispatch) => dispatch(onInitData(response)),
  }
)

export const onInitData = (items: Array<Object>) => (
  {
    type: INIT_ITEMS,
    payload: items
  }
)
import { INIT_PLAYERS } from '../constants/actionTypes'


export default function players(state = [], action){
  switch (action.type) {
    case INIT_PLAYERS:
      {
        return action.payload
      }
    default:
      return state
  }

}
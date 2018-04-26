import { ADD_ITEM } from '../constants/actionTypes'

export default function items(state, action){

  switch (action.type) {
    case ADD_ITEM:
      {
        return [action.payload, ...state]
      }
    default:
      return null  
  }

}
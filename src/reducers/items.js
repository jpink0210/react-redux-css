import { ADD_ITEM , INIT_ITEMS} from '../constants/actionTypes'


export default function items(state = [], action){
  switch (action.type) {
    case ADD_ITEM:
      return [action.payload, ...state]
    case INIT_ITEMS:
      {
        return action.payload
      }
    default:
      return state
  }

}
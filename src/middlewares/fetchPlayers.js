
import { FETCH_LOAD_PLAYERS } from '../constants/actionTypes'
const fetchPlayers = (store: any) => (next: any) => (action: Object) => {

  if (action.type !== FETCH_LOAD_PLAYERS) return next(action)

  let playerList = [
    {"id":"QCY2JG2U","name": "Kevin","level": "13"},
    {"id":"RR09VY0P","name": "JimYen","level": "12"},
    {"id":"908UPG8G","name": "巨人小強","level": "13"},
    {"id":"2QV0RY88","name": "jusing","level": "12"},
    {"id":"8VY9LY9R","name": "大樹六二七","level": "12"},
    {"id":"2G0CYUGLC","name": "凱杰是大笨蛋","level": "11"},
    {"id":"V8PGPJJV","name": "吃小配滷蛋","level": "12"},
    {"id":"L08LV9U","name": "轟蛋蛋","level": "12"},
    {"id":"22VGQCYP2","name": "kennysin","level": "11"},
    {"id":"LL822R8R","name": "陳世美","level": "12"},
    {"id":"9GP0J8YP","name": "虎視丹丹","level": "11"},
    {"id":"LQ800GQ9","name": "帥氣阿名","level": "12"},
    {"id":"2PLG0YP0C","name": "Ivan","level": "11"},
    {"id":"2Q2QGJYV9","name": "ttyye","level": "11"},
    {"id":"Y808RUPP","name": "獅子","level": "11"},
    {"id":"2Y0GY2QY2","name": "強行進入","level": "11"},
    {"id":"9GVQ2V2Q","name": "GG","level": "12"}
  ];
  return action.cb(playerList, store.dispatch)

}

export default fetchPlayers

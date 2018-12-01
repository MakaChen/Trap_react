import * as ActionTypes from '../const/ActionTypes';

export function fetchuser(mid) {
  
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_USER,
      endpoint: '/getUserInfo',
      params:{
        mid
      }
    }
  }
}
export function fetchres(mid) {
  
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_RES,
      endpoint: '/getUserInfo',
      params:{
        mid
      }
    }
  }
}
export function fetchroom(mid) {
  
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_ROOM,
      endpoint: '/getUserInfo',
      params:{
        mid
      }
    }
  }
}
export const acSetChatMessages = data => ({
  type: ActionTypes.SET_CHAT_MESSAGES,
  data,
})
export function add_fuceng(isActive){
  return {
    type:ActionTypes.ADD_FUCENG,
    isActive
  }
}
export function add_fucengoff(isActive){
  return {
    type:ActionTypes.ADD_FUCENGOFF,
    isActive
  }
}
export function add_content(content){
  return {
    type:ActionTypes.ADD_CONTENT,
    content
  }
}

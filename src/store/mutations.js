import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHANGE_COUNTER,
  SET_TO_CART,
  DELETE_BY_INDEX
} from './mutation-types'

export default  {
  //mutation的唯一目的是修改state状态，尽可能每个事件只做一件事
  [ADD_COUNTER](state, payload) {
    payload.count ++;
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload);
  },
  [CHANGE_COUNTER](state, { oldProduct, num }) { 
    oldProduct.count = num;
  },
  [SET_TO_CART](state, payload) {
    state.cartList = payload;
  },
  [DELETE_BY_INDEX](state, payload) {
    state.cartList.splice(payload.index, 1);
  }
}
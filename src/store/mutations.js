import {
  ADD_COUNTER,
  ADD_TO_CART
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
  }
}
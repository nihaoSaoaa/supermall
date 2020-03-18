import {
  ADD_COUNTER,
  ADD_TO_CART,
  DELETE_COUNTER,
  CHANGE_COUNTER,
  REMOVE_ONE
} from './mutation-types'

export default {
  addCart({state, commit}, payload) {
    return new Promise((resolve) => {
      const oldProduct = state.cartList.find(product => product.iid === payload.iid);
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct);
        resolve('已成功加入购物车');
      } else {
        commit(ADD_TO_CART, payload);
        resolve('当前的商品数量+1');
      }
    })
  },
  changeCount({ state, commit }, { goods, num }) {
    return new Promise((resolve) => {
      const oldProduct = state.cartList.find(product => product.iid === goods.iid);
      commit(CHANGE_COUNTER, { oldProduct, num });
      resolve(true)
    })
  }
}


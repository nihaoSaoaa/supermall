import {
  ADD_COUNTER,
  ADD_TO_CART,
  SET_TO_CART,
  CHANGE_COUNTER,
  DELETE_BY_INDEX
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
  },
  setCart({ state, commit }, payload) {
    return new Promise((resolve) => {
      commit(SET_TO_CART, payload);
      resolve(true)
    })
  },
  deleteByIid({state, commit}, { goods }) {
    return new Promise((resolve) => {
      const index = state.cartList.findIndex(product => product.iid === goods.iid);
      commit(DELETE_BY_INDEX, { index });
      resolve(true)
    })
  }
}


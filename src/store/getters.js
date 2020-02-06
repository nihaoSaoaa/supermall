// export default  {
//   cartLength: state => state.cartList.length,
//   cartList: state => state.cartList
// }

export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  cartAllIsChecked(state) {
    return (state.cartList.length) ?  state.cartList.every(({checked}) => checked):false;
  }
}
<template>
  <div>
    <img src="~assets/img/cart/tick.svg" alt="" :class="{active:isChecked}">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>
img {
  border-radius: 50%;
  border: 1px solid #ccc;
}
.active {
  background-color: var(--color-tint);
}
</style>
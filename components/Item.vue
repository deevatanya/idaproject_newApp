<template>
  <div class="item">
    <div class="item_delete" @click="onDelete($props.index)">
      <img src="/delete.png" alt="delete">
    </div>
    <div class="item_img">
      <img :src="`${this.$props.product.photo}`" alt="product">
    </div>
    <div class="item_text">
      <div class="item_name">{{ this.$props.product.name }}</div>
      <div class="item_info">{{ this.$props.product.info }}</div>
      <div class="item_price">{{ this.$props.product.price }} руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object },
    index: { type: Number },
  },
  methods: {
    onDelete(i) {
      this.$emit('onDelete', i);
    },
  },

}
</script>

<style lang="sass" scoped>
.item
  margin-left: 16px
  margin-bottom: 16px
  width: 332px
  height: 423px
  background: #FFFEFB
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  right: 0
  cursor: pointer
  display: flex
  flex-direction: column
  justify-content: space-between
  position: relative
  transition: 1s all
  &:hover > .item_delete
    display: flex
  &_img
    height: 200px
    img
      width: 100%
      height: 100%
      object-fit: cover
      border-radius: 4px 4px 0px 0px
  &_text
    height: 223px
    padding: 16px
  &_name
    font-weight: 600
    font-size: 20px
    color: #3F3F3F
  &_info
    margin-top: 16px
    font-weight: 400
    font-size: 16px
    line-height: 20px
    color: #3F3F3F
    width: 300px
    height: 80px
    word-wrap: break-word
  &_price
    margin-top: 32px
    font-weight: 600
    font-size: 24px
    color: #3F3F3F
  &_delete
    position: absolute
    width: 32px
    height: 32px
    right: -20px
    top: -10px
    background: #FF8484
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
    border-radius: 10px
    display: none
    justify-content: center
    align-items: center
    &:hover
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)
      outline-offset: 15px
      outline-color: rgba(255, 255, 255, 0)
      text-shadow: 1px 1px 2px #427388
      width: 38px
      height: 38px
</style>

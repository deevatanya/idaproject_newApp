<template>
  <div class="sort">
    <div class="sort_value">
      <div class="sort_value_text" ref="sortTitle">По умолчанию</div>
      <img src="/sort.png" alt="sort">
    </div>
    <div class="sort_option">
      <div
        class="sort_option_value"
        @click="onSort(index, $event)"
        v-for="(category, index) in categories"
        :key="index"
        ref="sortOptions"
        :class="{ 'active': category === 'По умолчанию' }"
        >
          {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      categories: ['По цене min', 'По цене max', 'По наименованию', 'По умолчанию'],
    };
  },
  methods: {
    onSort(i, { target }) {
      this.$emit('onSort', i);
      this.$refs.sortTitle.textContent = target.innerHTML;

      this.$refs['sortOptions'].forEach(el => el.classList.remove('active'));
      target.classList.add('active');
    },
  },
}
</script>

<style lang="sass" scoped>
.sort
  display: flex
  flex-direction: column
  align-items: center
  cursor: pointer
  &_value
    width: 122px
    height: 36px
    background: #FFFEFB
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
    border-radius: 4px
    display: flex
    justify-content: center
    align-items: center
    &_text
      font-size: 12px
      font-weight: 400
      color: #B4B4B4
  img
    margin-left: 5px
  &_option
    display: none
    position: absolute
    z-index: 1
    width: 176px
    height: 110px
    margin-top: 30px
    background: #FFFEFB
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
    border-radius: 4px
    &_value
      margin-top: 5px
      font-size: 12px
      font-weight: 400
      color: #B4B4B4
      height: 22px
      text-align: center
      &:hover
        background: #F8F8F8
        color: #1F1F1F
  &:hover > .sort_option
    display: block
  .active
    color: black
    background: #F8F8F8
</style>

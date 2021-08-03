<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="header_title" @click="formVue">Добавление товара</div>
        <div class="header_sort">
          <Sort @onSort="sortProducts"/>
        </div>
      </div>
      <Form :products="products" :class="{'formVisible': formVisible}"/>
      <div class="item_list">
        <Item v-for="(product, index) in products" :key="index" :product="product" :index="index" @onDelete="deleteProduct"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      products: [],
      storeProducts: [],
      formVisible: false,
    };
  },
  methods: {
    deleteProduct(i) {
      this.$store.commit('deleteProduct', i);
      this.products.splice(i, 1);
    },
    sortProducts(value) {
      if (value === 0) {
        this.products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      };
      if (value === 1) {
        this.products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      };
      if (value === 2) {
        this.products.sort(function(a, b) {
          let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB)
            return -1;
          if (nameA > nameB)
            return 1;
          return 0;
        });
      };
      if (value === 3) {
        this.products = JSON.parse(JSON.stringify(this.storeProducts));
      };
    },
    formVue() {
      this.formVisible = !this.formVisible;
    },
  },
  mounted() {
    this.$store.commit('getStorage');
    this.storeProducts = this.$store.state.productList;
    this.products = JSON.parse(JSON.stringify(this.storeProducts));
  },
}
</script>

<style lang="sass" scoped>
.container
  width: 100%
  padding: 0 32px
  .item_list
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    margin-left: 332px
.header
  width: 100%
  padding-top: 32px
  margin-bottom: 16px
  display: flex
  justify-content: space-between
  &_title
    font-weight: 600
    font-size: 28px
    color: #3F3F3F

@media (max-width: 991px)
  .container
    .item_list
      margin-left: 0px
    .header_title
      cursor: pointer
      background: #EEEEEE
      border-radius: 10px
      padding: 10px
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
      color: #B4B4B4
</style>

<template>
<form @submit.prevent="onSubmit()" ref="form">

  <div>
    <div class="label">
      Наименование товара
      <div class="valid"></div>
    </div>
    <input class="input_name" type="text" @blur="invalidName = true" :class="{'invalidInput': invalidName && !this.name}" v-model="name" placeholder="Введите наименование товара">
    <p  :class="{'invalid': invalidName && !this.name}">Поле является обязательным</p>
  </div>

  <div class="label">Описание товара</div>
  <textarea class="input_info" v-model="info" placeholder="Введите описание товара"/>

  <div>
    <div class="label">
      Ссылка на изображение товара
      <div class="valid"></div>
    </div>
    <input class="input_link" type="text" @blur="invalidPhoto = true" :class="{'invalidInput': invalidPhoto && !this.photo}" v-model="photo" placeholder="Введите ссылку">
    <p  :class="{'invalid': invalidPhoto && !this.photo}">Поле является обязательным</p>
  </div>

  <div>
    <div class="label">
      Цена товара
      <div class="valid"></div>
    </div>
    <input class="input_price" @blur="invalidPrice = true" :class="{'invalidInput': invalidPrice && !this.price}" v-model="price" placeholder="Введите цену" ref="priceP">
    <p  :class="{'invalid': invalidPrice && !this.price}">Поле является обязательным</p>
  </div>

  <button type="submit" :disabled='!isComplete' :class="{'active': isComplete}">Добавить товар</button>
</form>
</template>


<script>
import MaskedInput from 'vue-text-mask';
export default {
  components: {
    MaskedInput,
  },
  data: function () {
    return {
      name: null,
      info: null,
      photo: null,
      price: null,
      invalidName: false,
      invalidPhoto: false,
      invalidPrice: false,
    };
  },
  props: {
    products: { type: Array }
  },
  methods: {
    onSubmit() {
      let newProduct = {
        name: this.name,
        info: this.info,
        photo: this.photo,
        price: this.price,
      }
      this.$store.commit('addProduct', newProduct);
      this.$props.products.unshift(newProduct)
      this.$refs.form.reset();
    },
  },
  computed: {
    isComplete () {
      return this.name && this.photo && this.price;
    },
  },
   watch: {
    price: function(value) {
      let caretPosition = this.$refs.priceP.selectionStart;
      const lastAmountOfSpaces = (value.match(/\s+/g) || []).length;

      const valueFormatted = value
        .replace(/[^\d]/g, "")
        .split("")
        .reverse()
        .map((digit, index) => ((index + 1) % 3 === 0 ? ` ${digit}` : digit))
        .reverse()
        .join("")
        .trim();

      this.price = valueFormatted;

      if (valueFormatted === value) {
        return;
      }
      const newAmountOfSpaces = (valueFormatted.match(/\s+/g) || []).length;
      caretPosition += newAmountOfSpaces - lastAmountOfSpaces;
      this.$nextTick(function() {
        this.$refs.priceP.setSelectionRange(caretPosition, caretPosition);
      });
    }
  }
}
</script>

<style lang="sass" scoped>
form
  display: block-inline
  position: fixed
  padding: 12px 24px
  width: 332px
  min-height: 440px
  background: #FFFEFB
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  .label
    width: 95
    height: 13px
    font-weight: 400
    font-size: 10px
    letter-spacing: -0.02em
    color: #49485E
    position: relative
    margin-top: 12px
    .valid
      display: inline-block
      border-radius: 100%
      width: 4px
      height: 4px
      position: absolute
      top: 0
      background: #FF8484
  input
    margin: 4px 0
    width: 100%
    height: 36px
    background: #FFFEFB
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
    border: none
    outline: none
    border-radius: 4px
    padding-left: 16px
    font-size: 12px
    font-weight: 400
    color: #3F3F3F
  input::placeholder
    font-size: 12px
    font-weight: 400px
    color: #B4B4B4
  textarea
    display: block
    margin-top: 4px
    margin-bottom: 16px
    width: 100%
    height: 108px
    background: #FFFEFB
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
    border: none
    outline: none
    border-radius: 4px
    padding: 10px 16px
    font-size: 12px
    font-weight: 400
    color: #3F3F3F
    resize: none
  textarea::placeholder
    font-size: 12px
    font-weight: 400px
    color: #B4B4B4
  button
    margin: 20px 0 12px 0
    width: 100%
    height: 36px
    background: #EEEEEE
    border: none
    border-radius: 10px
    font-weight: 600
    font-size: 12px
    color: #B4B4B4
  .active
    background: #7BAE73
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
    color: #FFFFFF
    cursor: pointer
    &:hover
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)
      outline-offset: 15px
      outline-color: rgba(255, 255, 255, 0)
      text-shadow: 1px 1px 2px #427388
  .invalidInput
    border: 1px solid #FF8484
    position: relative
  p
    display: none
  .invalid
    display: block
    position: absolute
    letter-spacing: -0.02em
    color: #FF8484
    font-size: 8px
    font-weight: 400
    margin: 0

@media (max-width: 991px)
  form
    display: none
  .formVisible
    display: block
    position: relative
    left: 50%
    transform: translateX(-50%)
    margin-bottom: 20px

</style>

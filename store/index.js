export const state = () => ({
  productList: [
    {
      name: 'Хороший товар',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '8 000',
    },
    {
      name: 'Наименование товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '10 000',
    },
    {
      name: 'Другое наименование товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '9 000',
    },
    {
      name: 'Имя товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '7 000',
    },
    {
      name: 'Товарное имя',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '5 000',
    },
    {
      name: 'Вариация наименования товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '6 000',
    },
    {
      name: 'Наименование товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '4 000',
    },
    {
      name: 'Наименование товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '2 000',
    },
    {
      name: 'Наименование товара',
      info: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      photo: '/item_img.jpg',
      price: '3 000',
    },
  ],
})

export const mutations = {
  getStorage(state) {
    if(localStorage.getItem('historyProducts') !== null) {
      state.productList = JSON.parse(localStorage.getItem('historyProducts'));
    };
  },
  addProduct(state, product) {
    state.productList.unshift(product);
    localStorage.setItem('historyProducts', JSON.stringify(state.productList));
  },
  deleteProduct(state, i) {
    state.productList.splice(i, 1);
    localStorage.setItem('historyProducts', JSON.stringify(state.productList));
  }
}

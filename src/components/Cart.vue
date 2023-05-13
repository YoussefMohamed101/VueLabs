<template>
  <div>
    <div v-show="itemsInCard.productsInCart.length == 0">
      <h2 class="my-3">No books added to wishList</h2>
    </div>
    <div v-show="itemsInCard.productsInCart.length > 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total price</th>
            <!-- <th scope="col"></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in itemsInCard.productsInCart" :key="product.id">
            <td>{{ product.product.id }}</td>
            <td>{{ product.product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.product.price * product.quantity }}</td>
            <!-- <td>{{ formateCurrency(book.price) }}</td> -->
            <td>
              <div class="d-flex">
                <button
                  class="btn btn-danger"
                  :disabled="product.product.quantity == 0"
                  @click="increaseQuantity(product)"
                >
                  +
                </button>
                <button
                  class="btn btn-danger"
                  @click="decreaseQuantity(product)"
                >
                  -
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <h1>Cart</h1>
    <ul>
      <li v-for="product in cart" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="removeFromCart(product)">Remove from Cart</button>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { useCart } from "@/store/store";

export default {
  data: () => ({
    itemsInCard: useCart(),
  }),
  //   async created() {
  //     let data = await fetch("http://localhost:3000/products");
  //     this.Products = await data.json();
  //   },
  methods: {
    async decreaseProductQuantity(product) {
      product.quantity = product.quantity - 1;
      let newdata = { quantity: product.quantity };
      await fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newdata),
      });
    },
    async increaseProductQuantity(product) {
      product.quantity = product.quantity + 1;
      let newdata = { quantity: product.quantity };
      await fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newdata),
      });
    },
    increaseQuantity(product) {
      product.quantity++;
      this.decreaseProductQuantity(product.product);
    },
    decreaseQuantity(product) {
      product.quantity--;
      this.increaseProductQuantity(product.product);
      if (product.quantity == 0) {
        this.itemsInCard.productsInCart.splice(
          this.itemsInCard.productsInCart.indexOf(product),
          1
        );
      }
    },
  },
};
</script>

<style scoped></style>

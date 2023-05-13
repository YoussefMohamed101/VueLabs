<template>
  <div>
    <h1>Products</h1>

    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card mb-3">
          <img
            :src="`${product.image}`"
            class="card-img-top"
            alt="Book cover"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <!-- <p class="card-text">{{ book.author }}</p> -->
            <p class="card-text">{{ product.price }}</p>
            <!-- <p class="card-text">{{ formateCurrency(product.price) }}</p> -->
            <p class="card-text">
              <span> {{ product.quantity }} products left </span>
            </p>
            <!-- :disabled="book.alreadyAdded" -->
            <button
              class="btn btn-primary"
              :disabled="product.quantity == 0"
              @click="addToCart(product)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { useCart } from "@/store/store";

export default {
  data: () => ({
    products: [],
    itemInCard: useCart(),
  }),
  async created() {
    let data = await fetch("http://localhost:3000/products");
    this.products = await data.json();
  },
  methods: {
    addToCart(product) {
      if (
        this.itemInCard.productsInCart.some(
          (prod) => prod.product.id == product.id
        )
      ) {
        this.itemInCard.productsInCart.find(
          (prod) => prod.product.id == product.id
        ).quantity++;
      } else {
        this.itemInCard.productsInCart.push({ product: product, quantity: 1 });
      }
      this.updateProductQuantity(product);
      //   book.alreadyAdded = true;
    },

    async updateProductQuantity(product) {
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

    // checkcard(product) {
    //   return this.itemInCard.itemInCard.some(
    //     (Item) => Item.product.id == product.id
    //   );
    // },
    // async updatestock(product) {
    //   product.stock = product.stock - 1;
    //   let newdata = { stock: product.stock };
    //   await fetch(`http://localhost:3000/products/${product.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(newdata),
    //   });
    // },
    // Addbook(product) {
    //   if (this.checkcard(product)) {
    //     this.itemInCard.itemInCard.find((Item) => Item.product.id == product.id)
    //       .quantity++;
    //   } else {
    //     this.itemInCard.itemInCard.push({
    //       product: product,
    //       quantity: 1,
    //     });
    //   }
    //   this.updatestock(product);
    // },
  },
};
</script>

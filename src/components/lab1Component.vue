<template>
  <div id="mainapp">
    <div class="container p-5">
      <div class="row">
        <div
          class="col-sm-6 col-md-4 col-lg-3"
          v-for="book in books"
          :key="book.isbn"
        >
          <div class="card mb-3">
            <img
              :src="require(`../assets/${book.image}`)"
              class="card-img-top"
              alt="Book cover"
            />
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.author }}</p>
              <p class="card-text">{{ formateCurrency(book.price) }}</p>
              <p class="card-text">
                <span
                  :class="[
                    book.pages <= 300 ? 'less' : '',
                    book.pages > 300 ? 'more' : '',
                  ]"
                >
                  {{ book.pages }} pages
                </span>
              </p>
              <button
                class="btn btn-primary"
                :disabled="book.alreadyAdded"
                @click="addToWishlist(book)"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-secondary" @click="showWishlist = !showWishlist">
        {{ showWishlist ? "Hide" : "Show" }} wishlist
      </button>
      <div v-if="showWishlist">
        <div v-if="wishlist.length == 0">
          <h2 class="my-3">No books added to wishList</h2>
        </div>
        <div v-else>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ISBN</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in wishlist" :key="book.ISBN">
                <td>{{ book.isbn }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ formateCurrency(book.price) }}</td>
                <td>
                  <button
                    class="btn btn-danger"
                    @click="removeFromWishlist(book)"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    books: [
      {
        isbn: "9780143127550",
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        category: "Fiction",
        image: "book1.jpg",
        pages: 311,
        price: 12.99,
        alreadyAdded: false,
      },
      {
        isbn: "9780735224315",
        title: "Exit West",
        author: "Mohsin Hamid",
        category: "Fiction",
        image: "book2.jpg",
        pages: 240,
        price: 14.99,
        alreadyAdded: false,
      },
      {
        isbn: "9780062459367",
        title: "The Sun and Her Flowers",
        author: "Rupi Kaur",
        category: "Poetry",
        image: "book3.jpg",
        pages: 256,
        price: 9.99,
        alreadyAdded: false,
      },
      {
        isbn: "9780062316110",
        title: "The Nightingale",
        author: "Kristin Hannah",
        category: "Historical Fiction",
        image: "book4.jpg",
        pages: 440,
        price: 16.99,
        alreadyAdded: false,
      },
    ],

    wishlist: [],
    showWishlist: false,
  }),
  methods: {
    addToWishlist(book) {
      console.log(this.wishlist);
      this.wishlist.push(book);
      book.alreadyAdded = true;
    },
    removeFromWishlist(book) {
      this.wishlist.splice(this.wishlist.indexOf(book), 1);
      book.alreadyAdded = false;
    },
    formateCurrency(value) {
      let formatter = Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style></style>

import { defineStore } from "pinia";

export const useCart = defineStore("useCart", {
  state: () => ({
    productsInCart: [],
  }),
});

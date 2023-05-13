import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Products from "../components/Products.vue";
import Cart from "../components/Cart.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: Products,
  },
  ,
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;

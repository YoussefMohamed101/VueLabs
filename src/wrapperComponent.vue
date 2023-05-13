<template>
  <div class="container my-2">
    <div class="row">
      <div class="col-12 bg-warning">
        <headerComponent></headerComponent>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-4">
        <linksComponent></linksComponent>
      </div>
      <div class="col-8">
        <bodyComponent></bodyComponent>
      </div>
    </div> -->

    <!-- <div class="row">
      <lab1Component></lab1Component>
    </div> -->

    <router-view></router-view>
    <div class="row">
      <div class="col-12 bg-info"><footerComponent></footerComponent></div>
    </div>
  </div>
</template>

<script>
import linksComponent from "@/components/linksComponent.vue";
import headerComponent from "@/components/headerComponent.vue";
import footerComponent from "@/components/footerComponent.vue";
import bodyComponent from "@/components/bodyComponent.vue";
import lab1Component from "@/components/lab1Component.vue";
export default {
  components: {
    linksComponent,
    headerComponent,
    footerComponent,
    bodyComponent,
    lab1Component,
  },
};
</script>

<style></style>

<template>
  <v-app>
    <Nav />
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld';
import Nav from "@/components/Nav";

export default {
  name: "App",

  components: {
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

.v-application {
  font-family: "Nunito", sans-serif;
}

.theme--dark.v-sheet {
    background-color: var(--v-secondary-lighten2);
    border-color: var(--v-secondary-lighten2);
}

.theme--dark .v-list .v-list-item--active .v-list-item__title {
  color: var(--v-accent-lighten5) !important;
}
.vue-typer .custom.char.typed {
  color: var(--v-secondary-lighten3);
}
</style>

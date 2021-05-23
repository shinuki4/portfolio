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

.vue-typer .custom.char.typed {
  color: var(--v-secondary-lighten3);
}
</style>

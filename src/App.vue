<template>
  <v-app>
    <Nav  app/>
    <v-main transition="slide-x-transition">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <!--<HelloWorld/>-->
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
html,
body {
  font-family: "Nunito", sans-serif;
}

#app {
  font-family: "Nunito", sans-serif;
}
</style>

<template>
  <v-container fluid fill-height class="background-home">
    <v-layout main align-center justify-center>
      <v-card
        height="300"
        width="500"
        class="pa-2 secondary card-opacity"
        shaped
        elevation="24"
      >
        <h4 class="text-center">
          {{ $t("home.greetings") }}, {{ $t("home.announceMe") }}
        </h4>
        <h2 class="text-center">Cédric Henrion</h2>
        <h4 class="text-center">
          {{ $t("home.announceMe") }}
          <vue-typer
            v-bind:text="$t('home.impact')"
            :erase-delay="50"
            erase-style="backspace"
            caret-animation="solid"
          ></vue-typer>
        </h4>
        <v-img
          :width="width"
          :height="height"
          :src="require('../assets/me.jpg')"
          class="rounded-circle mx-auto picture-opacity"
        ></v-img>
      </v-card>
    </v-layout>
  </v-container>
</template>

<style scoped>
.background-home {
  background: url("../assets/home-background-resize.jpg") no-repeat center center fixed !important;
  background-size: cover;
}
</style>

<script>
export default {
  data: () => ({
    width: 200,
    height: 200,
  }),
};
</script>


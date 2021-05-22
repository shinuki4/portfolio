<template>
  <div class="home">
    <h4>{{ $t("home.greetings") }}, {{ $t("home.announceMe") }}</h4>
    <h2>Cédric Henrion</h2>
    <h4>
      {{ $t("home.announceMe") }}
      <vue-typer 
      v-bind:text="$t('home.impact')"
      :erase-delay='50'
      erase-style='backspace'
      caret-animation='solid'
      ></vue-typer>
    </h4>

    <v-img
      :width="width"
      :height="height"
      :src="require('../assets/me.jpg')"
      class="rounded-circle"
    ></v-img>
  </div>
</template>

<script>
export default {
  data: () => ({
    width: 200,
    height: 200,
  }),
};
</script>
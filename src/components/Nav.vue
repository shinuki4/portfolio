<template>
  <!-- <div id="nav">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-btn tile to="/">
        {{ $t("nav.home") }}
      </v-btn>
      <v-btn tile to="/about">
        {{ $t("nav.aboutMe") }}
      </v-btn>
      <v-btn tile to="/education">
        {{ $t("nav.educations") }}
      </v-btn>
      <v-btn tile to="/work-experience">
        {{ $t("nav.workExperiences") }}
      </v-btn>
      <v-btn tile to="/skills">
        {{ $t("nav.skills") }}
      </v-btn>
      <v-btn tile to="/contact">
        {{ $t("nav.contact") }}
      </v-btn>
      <v-spacer></v-spacer>
      <LocaleChanger />
    </v-app-bar>
  </div>-->

  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="require('../assets/me.jpg')"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Cédric Henrion</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="route in $router.options.routes"
          :key="route.name"
          :to="route.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t("nav." + route.name) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn fab class="mx-2">
            <v-icon color="#0077b5">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn fab class="mx-2">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn fab class="mx-2">
            <v-icon color="#fc6d27">mdi-gitlab</v-icon>
          </v-btn>
          <LocaleChanger />
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger";

export default {
  name: "Nav",
  components: {
    LocaleChanger,
  },
  data() {
    return {
      drawer: true,
      mini: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

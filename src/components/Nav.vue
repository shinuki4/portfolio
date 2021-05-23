<template>
  <div id="nav">
    <v-card>
      <v-app-bar flat main class="primary" height="56">
        <v-spacer></v-spacer>
        <LocaleChanger />
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        app
        class="secondary"
      >
        <v-list-item class="px-2 primary">
          <v-list-item-avatar>
            <v-img :src="require('../assets/me.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Cédric Henrion</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense class="secondary">
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
              <v-list-item-title>{{
                $t("nav." + route.name)
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2 text-center" justify="space-around">
            <v-btn fab small>
              <v-icon color="#0077b5">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn fab small>
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn fab small>
              <v-icon color="#fc6d27">mdi-gitlab</v-icon>
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-card>
  </div>
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

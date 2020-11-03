<template>
  <v-app id="inspire">
    <App_bar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import App_bar from "./components/ui_main/Appbar";
export default {
  components: {
    App_bar,
  },
};
</script>
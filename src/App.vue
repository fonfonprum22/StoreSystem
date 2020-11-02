<template>
  <v-app id="inspire">
    <Appbar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <Navigation />
          </v-col>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Navigation from "./components/Navigationbar";
export default {
  components: {
    Appbar,
    Navigation
  },
  created() {
    this.$router.push({ path: "Dashboard" });
  }
};
</script>

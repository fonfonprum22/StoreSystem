<template>
  <v-app>
    <App_bar  id="inspire" v-if="this.$store.state.user != undefined" />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <Login  id="inspire" v-if="this.$store.state.user == undefined"/>
            <router-view  id="inspire" v-if="this.$store.state.user != undefined" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Login from './views/Login'
import App_bar from "./components/ui_main/Appbar";
export default {
  components: {
    App_bar,
    Login
  },
  created() {
    this.$router.push('/Dashboard')
  }
};
</script>
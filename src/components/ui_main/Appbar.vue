<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32" />
      <div v-if="this.$store.state.user.data.role == 1">
      <v-btn v-for="link in links" :key="link" text :to="`${link}`">
        {{ link }}
      </v-btn>
      </div>
      <div v-else>
        <v-btn v-for="link in links2" :key="link" text :to="`${link}`">
        {{ link }}
        </v-btn>
      </div>
      <v-spacer />
       <v-btn text @click="logout_user()">
           logout
       </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Logs", "Store", "Employee", "Bill"],
    links2: [ "Store", "Bill"],
  }),
  methods : {
    logout_user() {
      this.$store.state.user = undefined
    }
  }
};
</script>``
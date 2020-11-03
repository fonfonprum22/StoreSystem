<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32" />
      <v-btn v-for="link in links" :key="link" text :to="`${link}`">
        {{ link }}
      </v-btn>
      <v-spacer />
       <v-btn text>
           logout
       </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Store", "Logs", "Employee", "Bill"],
  }),
};
</script>``
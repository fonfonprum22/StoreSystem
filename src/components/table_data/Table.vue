<template>
  <v-data-table
    :headers="headers"
    :items="products"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My STORE</v-toolbar-title>
        <v-divider class="mx-4" inset vertical />
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          rounded
          filled
          dense
        />
        <v-btn 
          class="ml-3"
          rounded
          @click="add_new_item()"
        >
          {{ ittle_add }}
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="edit_item(item)"> mdi-pencil </v-icon>
      <v-icon small @click="delete_item(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize" text> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    search: "",
  }),
  props: ["headers", "products", "ittle_add"],
  methods: {
    initialize() {
      this.$emit("reset")
    },
    add_new_item() {
      this.$emit("add_new")
    },
    edit_item(item) {
      this.$emit("edit_item", item)
    },
    delete_item(item) {
      this.$emit("delete_item", item)
    }
  },
  updated() {
    this.initialize()
  }
};
</script>
<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>STORE</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          filled
          rounded
          dense
        />
        <v-spacer></v-spacer>
        <New
          :dialog="dialogNew"
          :data="editedItemModel"
          :id="editedIndex"
          v-on:close="closeDialog()"
        />
        <Delete
          :dialog="dialogDelete"
          :id="editedIndex"
          v-on:delete="closeDialog()"
        />
      </v-toolbar>
    </template>
    <template v-slot:item.type="{ item }">
      <v-chip :color="getTypeColor(item.type)" dark>
        {{ item.type }}
      </v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import New from "./New_Table";
import Delete from "./Delete_Table";
export default {
  data: () => ({
    dialogNew: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "List Product (Name)",
        align: "start",
        sortable: false,
        value: "productName"
      },
      { text: "Type", value: "type" },
      { text: "Price (Baht)", value: "price" },
      { text: "Selling price (Baht)", value: "sellingPrice" },
      { text: "BuyDate", value: "buyDate" },
      { text: "Expired", value: "expired" },
      { text: "Unit", value: "unit" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedItemModel: {
      productName: "",
      type: "",
      price: "",
      sellingPrice: "",
      buyDate: "",
      expired: "",
      unit: ""
    },
    editedIndex: 0
  }),
  components: {
    New,
    Delete
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = this.$store.state.products;
      console.log("initialize");
      this.$forceUpdate();
    },
    getTypeColor(type) {
      if (type == "Snack") return "pink";
      else if (type == "Drink") return "blue";
      else if (type == "Garnish") return "yellow";
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItemModel = Object.assign({}, item);
      this.dialogNew = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItemModel = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialogNew = false;
      this.$nextTick(() => {
        this.editedItemModel = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItemModel);
      } else {
        this.desserts.push(this.editedItemModel);
      }
      this.close();
    },

    closeDialog() {
      this.dialogNew = false;
      this.dialogDelete = false;
      this.initialize();
    }
  }
};
</script>

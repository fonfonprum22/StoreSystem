<template>
  <div class="pa-8">
    <TableStore :data="data" />
  </div>
</template>

<script>
import TableStore from "../../components/Table/Table_Store";
export default {
  data: () => ({
    data: {
      title: "test",
      creatAt: "2020-10-01",
      sale: 200,
      type: "food",
      description: "สินค้าอาหารเพื่อสุขภาพ",
      review: 3,
      image: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    }
  }),
  components: {
    TableStore
  }
};
</script>

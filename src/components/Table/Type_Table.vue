<template v-slot:item.type="{ type }">
  <v-chip :color="getColor(type.calories)" dark>
    {{ type.calories }}
  </v-chip>
</template>

<script>
export default {
  props: ["type"]
};
</script>

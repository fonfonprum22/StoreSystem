<template>
<div class="text-center">
  <v-card max-width="400" class="mx-auto">
    <v-card-title > บริษัทฮานะจำกัดมหาชน, แม่โจ้ (07929) </v-card-title>
    <v-card-subtitle> TAX#0105531085434 (VAT Included) </v-card-subtitle>
    <v-card-subtitle> ใบเสร็จรับเงิน / ใบกำกับภาษี </v-card-subtitle>
    <v-card-text> 
      <v-row>
        <v-col class="text-start">
          <h4>
            รายการ
          </h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-start" cols="5">
          Product Name
        </v-col>
        <v-col class="text-center" cols="3">
          Unit
        </v-col>
        <v-col class="text-end" cols="4">
          Price (Baht)
        </v-col>
      </v-row>
       <v-row class="pa-0" v-for="(item, index) in product_list" :key="index">
        <v-col class="text-start pt-0" cols="5">
          {{item.name}}
        </v-col>
        <v-col class="text-center pt-0" cols="3">
          {{item.unit}}
        </v-col>
        <v-col class="text-end pt-0" cols="4">
          {{item.price}}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-start pt-0">
          ยอดรวมสุทธิ (totle)
        </v-col>
        <v-col class="text-end pt-0">
          {{ totle }} Baht
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-start pt-0">
          รับเงิน (Accept money)
        </v-col>
        <v-col class="text-end pt-0">
          {{ accept }} Baht
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-start pt-0">
          เงินทอน (Give the change)
        </v-col>
        <v-col class="text-end pt-0">
          {{ accept -  totle }} Baht
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  props: ['product_list', 'totle', 'accept']
}
</script>
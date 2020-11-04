<template>
  <v-card>
    <v-card-title> {{title}} </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="2"> ID : </v-col>
        <v-col>
          {{ employee.id }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"> Name : </v-col>
        <v-col> {{ employee.data.name }} {{ employee.data.lastname }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"> Email : </v-col>
        <v-col>
          {{ employee.data.email }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"> Password : </v-col>
        <v-col>
          {{ employee.data.passworld }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ['employee','title']
}
</script>
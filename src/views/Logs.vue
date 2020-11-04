<template>
  <div >
    <v-row v-for="(item, index) in this.$store.state.logs" :key="index">
      <v-col >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            :color="`${
              item.data.actions == 'Buy'
                ? '#FF5252'
                : item.data.actions == 'Edit'
                ? '#FFEE58'
                : item.data.actions == 'Sale'
                ? '#76FF03'
                : ''
            }`"
          >
            <v-card-title>
              {{ item.data.actions }} | {{ item.data.nameProduct }}
              <v-spacer />
              {{ item.data.date }}
            </v-card-title>
            <v-card-subtitle>ID : {{ item.id }}</v-card-subtitle>
            <v-card-text>
              
              <v-row>
                <v-col class="text-end">
                  <h3>{{ item.data.unit }} Piece</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-end">
                  <h3>{{ item.data.money }} Baht</h3>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
    background-color: rgba(#FFF, 0.8)
>.v-card__text
    color: #000
</style>
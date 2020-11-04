<template>
  <div>
      <v-row>
        <v-spacer />
        <v-col>
             <v-form ref="form" v-model="valid" lazy-validation>
          <v-card max-width="500">
            <v-card-title> <v-spacer />Login <v-spacer /></v-card-title>
            <v-card-text>
              <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0">
                  <v-text-field
                    placeholder="exam@mail.com"
                    label="Email"
                    rounded
                    filled
                    dense
                    :rules="[v => !!v || 'Email is required']"
                  required
                    v-model="login.email"
                  />
                </v-col>
              </v-row>
              <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0">
                  <v-text-field
                    placeholder="reh45iwqd`87df6"
                    label="Password"
                    rounded
                    filled
                    dense
                    :rules="[v => !!v || 'Password is required']"
                  required
                    v-model="login.password"
                  />
                </v-col>
              </v-row>
              <div class="text-center">
                {{ err }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn 
              :disabled="!valid" 
              rounded 
              block 
              @click="login_user()"
              >
                login
              </v-btn>
            </v-card-actions>
          </v-card>
          
    </v-form>
        </v-col>
        <v-spacer />
      </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    err: "",
    login: {
      email: "",
      password: "",
    },
  }),
  methods: {
    login_user() {
      this.$store.state.employees.forEach((element) => {
        if (
          element.data.email == this.login.email &&
          element.data.passworld == this.login.password
        ) {
          this.$store.state.user = element;
        }
      });
      if (this.$store.state.user == undefined) {
        this.err == "No Data";
      }
    },
  },
};
</script>
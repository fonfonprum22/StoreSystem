<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title> Add New Employee </v-card-title>
      <v-card-text>
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pb-0" cols="3"> Name : </v-col>
          <v-col class="ma-0 pb-0">
            <v-text-field
              placeholder="Name"
              label="Employee Name"
              rounded
              filled
              dense
              :rules="[(v) => !!v || 'Employee Name is required']"
              required
              v-model="new_employee.name"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pb-0" cols="3"> LastName : </v-col>
          <v-col class="ma-0 pb-0">
            <v-text-field
              placeholder="LastName"
              label="Employee LastName"
              rounded
              filled
              dense
              :rules="[(v) => !!v || 'Employee LastName is required']"
              required
              v-model="new_employee.lastname"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pb-0" cols="3"> Email : </v-col>
          <v-col class="ma-0 pb-0">
            <v-text-field
              placeholder="exam@mail.com"
              label="Email"
              rounded
              filled
              dense
              :rules="[(v) => !!v || 'Email is required']"
              required
              v-model="new_employee.email"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pb-0" cols="3"> Password : </v-col>
          <v-col class="ma-0 pb-0">
            <v-text-field
              placeholder="reh45iwqd`87df6"
              label="Password"
              rounded
              filled
              dense
              :rules="[(v) => !!v || 'Password is required']"
              required
              v-model="new_employee.passworld"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pb-0" cols="3"> Rold : </v-col>
          <v-col class="ma-0 pb-0">
            <v-select
                  :items="items"
                  placeholder=" "
                  label="Type"
                  rounded
                  filled
                  dense
                  v-model="new_employee.role"
                  :rules="[v => !!v || 'Type is required']"
                  required
                />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn :disabled="!valid" @click="add_new_employee()">
          add new employee
        </v-btn>
        <v-btn @click="close_dialog()"> Close </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    items: ['Admin', 'Employee'],
    new_employee: {
      email: "",
      lastname: "",
      name: "",
      passworld: "",
      role: 'Admin',
    },
  }),
  methods: {
    add_new_employee() {
        if ( this.new_employee.role == 'Admin') {
            this.new_employee.role = 1
        }
        else {
            this.new_employee.role = 2
        }
      this.$store.dispatch('post_employees', this.new_employee)
      this.close_dialog();
    },
    close_dialog() {
      this.$refs.form.reset();
      this.$emit("close");
    },
  },
};
</script>
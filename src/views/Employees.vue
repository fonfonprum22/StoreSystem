<template>
  <div>
    <v-row>
      <v-col class="text-end">
        <v-btn fab small @click="open_dialog_add_user()">
          <v-icon> mdi-account-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      v-for="(employee, index) in this.$store.state.employees"
      :key="index"
    >
      <v-col v-if="employee.data.role == 1">
        <EmployeeCard :title="`Admin`" :employee="employee" />
      </v-col>
    </v-row>
    <v-divider class="mx-4" inset />
    <v-row
      v-for="(employee, index) in this.$store.state.employees"
      :key="index"
    >
      <v-col v-if="employee.data.role == 2">
        <EmployeeCard :title="`Employee`" :employee="employee" />
      </v-col>
    </v-row>

     <v-dialog
      v-model="add_user"
      persistent
      max-width="600"
    >
        <DialogAdduser 
            v-on:close="colse_dialog_add_user"
        />
     </v-dialog>
  </div>
</template>

<script>
import DialogAdduser from '../components/dialog_card_employee/AddEmployee'
import EmployeeCard from "../components/dialog_card_employee/EmployeeCard";
export default {
  data: () => ({
    add_user: false,
  }),
  components: {
    EmployeeCard,
    DialogAdduser
  },
  methods : {
      open_dialog_add_user () {
          this.add_user = true
      },
      colse_dialog_add_user () {
          this.add_user = false
      }
  }
};
</script>
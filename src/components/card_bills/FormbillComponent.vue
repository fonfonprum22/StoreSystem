<template>
    <v-row>
        <v-col cols="6" class="ma-0 pb-0">
            <v-select
            :items="product_name"
            placeholder=" "
            label="Product Name"
            rounded
            filled
            dense
            v-model="form.name"
            />
        </v-col>
        <v-col cols="3" class="ma-0 pb-0">
            <v-text-field
            placeholder="0"
            label="Unit"
            type="number"
            v-bind:suffix="`/${get_product_unit()}`"
            rounded
            filled
            dense
            v-model="form.unit"
            />
        </v-col>
        <v-col cols="3" class="ma-0 pb-0">
            <v-text-field
            placeholder="0"
            label="Price"
            type="number"
            suffix="Baht"
            rounded
            filled
            dense
            v-model="form.price"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ['index', 'product_name', 'products'],
    data: () => ({
        form : {
            name : '',
            unit: 0,
            price: 0,
            index: '',
            id: '',
            data: {}
        },
        unit: 0
    }),
    methods: {
        get_product_unit() {
            this.products.forEach(element => {
                if( element.data.name == this.form.name) {
                    this.unit = element.data.instorck
                }
            });
            return this.unit
        },
        update_price_unit() {
            this.products.forEach(element => {
                if( element.data.name == this.form.name) {
                    this.form.id = element.id
                    this.form.data = element.data
                    this.form.price = this.form.unit * element.data.price
                }
            });
        },
        send_product_to_list() {
            this.form.index = this.index
            this.$emit('send_produc', this.form)
        }
    },
    updated() {
        this.update_price_unit() 
        this.send_product_to_list()
    },
}
</script>
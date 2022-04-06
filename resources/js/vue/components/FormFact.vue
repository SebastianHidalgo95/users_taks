<template >
    <div class="card border shadow ">
            <div class="row d-flex">
                <div class="col-6">
                    <ul>
                        <li>
                            <div class="my-3">
                                <p class="text-center h3 font">Emisor</p>
                            </div>
                            <div class="form-group row">
                                <label for="name-vendedor" class="col-2 col-form-label">Nombre</label>
                                <div class='col-9' id='name-vendedor'>
                                    <input type='text' v-model="factura.name_emisor" class="form-control" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group row">
                                <label for="nit-vendedor" class="col-2 col-form-label">NIT</label>
                                <div class='col-9' id='nit-vendedor'>
                                    <input type='text' v-model="factura.nit_emisor" class="form-control" />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div class="form-group row">
                                <label for="datetimepicker1" class="col-2 col-form-label">Fecha</label>
                                <div class='col-9' id='datetimepicker1'>
                                    <input type='date' v-model="factura.fecha" class="form-control" />
                                </div>
                            </div>
                        </li>
                    </ul>      
                </div>
                <div class="col-6">
                    <ul>
                        <li>
                            <div class="my-3">
                                <p class="text-center h3 font">Comprador</p>
                            </div>
                            <div class="form-group row">
                                <label for="name-comprador" class="col-2 col-form-label">Nombe</label>
                                <div class='col-9' id='name-comprador'>
                                    <input type='text' v-model="factura.name_comprador" class="form-control" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group row">
                                <label for="nit-comprador" class="col-2 col-form-label">NIT</label>
                                <div class='col-9' id='nit-comprador'>
                                    <input type='text' v-model="factura.nit_comprador" class="form-control" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
            <div class="d-flex">
                <div class="col justify-content-center ">
                    <div class="mx-auto container-factura border-solid">
                        <h3>Factura # {{ id }}</h3>
                    </div>
                    <div class="table-responsive">
                        <table class="table mx-auto container-factura  text-start">
                            <thead>
                                <tr scope="row">
                                    <th class="col-1">Item</th>
                                    <th class="col-6">Descripcion</th>
                                    <th class="col-1">Cantidad</th>
                                    <th class="col-2 text-center">Valor Unit.</th>
                                    <th class="col-2 text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in factura.items" :key="item.key">
                                    <th scope="row" >
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="factura.items[item.key].item_number" class="form-control" />
                                        </div>
                                    </th>
                                    <td>
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="factura.items[item.key].description" class="form-control" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="factura.items[item.key].cantidad" class="form-control" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="factura.items[item.key].unit_val" class="form-control" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group mx-1 text-center">
                                            {{  getItemTotal(item.unit_val, item.cantidad)}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div  class="d-flex container-factura mx-auto p-3 border-solid">
                        <button class="btn btn-primary" 
                            @click="handleAdd">
                                <i class="fa fa-plus"></i> 
                                Añadir Item
                        </button>
                    </div>
                </div>

            </div>  
            <div class="d-flex container-factura mx-auto">
                <div class="ms-auto col-4 text-start ">
                   <ul>
                        <hr>
                        <li>Subtotal :{{ subTotal}}</li>
                        <li>IVA(19%):{{ iva }}</li>
                        <li>Total:{{total}}</li>
                    </ul>   
                </div>           
            </div> 
    </div>
    <Fab
        @launchAction = "checkEmpty" 
        :action="actionform" />
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { useToast } from "vue-toastification"
import { mapState } from 'vuex';
export default {
    emits: ["complete-form"],
    props: {
        id: { 
            type: String,
            required: false
        },
        actionform: {
            type: String,
            required: true
        }
    },
    setup() {
      const toast = useToast();
      return { toast }
    },
    created() {
        
        if( this.actionform == 'editar'){
            this.count = this.factura.lastKey + 1
        }
        
    },
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue')),
    },
    data() {
        return {
            count: 1,
            factura : this.$store.state.facturas.factura,
            items: this.$store.state.facturas.factura.items
        }
    },
    computed:{
        subTotal: function() {
            const subTotal = this.getSubTotal();
            const result = numeral(subTotal).format("$ 0,00.00");
            return result;
        },
        iva: function(){
            const iva = this.getSubTotal()*0.19
            const result = numeral(iva).format("$ 0,00.00");
            return result
        },
        total: function() {
            const total = this.getSubTotal() + this.getSubTotal()*0.19;
            const result = numeral(total).format("$ 0,00.00");
            return result;
        }
    },
    methods: {
        
        getSubTotal() {
            let subTotal = 0;
            for (let i = this.factura.items.length - 1; i >= 0; i--) {
                subTotal += this.factura.items[i].unit_val * this.factura.items[i].cantidad;
            }
            return subTotal;
        },
        handleAdd(){
            
            const newItem = {
                item_number:'',
                key: this.count,
                description: "",
                cantidad: "",
                unit_val: "",
            }
            this.count++
            this.factura.items.push(newItem)
        },
        getItemTotal(cost, quantity) {
            return numeral(cost * quantity).format("$ 0,00.00");
        },
        checkEmpty(){
            const info = {
                id: JSON.parse(JSON.stringify(this.id)),
                fecha: JSON.parse(JSON.stringify(this.factura.fecha)),
                name_comprador: JSON.parse(JSON.stringify(this.factura.name_comprador)),
                name_emisor: JSON.parse(JSON.stringify(this.factura.name_emisor)),
                nit_comprador: JSON.parse(JSON.stringify(this.factura.nit_comprador)),
                nit_emisor: JSON.parse(JSON.stringify(this.factura.nit_emisor)),
                iva: JSON.parse(JSON.stringify(this.getSubTotal()*0.19)),
                subtotal: JSON.parse(JSON.stringify(this.getSubTotal())),
                total: JSON.parse(JSON.stringify(this.getSubTotal() + this.getSubTotal()*0.19)),
            }
            
            const check = this.factura.items.some(element => Object.values(element).some(val => val === null || val === ""))
            const check2 = Object.values(info).some(val => val === null || val === "")
            if (check || check2){
                this.toast.error("Por favor completa toda la información!")
            } else {
                this.$emit('complete-form', 
                    info,
                    JSON.parse(JSON.stringify(this.factura.items)),
                )
            }  
        },
    },
}
</script>
<style lang="scss" scoped>
  li{
    list-style-type: none;
}
.form-group {
    margin-block: 10px;
}
.font{
    font-weight: bold;
}
.border-solid {
    border-bottom: 3px solid #8a8686b0;
}
.container-factura {
    width: 95%;
}
tbody {
    border-top: none !important;
}  
</style>
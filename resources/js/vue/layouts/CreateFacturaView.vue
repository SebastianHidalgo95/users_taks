<template >
    <div class="container w-80 my-3 px-5">
        <div class="d-flex">
            <div class="mr-auto">
                <h1>Crear Factura</h1>
            </div> 
        </div>
        <FormFact />
        <!-- <div class="card border shadow ">
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
                                    <input type='text' v-model="nameEmisor" class="form-control" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group row">
                                <label for="nit-vendedor" class="col-2 col-form-label">NIT</label>
                                <div class='col-9' id='nit-vendedor'>
                                    <input type='text' v-model="nitEmisor" class="form-control" />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div class="form-group row">
                                <label for="datetimepicker1" class="col-2 col-form-label">Fecha</label>
                                <div class='col-9' id='datetimepicker1'>
                                    <input type='date' v-model="fecha" class="form-control" />
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
                                    <input type='text' v-model="nameComprador" class="form-control" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group row">
                                <label for="nit-comprador" class="col-2 col-form-label">NIT</label>
                                <div class='col-9' id='nit-comprador'>
                                    <input type='text' v-model="nitComprador" class="form-control" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
            <div class="d-flex">
                <div class="col justify-content-center ">
                    <div class="mx-auto container-factura border-solid">
                        <h3>Factura {{ id }}</h3>
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
                                <tr v-for="item in items" :key="item.key">
                                    <th scope="row" >
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="items[item.key].item" class="form-control" />
                                        </div>
                                    </th>
                                    <td>
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="items[item.key].description" class="form-control" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="items[item.key].cantidad" class="form-control" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group row mx-1">
                                            <input type='text' v-model="items[item.key].unitVal" class="form-control" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group mx-1 text-center">
                                            {{  getItemTotal(item.unitVal, item.cantidad)}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex container-factura mx-auto p-3 border-solid">
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
        </div> -->
        
    </div>
    <Fab
    @launchAction = "checkEmpty" 
    action="crear" />
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { useToast } from "vue-toastification"
export default {
    props:[
        'action'
    ],
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue')),
        FormFact: defineAsyncComponent( () => import('../components/FormFact.vue')),
    },
    setup() {
      // Get toast interface
      const toast = useToast();
      return { toast }
    },
    props:{
        
    },
    data() {
        
        return {
            id:'',
            count: 1,
            fecha: '',
            nameComprador: '',
            nameEmisor: '',
            nitComprador: '',
            nitEmisor: '',
            subtotal: '',
            items: [
                {
                key: 0,
                item: "",
                description: "",
                cantidad: "",
                unitVal: "",
                },    
            ],
            
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
    created() {
        this.getLastFactura();
    },
    methods: {
        async getLastFactura (){
            await axios({url:'get_lastfactura',method:'POST'})
            .then(async({ data }) =>{
                this.id = data
            })
        },
        checkEmpty(){
            const info = {
                fecha: JSON.parse(JSON.stringify(this.fecha)),
                nameComprador: JSON.parse(JSON.stringify(this.nameComprador)),
                nameEmisor: JSON.parse(JSON.stringify(this.nameEmisor)),
                nitComprador: JSON.parse(JSON.stringify(this.nitComprador)),
                nitEmisor: JSON.parse(JSON.stringify(this.nitEmisor)),
                iva: JSON.parse(JSON.stringify(this.getSubTotal()*0.19)),
                subtotal: JSON.parse(JSON.stringify(this.getSubTotal())),
                total: JSON.parse(JSON.stringify(this.getSubTotal() + this.getSubTotal()*0.19)),
            }
            const items = this.items
            const check = items.some(element => Object.values(element).some(val => val === null || val === ""))
            const check2 = Object.values(info).some(val => val === null || val === "")
            if (check || check2){
                this.toast.error("Por favor completa toda la información!")
            } else {
                this.createFactura( info, JSON.parse(JSON.stringify(this.items)) )
            }  
        },
        getSubTotal() {
            let subTotal = 0;
            for (let i = this.items.length - 1; i >= 0; i--) {
                subTotal += this.items[i].unitVal * this.items[i].cantidad;
            }
            return subTotal;
        },
        handleAdd(){
            const newItem = {
                key: this.count,
                item: "",
                description: "",
                cantidad: "",
                unitVal: "",
            }
            this.items.push(newItem)
            this.count++
        },
        getItemTotal(cost, quantity) {
            return numeral(cost * quantity).format("$ 0,00.00");
        },
        async createFactura( info, items ){
            await axios({
                url:'create_factura',
                method:'POST', 
                data: {
                    info: info,
                    items: items,
                }
            })
            .then(async({ data }) =>{
                if( data ){
                    this.toast.success("Éxito!")
                    this.$router.push('/dashboard/facturas')
                } else {
                    this.toast.Error("No fue posible crear la factura!")
                    this.$router.push('/dashboard/facturas')
                }
            })
        }
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
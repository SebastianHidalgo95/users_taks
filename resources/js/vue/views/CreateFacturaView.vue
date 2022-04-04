<template >
    <div class="container w-80 my-3 px-5">
        <div class="d-flex">
            <div class="mr-auto">
                <h1>Crear Factura</h1>
            </div> 
        </div>
        <FormFact 
        @complete-form="create" 
            :id="id" 
            actionform='crear'
        />
    </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { useToast } from "vue-toastification"
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        FormFact: defineAsyncComponent( () => import('../components/FormFact.vue')),
    },
    setup() {
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
        this.$store.commit('facturas/cleanFactura')
    },
    methods: {
        ...mapActions('facturas', ["createFactura"]),
        async getLastFactura (){
            await axios({url:'get_lastfactura',method:'POST'})
            .then(async({ data }) =>{
                this.id = data
            })
        },
        create( info, items ){
            this.$router.push('/dashboard/facturas')
            const fact = {
                info: info,
                items: items
            }
            this.createFactura( fact )
                .then(async () =>{
                    this.toast.success("Factura creada con Éxito!")                    
                })
                .catch((errr)=>{
                    this.toast.error("No fue posible crear la factura!")
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
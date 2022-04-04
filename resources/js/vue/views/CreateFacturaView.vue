<template >
    <div v-if="isLoading" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor ....
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div v-else class="container w-80 my-3 px-5">
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
    data() {
        return {
            id :'',
        }
    },
    computed:{
        ...mapState('facturas', ['isLoading']),
    },
    created() {
        this.$store.commit('facturas/startLoading')
        this.getLastFactura();
        this.$store.commit('facturas/cleanFactura')
    },
    methods: {
        ...mapActions('facturas', ["createFactura"]),
        async getLastFactura (){
            await axios({url:'get_lastfactura',method:'POST'})
            .then(async({ data }) =>{
                this.id = data.toString()
                this.$store.commit('facturas/finishLoading')
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


.font{
    font-weight: bold;
}


</style>
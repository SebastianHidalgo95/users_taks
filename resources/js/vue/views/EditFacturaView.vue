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
                <h1>Editar Factura</h1>
            </div> 
        </div>
        <FormFact 
            @complete-form="update" 
            :id="this.$route.params.id" 
            actionform="editar"
        />
    </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { useToast } from "vue-toastification"
import { mapActions, mapState } from 'vuex';

export default {
    setup() {
      const toast = useToast();
      return { toast }
    },
    components: {
        FormFact: defineAsyncComponent( () => import('../components/FormFact.vue')),
    },
    props: {
        id:{
            type: String,
            required: true,
        }
    },  
    data() {
        return {
            jh:''
        }
    },
    mounted() {
        this.$store.commit('facturas/startLoading')
        this.getFactura( this.id )
        // this.$store.commit('facturas/finishLoading')
    },
    computed: {
        ...mapState('facturas', ['isLoading', 'factura'])
    },
    data() {
        return {
            
        }
    },

    methods: {
        ...mapActions('facturas', ['getFactura', "updateFactura"]),
        
        update( info, items ){
            this.$router.push('/dashboard/facturas')
            const fact = {
                info: info,
                items: items
            }
            this.updateFactura( fact )
                .then(async () =>{
                    this.toast.success("Factura editada con Éxito!")                    
                })
                .catch((errr)=>{
                    this.toast.error("No fue posible crear la factura!")
            })                  
        }
    },
}
</script>
<style lang="scss" scoped>


</style>
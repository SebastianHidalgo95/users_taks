<template>
    <div v-if="isLoading" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor ....
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div v-else class="container w-80 mt-3 px-5">
        <div class="d-flex">
            <div class="mr-auto">
                <h1>Facturas</h1>
            </div>
            <div class="ms-auto">
                <router-link class="btn btn-primary"
                    :to="{ name: 'createfactura'}"
                    >Crear Nueva Factura
                </router-link>
            </div>
        </div>

        <div class="d-flex">
            <div class="col-8 mx-auto">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Búsqueda &nbsp <i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" class="form-control" v-model="term" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>
            
        </div>
        <div v-if="facturas.length > 0"  class="d-flex mt-4">
            <div class="col justify-content-center ">
                <div class="table-responsive card">
                    <table class="table mx-auto container-factura p-0 m-0 text-start">
                        <thead>
                            <tr scope="row">
                                    <th scope="col"> 
                                        <a class="pointer" @click="order( id, 'numero' )">
                                            Número
                                            <template v-if="column=='numero'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( name_emisor, 'emisor')">
                                            Emisor
                                            <template v-if="column=='emisor'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( name_comprador, 'comprador')">
                                            Comprador
                                            <template v-if="column=='comprador'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( total, 'total')">
                                            Total
                                            <template v-if="column=='total'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                            
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( fecha, 'fecha' )">
                                            Fecha
                                            <template v-if="column=='fecha'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="fact in facturas" :key="fact.id_factura">
                                <th scope="row">{{ fact.id_factura}}</th>
                                <td>{{ fact.name_emisor}}</td>
                                <td>{{ fact.name_comprador}}</td>
                                <td>${{ fact.total }}</td>
                                <td>{{ fact.fecha}}</td>
                                <td>
                                    <router-link class="btn btn-success"
                                        :to="{ name: 'editfactura', params:{id: fact.id_factura }}"
                                        >Editar
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>       
    </div>
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            id: 0,
            term: '',
            column:'numero',
            asc: true,
        }
    },
    computed:{
         ...mapState('facturas', ['isLoading']),
         ...mapGetters('facturas',['getFacturasByTerm']),
        facturas (){
            return this.getFacturasByTerm( this.term )
        }
    },
    created() {
        this.$store.commit('facturas/clearFacturas')
        this.$store.commit('facturas/startLoading')
        this.$store.commit('facturas/cleanFactura')
        this.loadFacturas()
    },
    methods: {
        ...mapActions('facturas', ['loadFacturas']),
        order( term, column ) {
            this.facturas.sort((a, b) => (a.term < b.term) ? 1 : -1)   
            this.column = column 
            this.asc = !this.asc
        },
    }
}
</script>
<style lang="scss" scoped>

thead tr th a {
    cursor: pointer;
    text-decoration:none;
    color: black;
    &:hover {
        color: #4d79ff;
    }
} 

</style>
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
                <h1>Tareas</h1>
            </div>
            <div class="ms-auto">
                <button class="btn btn-primary"
                    @click="abrirModal('crear')"
                    >Crear Nueva Tarea
                </button>
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
        <div v-if="tasks.length > 0"  class="d-flex mt-4">
            <div class="col justify-content-center ">
                <div class="table-responsive card">
                    <table class="table mx-auto container-factura p-0 m-0 text-start">
                        <thead>
                            <tr scope="row">
                                    <th scope="col"> 
                                        <a class="pointer" @click="order( id, 'numero' )">
                                            Id
                                            <template v-if="column=='numero'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( name, 'name')">
                                            Nombre
                                            <template v-if="column=='name'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( date_start, 'date_start')">
                                            Fecha de inicio
                                            <template v-if="column=='date_start'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( date_end, 'date_end')">
                                            Fecha final
                                            <template v-if="column=='date_end'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                            
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a class="pointer" @click="order( status, 'status' )">
                                            Status
                                            <template v-if="column=='status'">
                                                <i v-if="asc==true" class="fas fa-arrow-down"></i>
                                                <i v-else class="fas fa-arrow-up"></i>
                                            </template>
                                        </a>
                                    </th>
                                    <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task in tasks" :key="task.id_task">
                                <th scope="row">{{ task.id_task}}</th>
                                <td>{{ task.name}}</td>
                                <td>{{ task.date_start}}</td>
                                <td>{{ task.date_end }}</td>
                                <td>{{ task.status}}</td>
                                <td>
                                    <button  v-if="task.status != 'COMPLETADA'"  @click="abrirModal('update',task)" class="btn btn-success">Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
        <!-- Modal -->
    <div class="modal fade" id="crearModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 50%" >
            <div class="modal-content">
            <div class="modal-header">
                <div class="col-md-12">
                    <h2 v-if="update==true"
                    class="modal-title"
                    style="text-align: center;"
                    > Editar Tare</h2>
                    <h2 v-else
                    class="modal-title"
                    style="text-align: center;"
                    >Crear Tarea</h2>
                </div>
            </div>
            <div>
                <div class="modal-body align-content-center">
                    <div class="mb-4">
                        <label for="name" class="form-label">Nombre</label>
                        <input class="form-control"  name="name" v-model="name">
                    </div> 
                    <div class="row">
                        <div class="col-6 mb-4">
                            <label for="start" class="form-label">Fecha Inicio</label>
                            <input class="form-control" type="date" name="start" v-model="date_start">
                        </div> 
                        <div class="col-6 mb-4">
                            <label for="end" class="form-label">Fecha Final</label>
                            <input class="form-control" type="date" name="end" v-model="date_end">
                        </div> 
                    </div>
                    
                    <div class="mb-4">
                        <label for="status" class="form-label">Estado</label>
                        <select class="form-control" id="sel1" v-model="status">
                            <option>INICIADA</option>
                            <option>EN PROCESO</option>
                            <option>CANCELADA</option>
                            <option>COMPLETADA</option>
                        </select>
                    </div> 
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-center">
                    <div v-if="create">
                        <button class="btn btn-success"
                        @click="createTask">
                            Crear
                        </button>
                    </div>
                    <div v-else>
                        <button class="btn btn-success"
                        @click="updateTask">
                            Editar
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>     
    </div>
    
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex'
import { useToast } from "vue-toastification"
export default {
    setup() {
      const toast = useToast();
      return { toast }
    },
    data() {
        return {
            id: 0,
            term: '',
            column:'numero',
            asc: true,
            create: false,
            update: false,
            name:'',
            date_start: '',
            date_end: '',
            status: '',
        }
    },
    computed:{
         ...mapState('tasks', ['isLoading']),
         ...mapGetters('tasks',['getTasksByTerm']),
        tasks (){
            return this.getTasksByTerm( this.term )
        }
    },
    created() {
        this.$store.commit('tasks/clearTasks')
        this.$store.commit('tasks/startLoading')
        this.loadTasks()
    },
    methods: {
        ...mapActions('tasks', ['loadTasks']),
        order( term, column ) {
            this.tasks.sort((a, b) => (a.term < b.term) ? 1 : -1)   
            this.column = column 
            this.asc = !this.asc
        },
        limpiarData(){
          this.name = ''
            this.date_start= ''
            this.date_end= ''
            this.status= ''  
        },
        abrirModal( action, task ){
            if (action == 'crear'){
                this.limpiarData();
                this.create=true;
                this.update=false;
            } else {
                this.id= task.id_task
                this.name = task.name
                this.date_start= task.date_start
                this.date_end= task.date_end
                this.status= task.status
                this.create=false;
                this.update=true;
            }
            $('#crearModal').modal('show');
        },
        createTask() {
            axios({
                url:'create_task',
                method:'POST', 
                data: {
                    name: this.name,
                    date_start: this.date_start,
                    date_end: this.date_end,
                    status: this.status,
                }
            })
            .then( resp => {
                this.toast.success('Tarea creada con éxito')
                this.$store.commit('tasks/clearTasks')
                this.$store.commit('tasks/startLoading')
                this.loadTasks()
            })
            .catch( err => {
                this.toast.error('No fue posible crear la tarea')
                console.log(err)
            })
            $('#crearModal').modal('hide');
        },
        updateTask() {
            axios({
                url:'update_task',
                method:'POST', 
                data: {
                    id: this.id,
                    name: this.name,
                    date_start: this.date_start,
                    date_end: this.date_end,
                    status: this.status,
                }
            })
            .then( resp => {
                this.toast.success('Tarea editada con éxito')
                this.$store.commit('tasks/clearTasks')
                this.$store.commit('tasks/startLoading')
                this.loadTasks()
                
            })
            .catch( err => {
                this.toast.error('No fue posible editar la tarea')
                console.log(err)
            })
            $('#crearModal').modal('hide');
        }
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
.modal-body {
  align-items: center;
  justify-content: center;
}
</style>
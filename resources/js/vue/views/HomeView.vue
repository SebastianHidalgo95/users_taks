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
        <!-- <div class="d-flex">
            <div class="mr-auto">
                <img class="img-fluid w-100" src="../../../assets/home.png"/>
            </div> 
        </div> -->
        <div class="row">
                <div class="col-xl-3 col-md-6 col-lg-12 stretched_card">
                    <div class="card mb-mob-4 icon_card success_card_bg">
                        <!-- Card body -->
                        <div class="card-body">
                            <h5 class="card-title mb-0 text-white font-weight-bold">Tareas Completadas</h5>
                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 class="mb-0 text-white">{{ completadas}}</h3>
                            </div>
                            <p class="mb-0 text-white">{{ Number(completadas*100/total).toFixed(2)}}% <span class="text-white ml-1"><small>(Del total)</small></span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-12 stretched_card">
                    <div class="card mb-mob-4 icon_card primary_card_bg">
                        <!-- Card body -->
                        <div class="card-body">
                            <h5 class="card-title mb-0 text-white font-weight-bold">Tareas Iniciadas</h5>
                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 class="mb-0 text-white">{{ iniciadas }}</h3>
                            </div>
                            <p class="mb-0 text-white">{{ Number(iniciadas*100/total).toFixed(2)}}% <span class="text-white ml-1"><small>(Del total)</small></span></p>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 col-lg-12 stretched_card">
                    <div class="card mb-mob-4 icon_card warning_card_bg">
                        <!-- Card body -->
                        <div class="card-body">
                            <h5 class="card-title mb-0 text-white font-weight-bold">Tareas en Proceso</h5>
                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 class="mb-0 text-white">{{proceso}}</h3>
                                
                            </div>
                            <p class="mb-0 text-white">{{ Number(proceso*100/total).toFixed(2)}}% <span class="text-white ml-1"><small>(Del total)</small></span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-12 stretched_card">
                    <div class="card mb-mob-4 icon_card info_card_bg">
                        <!-- Card body -->
                        <div class="card-body">
                            <h5 class="card-title mb-0 text-white font-weight-bold">Tareas Canceladas</h5>
                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 class="mb-0 text-white">{{ canceladas}}</h3>
                               
                            </div>
                            <p class="mb-0 text-white">{{ Number(canceladas*100/total).toFixed(2)}}% <span class="text-white ml-1"><small>(Del total)</small></span></p>
                        </div>
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
            completadas:'',
            canceladas: '',
            proceso:'',
            iniciadas: '',
            total:'',
        }
    },
    computed:{
         ...mapState('tasks', ['isLoading']),
    },
    created() {
        this.$store.commit('tasks/startLoading')
        this.getStatistics()
    },
    methods: {
        getStatistics(){
            axios({
                url:'get_statistics',
                method:'POST', 
            })
            .then( resp => {
                const { data } = resp
                this.completadas = data.completadas
                this.canceladas = data.cancelada
                this.proceso = data.proceso
                this.iniciadas = data.iniciada
                this.total = data.total
                this.$store.commit('tasks/finishLoading')
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.icon_card .card-body {
  height: 140px; }
.icon_card i {
  font-size: 35px; }

.primary_card_bg {
  background: linear-gradient(to right, #5b46c0, #6f59cc); }

.success_card_bg {
  background: linear-gradient(to right, #47bd2a, #7bdc4e); }

.info_card_bg {
  background: linear-gradient(to right, #ea5638, #e43f03e3); }
  .info_card_bg .text-info {
    color: #5877ec !important; }

.warning_card_bg {
  background: linear-gradient(to right, #329fffe3, #0837f3); }
  .warning_card_bg .text-warning {
    color: #ff8a32; }

.arrow_icon {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 41px;
  background: #fff;
  border-radius: 6px; }
  .arrow_icon i {
    font-size: 25px; }

.analytics_card p {
  font-size: 15px;
  font-weight: 600; }
.analytics_card .stats_icon {
  background: rgba(255, 255, 255, 0.4);
  padding: 2px 10px;
  border-radius: 50px;
  margin-left: 6px; }
.analytics_card .icon-rounded {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  text-align: center;
  background: white; }
  .analytics_card .icon-rounded i {
    font-size: 1.625rem;
    line-height: 3.75rem; }

.total_sales_sec {
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 5px 7px;
  border-radius: 10px; }
  @media (max-width: 768px) {
    .total_sales_sec {
      display: block !important; } }
  .total_sales_sec .h1 {
    font-size: 30px; }

.sales-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin: .5em 0; }
  @media (max-width: 768px) {
    .sales-info {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start; } }

.sales-info .sales-info-box {
  margin-top: 3px;
  height: 20px;
  width: 20px;
  border-radius: 10px; }
</style>
<template>
    <div class="content bg-content vh-100 min-vh-100 vw-100 min-vw-100">
        <div class="row"></div>
        <div class="container  w-75 shadow-lg">
            <div class="row align-items-lg-stretch mt-5" >
                <div class="col d-none bg d-md-block col-md-5 col-lg-5 col-xl-6 rounded p-0">
                    <img class="img-fluid h-100 p-0 m-0" src="../../../assets/login.png"/>
                </div>
                <div class="col bg-white p-5 rounded-end">
                    <h2 class="fw-bold text-center my-3">Registro</h2>
                        <div class="mb-4">
                            <label for="name" class="form-label">Nombre</label>
                            <input class="form-control" name="name" v-model="name">
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label">Correo Electronico</label>
                            <input class="form-control" name="email" v-model="email">
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" name="password" type="password" v-model="password">
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary" @click="toRegister">Registrar</button>
                        </div>
                        <div class="my-3">
                            <div class="row text-center my-2">
                                <span>Ya tienes Cuenta? 
                                    <router-link 
                                        :to="{ name: 'login-page'}"
                                        >Login
                                    </router-link>
                                </span>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useToast } from "vue-toastification"
import { mapActions } from 'vuex'
export default {
    setup() {
      const toast = useToast();
      return { toast }
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: {
                state: false,
                msg: '',
            }
        }
    },
    methods: {
        ...mapActions('auth', ["register"]),
        
        toRegister(){
            this.validator()
            if(this.error.state){
                // En caso de error del validator genera alerta con msg
                this.toast.error(`${this.error.msg}`) 
            } else{
                // Lanza accion del store module[auth], retorna promesa 
                this.$store.dispatch('auth/register', {
                    name: this.name,
                    email: this.email, 
                    password: this.password,
                    password_confirmation: this.password,
                    }
                )
                    .then(() => {
                        // Redireccionamiento y mensaje de exito
                        this.$router.push('/dashboard/home')
                        this.toast.success('Usuario Registrado')
                    })
                    .catch(err => console.log(err))
            } 
        },
        // Actualiza el valor de this.error en caso de error
        validator(){
            if (!this.name || !this.email || !this.password ){
                this.error= { state: true , msg: 'Por favor complete toda la infomación'}  
            } else if(!this.validar_email(this.email)){
                this.error= { state: true , msg: 'Por favor ingrese un email válido'}  
            } else {
                this.error = { state: false, msg: ''}
            }
        },
        // retorna false en caso de email válido
        validar_email(email){
            const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(String(email).toLowerCase()) ? true : false;
        },
    }
}
</script>
<style lang="scss" scoped>

.bg-content {
    background: #ffe259;
    background: linear-gradient(to right, #091ebba8, #580451)
}


</style>
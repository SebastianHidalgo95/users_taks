<template>
    <div class="content bg-content vh-100 min-vh-100 vw-100 min-vw-100">
        <div class="row"></div>
        <div class="container bg-white w-75 shadow-lg">
            <div class="row bg-white align-items-lg-stretch mt-5" >
                <div class="d-flex justify-content-center">
                    <h2 class="fw-bold text-center my-3">Registro</h2>
                </div>
                <div class="col bg-white px-5 py-2 rounded-end">
                    <div class="mb-4">
                            <label for="name" class="form-label">Nombre</label>
                            <input class="form-control" name="name" v-model="name">
                    </div>
                    <div class="mb-4">
                            <label for="phone" class="form-label">Teléfono</label>
                            <input class="form-control" name="phone" v-model="phone">
                    </div>
                    <div class="mb-4">
                            <label for="address" class="form-label">Dirección</label>
                            <input class="form-control" name="address" v-model="address">
                    </div>     
                </div>
                <div class="col bg-white px-5 py-2 rounded-end">
                    <div class="mb-4">
                            <label for="user" class="form-label">Usuario</label>
                            <input class="form-control" name="user" v-model="user">
                    </div>
                    <div class="mb-4">
                            <label for="email" class="form-label">Correo Electronico</label>
                            <input class="form-control" name="email" v-model="email">
                    </div>
                    <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" name="password" type="password" v-model="password">
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-4">
                        <div class="d-grid">
                            <button class="btn btn-primary align-self-center" @click="toRegister">Registrar</button>
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
            phone: '',
            address: '',
            user:'',
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
                    phone: this.phone,
                    address: this.address,
                    user: this.user,
                    email: this.email, 
                    password: this.password,
                    password_confirmation: this.password,
                    }
                )
                    .then(resp => {
                        // Redireccionamiento y mensaje de exito
                        if( resp.error ) {
                            this.toast.error(resp.error)
                        }else {
                            this.$router.push('/dashboard/home')
                            this.toast.success('Usuario Registrado')
                        }
                    })
                    .catch(err => console.log(err))
            } 
        },
        // Actualiza el valor de this.error en caso de error
        validator(){
            if (!this.name || !this.email || 
                !this.password   || !this.phone ||
                !this.address   || !this.user){
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
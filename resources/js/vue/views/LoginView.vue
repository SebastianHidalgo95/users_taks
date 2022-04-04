<template>
    <div class="content bg-content vh-100 min-vh-100 vw-100 min-vw-100">
        <div class="row"></div>
        <div class="container  w-75 shadow-lg">
            <div class="row align-items-lg-stretch mt-5" >
                <div class="col d-none bg d-md-block col-md-5 col-lg-5 col-xl-6 rounded p-0">
                    <img class="img-fluid h-100 p-0 m-0" src="../../../assets/login.png"/>
                </div>
                <div class="col bg-white p-5 rounded-end">
                    <h2 class="fw-bold text-center my-5">Bienvenido</h2>
                    
                        <div class="mb-4">
                            <label for="email" class="form-label">Correo Electronico</label>
                            <input class="form-control" name="email" v-model="email">
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" name="password" v-model="password">
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary" @click="toLogin">Iniciar Sesion</button>
                        </div>
                        <div class="my-3">
                            <div class="row text-center my-2">
                                <span>No tienes Cuenta? <a href="#">Registrate</a></span>
                            </div>
                            <div class="row text-center my-2">
                                <span>Recuperar <a href="#">Password</a></span>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {

            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions('auth', ["login"]),
        toLogin (){
            this.$store.dispatch('auth/login', {email: this.email, password: this.password})
            .then(() => this.$router.push('/dashboard/home'))
            .catch(err => console.log(err))
        }
    }
}
</script>
<style lang="scss" scoped>

.bg-content {
    background: #ffe259;
    background: linear-gradient(to right, #091ebba8, #580451)
}

// .bg {
//     background-image: url(../../../assets/login.png);
//     background-position: center center;
// }
// #img-log {
//     transform: scale(0.3);
// }

</style>
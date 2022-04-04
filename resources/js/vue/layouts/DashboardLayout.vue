<template >
<!-- Esqueleto del dashboard, principalmente NAVBAR -->
    <div class="layout">
    <Navbar @logout="logout"/>
    <router-view></router-view>
    </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'

export default {
    components: {
        Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
    },
    data() {
        return {
            user:''
        }
    },
    computed: {
        ...mapGetters('auth', ['isLogged'])
    },
    created() {
        // Si esta loggeado lanza action del store para realizar peticion http del usuario
        if ( this.isLogged ){
            this.$store.dispatch('auth/getUser')
        } 
    },
    methods: {
        // En caso de click del botton logout
        async logout(){
            await this.$store.dispatch('auth/logout')
            this.$router.push('/login')
        }
    },
}
</script>
<style lang="scss" scoped>


</style>
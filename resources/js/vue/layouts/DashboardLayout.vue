<template >
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
        if ( this.isLogged ){
            this.$store.dispatch('auth/getUser')
        } 
    },
    methods: {
        async logout(){
            await this.$store.dispatch('auth/logout')
            this.$router.push('/login')
        }
    },
}
</script>
<style lang="scss" scoped>


</style>
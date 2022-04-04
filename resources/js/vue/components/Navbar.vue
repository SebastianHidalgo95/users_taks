<template>
    <nav class="navbar ">
        <div class="mr-auto">
            <a class="navbar-brand text-white">
                <img src="../../../assets/logo.png"
                    height="24"
                    alt="logo Vue"
                    class="d-inline-block aline-text-top mx-2" />
                Facturación
            </a>
            <router-link :to="{ name: 'home-view'}">Home</router-link>
            <router-link :to="{ name: 'facturas-view'}">Facturas</router-link>
        </div>
        
        <div class="mr-auto">
        </div>
        <div class="d-flex">
            <button  @click="$emit('logout')" class="btn btn-danger mx-2">
                Logout  <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
nav {
    background: linear-gradient(to right, #091ebba8, #580451)
}
div a {
    text-decoration: none;
    font-weight:bold;
    color: #f4f6f8;
    margin: 0 10px;
    justify-content: center;
    align-content: center;
}
a.router-link-exact-active {
    background: transparent;
    border-bottom: solid 3px rgba(255, 255, 255, 0.75);
}
</style>
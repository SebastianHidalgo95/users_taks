<template >
    <button class="btn btn-primary fs-5 action text-capitalize" @click="$emit('launchAction')">
        {{ action }}
        <i class="fa fa-lg fa-cloud-upload" 
        >
        </i>
    </button>
    <button class="btn btn-danger fs-5 cancel" @click="cancelAction">
       Cancelar
    </button>
</template>
<script>
export default { 
    props: {
        action: {
            type: String,
            required: true,
        }
    },
    methods: {
        cancelAction(){
            this.$router.push('/dashboard/facturas')
        }
    },


}
</script>
<style lang="scss" scoped>
.action {
    bottom : 40px;
    position: fixed;
    right:  150px;
}
.cancel {
    bottom : 40px;
    position: fixed;
    right:  50px;
}
</style>
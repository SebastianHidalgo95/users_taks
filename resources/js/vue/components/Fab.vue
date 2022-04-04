<template >
    <button class="btn btn-primary fs-4" @click="$emit('launchAction')">
        {{ action }}
        <i class="fa fa-lg fa-cloud-upload" 
        >
        </i>
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


}
</script>
<style lang="scss" scoped>
button {
    bottom : 40px;
    position: fixed;
    right:  50px;
}
</style>
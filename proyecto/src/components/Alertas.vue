<template>
    <div>
        <v-alert
            :type="type"
            class="mb-5 mt-5"
            variant="outlined">
            {{ message }}
        </v-alert>
        <v-btn :color="type" @click="salir()">Cerrar</v-btn>
    </div>

</template>
<script>

export default ({
    name: "appAlert",
    props:['type', 'message'],
    setup() {
        
    },
    methods:{
        salir(){
            this.$emit('close', false)
        }
    }
})
</script>
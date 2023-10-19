<template>
    <div class="container w-100">
        <h1 class="text-center text-uppercase">Clientes {{server}}</h1>
        <v-row class="mt-5">
            <appClients :clients="clients" :headers="headers" />
        </v-row>
          
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import appClients from '../components/Clients.vue'

export default {
    name: "ClientsView",
    components:{
        appClients
    },
    data(){
        return{
            server: process.env.VUE_SERVER_LOCAL,
            headers: [
                {text: "ID", value: "id"},
                {text: "NOMBRE", value: "name"},
                {text: "EDAD", value: "age"},
                {text: "PROFESION", value: "profession"},
                {text: "ACCIONES", value: "actions"},
            ]
        }
    },
    created(){
        this.loadClients()
    },
    methods:{
        ...mapActions('clients',['loadClients'])
    },
    computed:{
        ...mapGetters('clients',['clients'])
    }
    
}
</script>
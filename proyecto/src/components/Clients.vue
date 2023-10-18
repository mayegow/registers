<template>
    <div class="container col-12">
        <DialogApp :dialog="dialog" @dialog="dialog = $event" @name="data.name = $event" @age="data.age = $event" @profession="data.profession = $event" @createClient="createRegister = $event" :createRegister="createRegister(this.data)"/>
        <div>
            <v-card>
                <v-card-title>

                    <h4>Registros</h4>
                    <v-spacer></v-spacer>
                    
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details>
                    </v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        @click="createItem()"
                        >
                        Agregar
                    </v-btn>
                </v-card-title>
                <v-data-table
                    dense
                    :headers="headers"
                    :items="clients"
                    :search="search"
                    item-value="id"
                    class="elevation-1"
                >
                    
                    <template v-slot:[`item.age`]="{ item }">
                        <v-chip
                        :color="getColor(item.age)"
                        dark>
                            {{ item.age }}
                        </v-chip>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                color="info"
                                size="small"
                                class="me-2"
                                @click="editItem(item)"
                                v-bind="attrs"
                                v-on="on"
                                >
                                mdi-pencil
                            </v-icon>
                            </template>
                            <span>Editar</span>
                        </v-tooltip>
                        <v-tooltip  bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    color="error"
                                size="small"
                                @click="deleteItem(item)"
                                v-bind="attrs"
                                v-on="on"
                                >
                                mdi-delete
                                </v-icon>
                            </template>
                            <span>Eliminar</span>

                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-card>
        </div>
    </div>
  
</template>

<script>
// import VTable from './VTable.vue';
import { mapActions } from 'vuex' 
import DialogApp from './Dialog.vue'


export default {
    
    props: [
        "clients",
        "headers",
    ],
    components:{
        DialogApp
    },
    name: "appClients",
    data(){
        return{
            itemsPerPage: 9,
            search:"",
            deleteModal: false,
            dialog: false,
            data: {
                name:"",
                age:"",
                profession:""
            }
        }
    },
    
    methods:{
        ...mapActions('clients', ['deleteRegister', 'createRegister']),
        getColor(age){
            if(age > 18 && age < 31){
                return 'blue'
            } else if(age > 31){
                return "orange"
            } else {
                return "green"
            }

        },
        editItem(item){

        },
        deleteItem(item){
            this.$alertify.confirm(`¿Estas seguro de querer eliminar este registro?: ${item.id}`,
            () => {
                this.deleteRegister(item.id)
                this.$alertify.success(`Registro: ${item.id} fue eliminado con éxito!`)
            },
            () => {
                this.$alertify.error('Se canceló el proceso')
            }
            );
        },
        createItem(){
            this.dialog = true
        },
        createClient(){
            this.createRegister(this.data)
        },
    }

}
</script>
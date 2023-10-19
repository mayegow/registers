<template>
  <div>
    <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          width="1024"
        >
         
          <v-card>
            <v-card-title >
              <span v-if="data.id == 0" class="text-h5">Nuevo Cliente</span>
              <span v-else class="text-h5">Actualizar Cliente</span>
              <v-spacer></v-spacer>
              <span v-if="data.id > 0" class="text-h5">ID: {{ data.id }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Nombre Completo*"
                      required
                      v-model="data.name"
                      :keyup="onText(data.name)"

                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Edad*"
                      required
                      type="number"
                      v-model="data.age"
                      :keyup="onText(data.age)"

                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Profesión*"
                      v-model="data.profession"
                      :keyup="onText(data.profession)"
                      required
                    ></v-text-field>
                  </v-col>
                 
                  
                  
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                variant="text"
                @click="closeDialog()"
              >
                Cerrar
              </v-btn>
              <v-btn
                v-if="data.id == 0"
                color="success"
                variant="text"
                @click="addClient()"
              >
                Guardar
              </v-btn>
              <v-btn
                v-else
                color="success"
                variant="text"
                @click="updateClient()"
              >
                Actualizar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: [
        "dialog",
        "data",
    ],
    data(){
        return{
            
            
        }
    },
    methods:{
      ...mapActions('clients', ['createRegister', 'updateRegister']),
        closeDialog(){
            this.$emit('dialog', false)
        },
        onText(value){
            this.$emit('data', value)
        },
        addClient() {
            console.log("llamando al evento para agregar un registro en la base de datos")
            console.log(this.data)
            this.createRegister(this.data)
            this.closeDialog()
            
          },
          updateClient(){
            console.log("actualizando data de: ", this.data.id)
            this.updateRegister(this.data)
            this.closeDialog()
        }
    }
}
</script>

<template>
  <div>
    <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          width="1024"
        >
         
          <v-card>
            <v-card-title>
              <span class="text-h5">Nuevo Cliente</span>
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
                      @keyup="onText('name', name)"

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
                      v-model="data.age"
                      @keyup="onText('age', age)"

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
                      @keyup="onText('profession', profession)"
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
                color="success"
                variant="text"
                @click="emitEvento()"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
  </div>
</template>

<script>
export default {
    props: [
        "dialog",
        "name",
        "age",
        "profession",
        "createRegister"
    ],
    data(){
        return{
            data: {
                name: this.name,
                age: this.age,
                profession: this.profession
            }
            
        }
    },
    methods:{
        closeDialog(){
            this.$emit('dialog', false)
        },
        onText(variable, value){
            this.$emit(variable, value)
        },
        emitEvento() {
            console.log("tratando de ejecutar evento")
            this.$on('createRegister', this.createRegister(this.data));
        }
    }
}
</script>

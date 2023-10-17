<template>
  <div class="about">
    <h1 class="text-center">Alertas</h1>
    <v-btn color="primary" class="mb-3" @click="visible()">Mostrar</v-btn>
    <!-- <appAlerta v-for="alert, idx in alerts" :key="idx" :type="alert.type" :message="alert.message" ></appAlerta> -->
    <appAlerta v-if="success" type="info" message="Holi" @close="success = $event"></appAlerta>
    <appAlerta v-if="error" type="error" message="Holi" @close="error = $event"></appAlerta>
    <appAlerta v-if="warning" type="warning" message="Holi" @close="warning = $event"></appAlerta>
    <div class="text-center">
      
    </div>
  </div>

</template>
<script>
import appAlerta from '../components/Alertas.vue'
  export default {
    components:{
      appAlerta
    },
    name: "Usuarios",
    data () {
      return {
        page: 1,
        /* Esto solo se utilza para el componente con el for */
        alerts:[
          {type: "success", message: "I´m success alert"},
          {type: "warning", message: "I´m warning alert"},
          {type: "error", message: "I´m error alert"},
          {type: "info", message: "I´m info alert"},
        ],
        /* Esto solo se utilza para el componente con el for */
        success: false,
        error: false,
        warning: false,
      }
    },
    methods:{
      insertarEnlace(ruta){
        this.$router.push(ruta)
      },
      visible(){
        this.success = true
        this.error = true
        this.warning = true
      }
    },
    watch:{
      page(){
        this.insertarEnlace(`/usuarios/${this.page}`)
      }
    }
  }
</script>

<template>
    <div class="container w-100">
        <h1 class="text-center text-uppercase">Imagenes</h1>
        <v-row>
            
            <appImage v-for="img, idx in images" :key="idx" :img="img.download_url" :author="img.author" :url="img.url" :id="img.id" />
        </v-row>
          
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import appImage from '../components/Image.vue'

export default {
    name: "ImagesView",
    components:{
        appImage
    },
    data(){
        return{
            
        }
    },
    created(){
        this.loadImages()
    },
    methods:{
        ...mapActions('images',['loadImages'])
    },
    computed:{
        ...mapGetters('images',['images'])
    }
    
}
</script>
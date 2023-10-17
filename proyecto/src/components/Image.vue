<template>
    <div class="col-12 col-sm-6 col-md-4">
            <div>
        <v-card
            color="#fff"
            theme="dark"
        >
            <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title class="text-h5">
                {{ author }}
                </v-card-title>

                <v-card-subtitle>{{id}}</v-card-subtitle>

                <v-card-actions>

                <a :href="url"
                    class="ms-2 btn btn-info"
                    target="_blank"
                    variant="text"
                >Ver más</a>
                </v-card-actions>
            </div>

            <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
            >
                <v-img :src="img"></v-img>
            </v-avatar>
            </div>
        </v-card>
    </div>
    </div>
  
</template>

<script>
export default {
    props: [
        "img",
        "author",
        "url",
        "id"
    ],
    name: "appImage",

}
</script>
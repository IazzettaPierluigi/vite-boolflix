<script>
import { store } from "../store"
export default {

    name: "FilmCard",

    props: [
        "propsElement",
        "propImg",
    ],

    data() {
        return {
            store,
        };
    },
    created() {

    },
    methods: {

    },
};
</script>

<template>
    <div class="col-2 text-center mb-3 card border-0 ">
        <div class="card-body p-5 border ">
            <figure>
                <img :src="`https://image.tmdb.org/t/p/w342/${propImg}`" alt="">
            </figure>

            <h1 class="card-title fs-3">{{ propsElement.title }}</h1>
            <h3 class="card-subtitle text-body-secondary fs-4">{{ propsElement.original_title }}</h3>
            <h4 class="fs-5">{{ propsElement.vote_average }}</h4>

            <!-- facciamo if per far comparire l'immagine della bandiera inglese al posto della scritta en -->
            <img class="nation" v-if="propsElement.original_language === 'en'" src="../assets/img/united-kingdom.png"
                alt="">
            <img class="nation" v-else-if="propsElement.original_language === 'fr'" src="../assets/img/france.png" alt="">
            <img class="nation" v-else-if="propsElement.original_language === 'it'" src="../assets/img/italy.png" alt="">
            <img class="nation" v-else-if="propsElement.original_language === 'de'" src="../assets/img/germany.png" alt="">
            <h5 v-else class="fs-6">{{ propsElement.original_language }}</h5>
        </div>
    </div>
</template>

<style lang="scss">
.card-body {
    h1 {
        font-size: 20px;
    }

    .nation {
        width: 20px;
    }
}
</style>

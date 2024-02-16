<script>
import { store } from "../store"
export default {

    name: "SerieCard",

    props: [
        "propsElement2",
        "propImg2",
        "propVote2",
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
        <div class="card-body p-0 border rounded-2">
            <figure>
                <img :src="`https://image.tmdb.org/t/p/w342/${propImg2}`" alt="" class="rounded-2">
            </figure>
            <div class="text">

                <h1 class="mt-2">{{ propsElement2.name }}</h1>
                <hr>
                <h3>{{ propsElement2.original_name }}</h3>
                <hr>
                <p class="px-4"><span>Trama: </span>{{ propsElement2.overview }}</p>
                <!-- <h4 class="fs-5">{{ propsElement2.vote_average }}</h4> -->

                <span>

                    <i class="fa-solid fa-star" v-for="(element, index) in Math.ceil(propVote2 / 2)" :key="index"></i>

                    <!-- stars vuote -->
                    <i class="fa-regular fa-star" v-for="(element, index) in (5 - Math.ceil(propVote2 / 2))"
                        :key="index"></i>
                </span>

                <div>

                    <!-- facciamo if per far comparire l'immagine della bandiera inglese al posto della scritta en -->
                    <img class="nation" v-if="propsElement2.original_language === 'en'"
                        src="../assets/img/united-kingdom.png" alt="">
                    <img class="nation" v-else-if="propsElement2.original_language === 'fr'" src="../assets/img/france.png"
                        alt="">
                    <img class="nation" v-else-if="propsElement2.original_language === 'it'" src="../assets/img/italy.png"
                        alt="">
                    <img class="nation" v-else-if="propsElement2.original_language === 'de'" src="../assets/img/germany.png"
                        alt="">
                    <h5 v-else class="fs-6">{{ propsElement2.original_language }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

@include cards-style;
</style>

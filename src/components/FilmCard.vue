<script>
import { store } from "../store"
export default {

    name: "FilmCard",

    props: [
        "propsElement",
        "propImg",
        "propVote",
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
    <div class="col-2 text-center mb-3 card p-0 ">
        <div class="card-body p-0 ">
            <figure>
                <img :src="`https://image.tmdb.org/t/p/w342/${propImg}`" alt="" class="rounded-2">
            </figure>
            <div class="text">

                <h1 class="card-title mt-2 ">{{ propsElement.title }}</h1>
                <hr>
                <h3 class="card-text">Original title: {{ propsElement.original_title }}</h3>
                <hr>
                <!-- <h4 class="fs-5">{{ propsElement.vote_average }}</h4> -->
                <p class="px-4"><span>Trama: </span>{{ propsElement.overview }}</p>
                <span>
                    <!-- stars piene -->
                    <i class="fa-solid fa-star" v-for="(element, index) in Math.ceil(propVote / 2)" :key="index"></i>

                    <!-- stars vuote -->
                    <i class="fa-regular fa-star" v-for="(element, index) in (5 - Math.ceil(propVote / 2))"
                        :key="index"></i>
                </span>

                <div>

                    <img class="nation" v-if="propsElement.original_language === 'en'"
                        src="../assets/img/united-kingdom.png" alt="">
                    <img class="nation" v-else-if="propsElement.original_language === 'fr'" src="../assets/img/france.png"
                        alt="">
                    <img class="nation" v-else-if="propsElement.original_language === 'it'" src="../assets/img/italy.png"
                        alt="">
                    <img class="nation" v-else-if="propsElement.original_language === 'de'" src="../assets/img/germany.png"
                        alt="">
                    <h5 v-else class="fs-6">{{ propsElement.original_language }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

@include cards-style;
</style>

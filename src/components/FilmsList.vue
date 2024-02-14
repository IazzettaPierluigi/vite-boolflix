<script>
import { store } from "../store"

import FilmCard from "./FilmCard.vue"

import SerieCard from "./SerieCard.vue"
export default {

    name: "FilmsList",



    components: {
        FilmCard,
        SerieCard,
    },

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
    <div class="container-fluid ">
        <div class="row d-flex  mt-3 p-4 gap-3 ">

            <FilmCard v-for="(element, index) in store.filmsArray" :key="index" :propsElement="element"
                :propImg="element.poster_path" />
            <SerieCard v-for="(element2, index) in store.serieArray" :key="index" :propsElement2="element2"
                :propImg2="element2.poster_path" />
        </div>
    </div>
</template>

<style lang="scss"></style>

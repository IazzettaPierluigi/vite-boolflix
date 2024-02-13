<script>
import { store } from "../store"

import FilmCard from "./FilmCard.vue"
export default {

    name: "FilmsList",



    components: {
        FilmCard,
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
        <div class="row d-flex  mt-3 p-4">

            <FilmCard v-for="(element, index) in store.filmsArray.results" :key="index" :propsElement="element" />
        </div>
    </div>
</template>

<style lang="scss"></style>

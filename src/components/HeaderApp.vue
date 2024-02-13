<script>
//import store
import { store } from "../store";

//import axios per chiamata api e modifica
import axios from 'axios';
export default {

    name: "HeaderApp",


    data() {
        return {
            store
        };
    },
    created() {

    },
    methods: {

    },
};
</script>

<template>
    <div class="container-fluid">
        <div class="row bg-dark justify-content-between align-items-center  ">
            <div class="col-3 justify-content-center d-flex ">
                <h1 class="w-100 text-danger   ">boolflix</h1>
            </div>
            <div class="col-3 p-3   ">
                <div class=" justify-content-center d-flex">

                    <input type="text" class="form-control w-50 me-2 " id="" placeholder="Cerca un film.."
                        v-model="store.searchText">
                    <button type="button" class="btn btn-danger" @click.prevent="$emit('performSearch')">Cerca</button>
                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss"></style>

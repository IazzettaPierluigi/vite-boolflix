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
    <div class="col-2 text-center mb-3 card p-0 ">
        <div class="card-body p-0">
            <figure>
                <img :src="`https://image.tmdb.org/t/p/w342/${propImg2}`" alt="">
            </figure>
            <div class="text">

                <h1>{{ propsElement2.name }}</h1>
                <h3>{{ propsElement2.original_name }}</h3>
                <hr>
                <p class="px-4">{{ propsElement2.overview }}</p>
                <!-- <h4 class="fs-5">{{ propsElement2.vote_average }}</h4> -->
                <i class="fa-solid fa-star" v-for="(element, index) in Math.ceil(propVote2 / 2)" :key="index"></i>

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

<style lang="scss">
.card {
    position: relative;


    &:hover .card-body figure {
        display: none;
    }

    &:hover .card-body .text {
        display: block;
    }

    .card-body {
        figure {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .text {
            position: absolute;
            top: 0;
            display: none;
            width: 100%;
            height: 100%;
            overflow: auto;

            h1 {
                width: 100;
                font-size: 20px;
                font-weight: bold;
            }
        }

        h3 {
            font-size: 16px;
            opacity: 0.8;
        }

        p {
            font-size: 14px;
        }

        .nation {
            width: 20px;
        }
    }
}
</style>

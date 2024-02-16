<script>

import { store } from "./store";
import axios from "axios";


//header import
import HeaderApp from "./components/HeaderApp.vue";

//filmslist import
import FilmsList from "./components/FilmsList.vue"

//import filmcard
import FilmCard from "./components/FilmCard.vue"

//import seriecard
import SerieCard from "./components/SerieCard.vue"

export default {
  components: {
    HeaderApp,
    FilmsList,
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
    //chiamata api onclick
    requestFilm() {

      if (this.store.filmsArray.length > 0) {
        this.store.filmsArray = []
      }
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=402df4d041174a1c48401bf733b62e8d&query=${store.searchText}`).then((res) => {

        console.log("Risultati dei film:", res.data.results);
        this.store.filmsArray.push(...res.data.results);
      })
    },

    requestTv() {
      if (this.store.serieArray.length > 0) {
        this.store.serieArray = []
      }
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=402df4d041174a1c48401bf733b62e8d&query=${store.searchText}`).then((res) => {
        console.log("Risultati delle serie:", res.data.results)
        this.store.serieArray.push(...res.data.results);
      })
    },


    onSearch() {
      this.requestTv();
      this.requestFilm();
    }
  },
};
</script>

<template>
  <HeaderApp @performSearch="onSearch" />
  <FilmsList />
</template>

<style lang="scss"></style>
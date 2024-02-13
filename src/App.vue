<script>

import { store } from "./store";
import axios from "axios";


//header import
import HeaderApp from "./components/HeaderApp.vue";

//filmslist import
import FilmsList from "./components/FilmsList.vue"

export default {
  components: {
    HeaderApp,
    FilmsList,
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
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=402df4d041174a1c48401bf733b62e8d&query=${store.searchText}`).then((res) => {
        console.log(res.data)
      })
    }
  },
};
</script>

<template>
  <HeaderApp @performSearch="requestFilm" />
  <FilmsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

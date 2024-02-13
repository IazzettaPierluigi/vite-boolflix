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

  },
};
</script>

<template>
  <HeaderApp />
  <FilmsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

import { reactive } from "vue";

export const store = reactive({
  searchText: '',
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=402df4d041174a1c48401bf733b62e8d&query',
  filmsArray: [],
});

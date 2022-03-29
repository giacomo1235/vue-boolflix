<template>
  <div class="container-card">
      <p>{{searchString}}</p>
      <FilmCard v-for="film in arrFilms" :key="film.title" :film-data="film" />
  </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
import axios from 'axios'
export default {
  name: 'MainBoolflix',
  data () {
    return {
      arrFilms: null
    }
  },
  props: {
    searchString: String
  },
  components: {
    FilmCard
  },
  methods: {
    prova () {

    }
  },
  beforeUpdate () {
    axios.get(`'https://api.themoviedb.org/3/search/movie?api_key=2a1eafb77e5173892c5f55c2d7d7a8c8&query=${this.searchString}'`).then((response) => { this.arrFilms = response.data.results })
  }
}
</script>

<style lang="scss" scoped>
.container-card {
    display: flex;
    flex-wrap: wrap;
}

</style>

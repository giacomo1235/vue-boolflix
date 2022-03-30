<template>
  <div id="app">
    <HeaderBoolflix @search="ricercaStringa" />
    <MainBoolflix :array-series="arrSeries" :array-films="arrFilms" />
  </div>
</template>

<script>
import HeaderBoolflix from './components/HeaderBoolflix'
import MainBoolflix from './components/MainBoolflix'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix
  },
  data () {
    return {
      apikey: '?api_key=f02ffa74b73711e6636395976b8f13f3',
      apilink: 'https://api.themoviedb.org/3/search/',
      language: 'it-IT',
      film: 'movie',
      series: 'tv',
      strSearch: '',
      arrFilms: null,
      arrSeries: null

    }
  },
  methods: {
    ricercaStringa (strSearch) {
      this.strSearch = strSearch
      this.$emit('search', this.arrFilms)
      this.$emit('search', this.arrSeries)
      return axios.get(`${this.apilink}${this.film}${this.apikey}&language=${this.language}&query=${this.strSearch}`).then((response) => { this.arrFilms = response.data.results }).then(axios.get(`${this.apilink}${this.series}${this.apikey}&query=${this.strSearch}`).then((response) => { this.arrSeries = response.data.results }))
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: $grey_background;
}
</style>

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
      return axios.get(`${this.apilink}${this.film}${this.apikey}&query=${this.strSearch}`).then((response) => { this.arrFilms = response.data.results }).then(axios.get(`${this.apilink}${this.series}${this.apikey}&query=${this.strSearch}`).then((response) => { this.arrSeries = response.data.results }))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

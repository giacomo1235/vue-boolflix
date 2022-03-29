<template>
  <div id="app">
    <HeaderBoolflix @search="ricercaStringa" />
    <MainBoolflix :array-films="arrFilms" />
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
      strSearch: '',
      arrFilms: null

    }
  },
  methods: {
    ricercaStringa (strSearch) {
      this.strSearch = strSearch
      this.$emit('search', this.arrFilms)
      return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2a1eafb77e5173892c5f55c2d7d7a8c8&query=${this.strSearch}`).then((response) => { this.arrFilms = response.data.results })
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

<template>
  <div id="app">
    <HeaderBoolflix @search="ricercaStringa" />
    <MainBoolflix :search-string="strSearch" />
  </div>
</template>

<script>
import HeaderBoolflix from './components/HeaderBoolflix'
import MainBoolflix from './components/MainBoolflix'

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix
  },
  data () {
    return {
      strSearch: ''
    }
  },
  methods: {
    ricercaStringa (strSearch) {
      this.strSearch = strSearch
      console.log(strSearch)
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

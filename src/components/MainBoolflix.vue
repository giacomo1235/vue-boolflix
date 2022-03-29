<template>
  <div class="container-card">
      <FilmCard v-for="film in arrayFilms" :key="film.poster_path" :film-data="film" />
  </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
export default {
  name: 'MainBoolflix',
  data () {
    return {
    }
  },
  props: {
    arrayFilms: Array
  },
  components: {
    FilmCard
  }
}
</script>

<style lang="scss" scoped>
.container-card {
    display: flex;
    flex-wrap: wrap;
}

</style>

<template>
  <div class="container-card">
    <div class="title">
      <h1>FILM</h1>
    </div>
    <section class="films">
      <FilmCard v-for="film in arrayFilms" :key="film.poster_path" :film-data="film" />
    </section>
    <div class="title">
      <h1>SERIE</h1>
    </div>
    <section class="series">
      <FilmCard v-for="serie in arraySeries" :key="serie.poster_path" :film-data="serie" />
    </section>
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
    arrayFilms: Array,
    arraySeries: Array
  },
  components: {
    FilmCard
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/variables";
.container-card {
  background-color: $grey_background;
  width: 90%;
  margin: 0 auto;
}
.films,
.series {
    display: flex;
    flex-wrap: wrap;
}
.title {
    margin: 5rem;
}

</style>

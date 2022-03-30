<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w200/${filmData.poster_path}`" :alt="filmData.original_title">
    <h5>{{filmData.title}}</h5>
    <h5>{{filmData.name}}</h5>
    <p>{{filmData.original_title}}</p>
    <p>{{filmData.original_name}}</p>
    <lang-flag :iso="filmData.original_language" :squared="false" />
    <span>s</span>
    <p>{{votoStelline}}</p>
    <p>{{filmData.vote_average}}</p>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    filmData: Object
  },
  data () {
    return {
      votoStelline: Math.round(this.filmData.vote_average / 2)
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
div {
    width: 200px;
    height: 100%;
    margin: 2rem;
}

</style>

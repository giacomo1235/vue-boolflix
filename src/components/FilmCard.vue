<template>
  <div>
    <div class="front-card" @mouseenter="flipped = !flipped" v-if="flipped === true">
      <img :src="`https://image.tmdb.org/t/p/w400/${filmData.poster_path}`" :alt="filmData.original_title" v-if="filmData.poster_path != null">
      <img v-if="filmData.poster_path == null" src="https://picsum.photos/id/237/400/550" alt="">
    </div>
    <div class="back-card" @mouseleave="flipped = !flipped" v-if="flipped === false">
      <p><strong>Titolo:</strong>{{filmData.title}}{{filmData.name}}</p>
      <p><strong>Titolo originale:</strong>{{filmData.original_title}}{{filmData.name}}</p>
      <div class="lingua">
        <strong>Lingua originale:</strong>
        <lang-flag :iso="filmData.original_language" :squared="false" />
      </div>
      <div class="stars">
        <strong>Voto:</strong>
        <span v-for="i in votoStelline" :key="i" style="color: gold">&#9733;</span>
      </div>
      <p><strong>Overview:</strong>{{filmData.overview}}</p>
    </div>
    <!-- <p>{{votoStelline}}</p> -->
    <!-- <p>{{filmData.vote_average}}</p> -->
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
      votoStelline: Math.round(this.filmData.vote_average / 2),
      flipped: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/variables";
.stars {
    margin: 0;
}
.back-card,
.front-card {
    width: 400px;
    height: 550px;
    margin: 1rem;
}
.back-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.2rem;
    color: whitesmoke;
    line-height: 1.4rem;
    padding: 1rem;
    overflow: scroll;
    border: 2px solid white;
}
.front-card {
    overflow: hidden;
}

</style>

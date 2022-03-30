<template>
  <header>
    <div class="logo">
      <h1>BOOLFLIX</h1>
    </div>
    <form @submit.prevent="">
      <input @keyup="$emit('search', strSearch)" name="search" id="search" v-model="strSearch">
      <button @click="$emit('search', strSearch)">cerca</button>
    </form>
  </header>
</template>

<script>
export default {
  name: 'HeaderBoolflix',
  data () {
    return {
      strSearch: ''
    }
  }

}
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables";
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  padding: 2rem;
  background-color: $black_header;
  .logo {
    color: $red_logo;
  }
}

</style>

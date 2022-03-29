<template>
  <form @submit.prevent="">
    <input @keyup="$emit('search', strSearch)" name="search" id="search" v-model="strSearch">
    <button @click="$emit('search', strSearch)">cerca</button>
  </form>
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

<style>

</style>

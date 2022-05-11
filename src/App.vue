<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:""
    }
  },
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Warren Display', 'Montserrat', sans-serif;
  }
</style>

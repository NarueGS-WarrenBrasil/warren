<template>
  <div class="home">
    <HomeNav />
    <HomeBanner />
    <HomeDestaques />
    <HomeInvestir />
    <HomeRodape />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeNav from '../components/home/HomeNav.vue';
import HomeBanner from '../components/home/HomeBanner.vue';
import HomeDestaques from '../components/home/HomeDestaques.vue';
import HomeInvestir from '../components/home/HomeInvestir.vue';
import HomeRodape from '../components/home/HomeRodape.vue';
@Component({
  components: {
    HomeNav,
    HomeBanner,
    HomeDestaques,
    HomeInvestir,
    HomeRodape,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
  body{
    background-color: gray;
  }
</style>
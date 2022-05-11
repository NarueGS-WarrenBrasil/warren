<template>
  <div class="navbar">
    <VoltarIcon v-on:click.native="back" id="icon"/>
    <p id="title">FORMULÁRIO</p>
  </div>
   
    
</template>

<script>
import VoltarIcon from '../icons/VoltarIcon.vue'
import FormCadastro from './FormCadastro.vue'

export default {
  name: 'NavCadastro',
  components:{
    VoltarIcon,
  },
  
  methods: {
    back: function(){
      console.log(FormCadastro.data.call);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    background-color: rgb(255, 26, 95);
    display: flex;
    padding-bottom: 0px;
    height:1.5em;
    font-size: 30px;
    margin-bottom: 0%; 
    text-align: center;  color: azure; 
    }

    p{
      margin-top: 0.8%;
      margin-left: 48%;
      font-size: 45%;
      font-weight: 700;
    }

    #icon{
      margin: 0.5%;
      margin-left: 0.5%;
    }
</style>

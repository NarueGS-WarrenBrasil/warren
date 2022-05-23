<template>
  <div class="corpo">
    <FormCadastro />
    <img  class="moça" alt="moça grande" src="@/assets/moçaGrande.png" width="621" height="1287" >
    
  </div>
</template>

<script setup>
import FormCadastro from '../components/cadastro/FormCadastro.vue'

export default{
    components:{
        FormCadastro,
    }
}
</script>

<style>

    @media (max-width: 600px){
  .facet_sidebar
   {
    display: none;
   }
  }



  body{
    background-color: rgb(246, 253, 254);
    margin: 0%;
    font-family: ;
  }

  .moça{
    float: right;
    position:relative;
    width: 33vw;
    height:100%;
  }
</style>

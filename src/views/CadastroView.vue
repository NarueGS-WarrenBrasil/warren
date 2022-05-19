<template>
  <div class="corpo">
    <FormCadastro />
    <img  id="moça" alt="moça grande" src="@/assets/moçaGrande.png" width="621" height="1287" >
    
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
  body{
    background-color: rgb(246, 253, 254);
    margin: 0%;
    font-family: ;
  }

  #moça{
    float: right;
  }
</style>
